import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";

const CustomFeed: QuartzComponent = ({ allFiles }: QuartzComponentProps) => {
  const posts = allFiles
    .filter((f) => f.frontmatter?.tags?.includes("posts"))
    .sort((a, b) => {
      const aDate = new Date((a.frontmatter?.created as string | number) ?? 0).getTime()
      const bDate = new Date((b.frontmatter?.created as string | number) ?? 0).getTime()
      return bDate - aDate
    })
    .slice(0, 5)

  return (
    <div class="recent-posts">
      <h3>recent posts</h3>
      <ul>
        {posts.map((p) => (
          <li>
            <a href={`/${p.slug}`}>{p.frontmatter?.title ?? p.slug}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default (() => CustomFeed) satisfies QuartzComponentConstructor