import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/customSiteNav.scss"

// @ts-ignore
import script from "./scripts/customSiteNav.inline"

const navContent = (
  <nav class="custom-site-nav">
    <h2 id="tagsposts--transient">
      <a href="/tags/posts" class="internal" data-slug="tags/posts">
        posts
      </a>{" "}
      <span class="greyed">
        {" "}
        <em>transient</em>
      </span>
      <a
        aria-hidden="true"
        data-no-popover="true"
        href="#tagsposts--transient"
        class="internal"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </a>
    </h2>
    <ul>
      <li>
        #<a href="/tags/releases" class="internal" data-slug="tags/releases">
          releases
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>music, finished</em>
        </span>
      </li>
      <li>
        #<a href="/tags/blips" class="internal" data-slug="tags/blips">
          blips
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>music, unfinished</em>
        </span>
      </li>
      <li>
        #<a href="/tags/yips" class="internal" data-slug="tags/yips">
          yips
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>words, small</em>
        </span>
      </li>
      <li>
        #<a href="/tags/yaps" class="internal" data-slug="tags/yaps">
          yaps
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>words, big</em>
        </span>
      </li>
      <li>
        #<a href="/tags/songHarts" class="internal" data-slug="tags/songHarts">
          songHarts
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>songs, not mine</em>
        </span>
      </li>
    </ul>
    <h2 id="tagspages-static">
      <a href="/tags/pages" class="internal" data-slug="tags/pages">
        pages
      </a>{" "}
      <span class="greyed">
        <em>static</em>
      </span>
      <a
        aria-hidden="true"
        data-no-popover="true"
        href="#tagspages-static"
        class="internal"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </a>
    </h2>
    <ul>
      <li>
        <a href="/pages/me-and-my-site" class="internal alias" data-slug="pages/me-and-my-site">
          me and my site
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>where we are</em>
        </span>
      </li>
      <li>
        <a href="/pages/roadmap" class="internal" data-slug="pages/roadmap">
          roadmap
        </a>{" "}
        <span class="greyed">
          {" "}
          - <em>songs of the future</em>
        </span>
      </li>
    </ul>
  </nav>
)

const CustomSidebar: QuartzComponent = () => {
  return (
    <div class="site-nav collapsed" aria-expanded="false">
      <button
        type="button"
        class="site-nav-toggle mobile-site-nav hide-until-loaded"
        aria-controls="site-nav-panel"
        aria-label="Open site navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
      <div id="site-nav-panel" class="site-nav-content" role="group">
        {navContent}
      </div>
    </div>
  )
}

CustomSidebar.css = style
CustomSidebar.afterDOMLoaded = script

export default (() => CustomSidebar) satisfies QuartzComponentConstructor
