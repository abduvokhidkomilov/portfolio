const btn = document.querySelector(".header__hamburger");
const nav = document.querySelector(".hidden");
btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});
