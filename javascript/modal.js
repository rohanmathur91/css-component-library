const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".modal-open-btn");
const closeBtn = document.querySelector(".modal-close-btn");

openBtn.addEventListener("click", () => (modal.style.display = "flex"));
closeBtn.addEventListener("click", () => (modal.style.display = "none"));
