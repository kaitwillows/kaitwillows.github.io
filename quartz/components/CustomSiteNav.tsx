import { QuartzComponent, QuartzComponentConstructor } from "./types"

const CustomSidebar: QuartzComponent = () => {
  return (
    <article class="popover-hint"><h2 id="tagsposts--transient"><a href="/tags/posts" class="internal" data-slug="tags/posts">posts</a> <span class="greyed"> <em>transient</em></span><a aria-hidden="true" data-no-popover="true" href="#tagsposts--transient" class="internal"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a></h2>
    <ul>
    <li>#<a href="/tags/releases" class="internal" data-slug="tags/releases">releases</a> <span class="greyed"> - <em>music, finished</em></span></li>
    <li>#<a href="/tags/blips" class="internal" data-slug="tags/blips">blips</a> <span class="greyed"> - <em>music, unfinished</em></span></li>
    <li>#<a href="/tags/yips" class="internal" data-slug="tags/yips">yips</a> <span class="greyed"> - <em>words, small</em></span></li>
    <li>#<a href="/tags/yaps" class="internal" data-slug="tags/yaps">yaps</a> <span class="greyed"> - <em>words, big</em></span></li>
    <li>#<a href="/tags/songHarts" class="internal" data-slug="tags/songHarts">songHarts</a> <span class="greyed"> - <em>songs, not mine</em></span></li>
    </ul>
    <h2 id="tagspages-static"><a href="/tags/pages" class="internal" data-slug="tags/pages">pages</a> <span class="greyed"><em>static</em></span><a aria-hidden="true" data-no-popover="true" href="#tagspages-static" class="internal"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a></h2>
    <ul>
    <li><a href="/pages/me-and-my-site" class="internal alias" data-slug="pages/me-and-my-site">me and my site</a> <span class="greyed"> - <em>where we are</em></span></li>
    <li><a href="/pages/roadmap" class="internal" data-slug="pages/roadmap">roadmap</a> <span class="greyed"> - <em>songs of the future</em></span></li>
    </ul></article>
  )
}

export default (() => CustomSidebar) satisfies QuartzComponentConstructor