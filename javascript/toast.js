const toast = document.querySelector(".demo-toast");
const openToast = document.querySelector(".open-demo-toast");
const closeToast = document.querySelector(".close-demo-toast");

let timerId;
const handleOpenToastClick = () => {
	toast.style.display = "flex";
	timerId = setTimeout(() => {
		toast.style.display = "none";
	}, 3000);
};

const handleCloseToastClick = () => {
	clearTimeout(timerId);
	toast.style.display = "none";
};

openToast.addEventListener("click", handleOpenToastClick);
closeToast.addEventListener("click", handleCloseToastClick);
