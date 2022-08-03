// select toggle button and nav
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
  toggle.classList.toggle("show-menu");
  overlay.classList.toggle("show-menu");
});
