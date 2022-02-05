const slider = document.querySelector("#slider-input");
const output = document.querySelector(".slider-output");

slider.addEventListener("change", () => {
	output.innerHTML = `You selected ${slider.value}`;
});
