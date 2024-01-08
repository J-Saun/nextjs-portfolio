const nav = document.querySelector("#primary-nav");
const navBtn = document.querySelector('button[aria-controls="primary-nav"]');
const visibility = nav.getAttribute("data-mobile-visible");

const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");

console.log(openBtn, closeBtn);
navBtn?.addEventListener("click", () => {
  const visibility = nav?.getAttribute("data-mobile-visible");
  if (visibility == "false") {
    nav?.setAttribute("data-mobile-visible", "true");
    closeBtn.classList.remove("hidden");
    openBtn.classList.add("hidden");
  } else {
    nav?.setAttribute("data-mobile-visible", "false");
    closeBtn.classList.add("hidden");
    openBtn.classList.remove("hidden");
  }
});
