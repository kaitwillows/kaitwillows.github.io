function toggleSiteNav(this: HTMLElement) {
  const nearestSiteNav = this.closest(".site-nav") as HTMLElement
  if (!nearestSiteNav) return
  const siteNavCollapsed = nearestSiteNav.classList.toggle("collapsed")
  nearestSiteNav.setAttribute(
    "aria-expanded",
    nearestSiteNav.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )

  if (!siteNavCollapsed) {
    document.documentElement.classList.add("mobile-no-scroll")
  } else {
    document.documentElement.classList.remove("mobile-no-scroll")
  }
}

function setupSiteNav() {
  for (const siteNav of document.getElementsByClassName("site-nav")) {
    const toggleButtons = siteNav.getElementsByClassName(
      "site-nav-toggle",
    ) as HTMLCollectionOf<HTMLElement>
    for (const button of toggleButtons) {
      button.addEventListener("click", toggleSiteNav)
      window.addCleanup(() => button.removeEventListener("click", toggleSiteNav))
    }
  }
}

document.addEventListener("nav", () => {
  setupSiteNav()

  for (const siteNav of document.getElementsByClassName("site-nav")) {
    const mobileToggle = siteNav.querySelector(".mobile-site-nav")
    if (!mobileToggle) continue

    if (mobileToggle.checkVisibility()) {
      siteNav.classList.add("collapsed")
      siteNav.setAttribute("aria-expanded", "false")
      document.documentElement.classList.remove("mobile-no-scroll")
    }

    mobileToggle.classList.remove("hide-until-loaded")
  }
})

window.addEventListener("resize", function () {
  const siteNav = document.querySelector(".site-nav")
  if (siteNav && !siteNav.classList.contains("collapsed")) {
    document.documentElement.classList.add("mobile-no-scroll")
    return
  }
})
