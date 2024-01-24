import getAllUsers from "@/lib/getAllUsers"
import { Metadata } from "next"
import Link from "next/link"
import styles from './user.module.css'

export const metadata: Metadata = {
    title: "Users",
}

export default async function UserPage() {
    const userData: Promise<User[]> = getAllUsers()

    const users = await userData
    const content = (
        <main className={styles.main}>
            <h2>Users Available</h2>
            {users.map(user => {
                return (
                    <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br />
                    </>
                );
            })}
        </main>
    )
    return content
}
