const nav = document.querySelector("#primary-nav");
const navBtn = document.querySelector('button[aria-controls="primary-nav"]');
const navBtnIcon = navBtn?.querySelector("i");

navBtn?.addEventListener("click", () => {
  const visibility = nav?.getAttribute("data-mobile-visible");
  if (visibility == "false") {
    nav?.setAttribute("data-mobile-visible", "true");
  } else {
    nav?.setAttribute("data-mobile-visible", "false");
  }
});
