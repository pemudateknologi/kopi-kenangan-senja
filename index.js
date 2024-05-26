/** @format */

const menu = document.querySelector("#humberger-menu");
const links = document.querySelector(".links");

menu.addEventListener("click", function () {
  links.classList.toggle("active");
});
