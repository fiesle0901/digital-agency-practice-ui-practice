const nav = document.querySelector(".nav__links");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});
