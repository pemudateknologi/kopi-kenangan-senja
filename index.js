/** @format */

const menu = document.querySelector("#humberger-menu");
const links = document.querySelector(".links");

menu.addEventListener("click", function () {
  links.classList.toggle("active");
});

const keranjang = document.getElementById("tombol-keranjang");
const menuKeranjang = document.getElementsByClassName("menu-keranjang");

keranjang.addEventListener("click", function () {
  menuKeranjang[0].classList.toggle("active");
});
