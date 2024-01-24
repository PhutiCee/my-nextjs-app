import getUser from "@/lib/getUser"
import getUserPost from "@/lib/getUserPost"
import { Suspense } from "react"
import UserPosts from "./components/userPosts"
import styles from './styles.module.css'
import { Metadata } from "next"
import { title } from "process"
import { notFound } from "next/navigation"
import getAllUsers from "@/lib/getAllUsers"

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData

    if (!user) {
        return {
            title: "User Not Found!"
        }
    }

    return {
        title: user.name,
        description: `This is a page for ${user.name}`
    }
}

export default async function IndividualUserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostData: Promise<Post[]> = getUserPost(userId)

    const user = await userData

    if (!user) return notFound()

    return (
        <main className={styles.main}>
            <h1>{user.name}</h1>
            <br />
            <Suspense fallback={<h2>Loading Posts...</h2>}>
                <UserPosts props={userPostData} />
            </Suspense>
        </main>
    )
}

export async function generateStaticParams() {
    const userData: Promise<User[]> = getAllUsers()
    const users = await userData

    return users.map(user => ({userId: user.id.toString()}))
}
