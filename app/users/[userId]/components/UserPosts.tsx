type Props = {
    props: Promise<Post[]>
}
export default async function UserPosts({ props }: Props) {
    const posts = await props

    const content = posts.map(post => (
        <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br />
        </article>
    ))
    return content
}
