const navbar = document.querySelector(".side-navbar");
const toggleNavbar = document.querySelector(".toggle-navbar");

const handleToggle = () => navbar.classList.toggle("side-navbar-width");
toggleNavbar.addEventListener("click", handleToggle);
