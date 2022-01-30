const menuIcon = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

const openSidebar = () => {
	sidebar.classList.add("sidebar-toggle");
};

const closeSidbar = () => {
	sidebar.classList.remove("sidebar-toggle");
};

menuIcon.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidbar);
