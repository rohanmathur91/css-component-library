const menuIcon = document.querySelector(".menu");
const closeSidebar = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () =>
	sidebar.classList.add("sidebar-toggle")
);

closeSidebar.addEventListener("click", () =>
	sidebar.classList.remove("sidebar-toggle")
);
