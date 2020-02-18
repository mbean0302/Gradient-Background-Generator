var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementsByName("random");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


const generateRandomColor = () => {
	color1.value = `#${Math.floor(Math.random() * 999999)}`;
	color2.value = `#${Math.floor(Math.random() * 999999)}`;
	setGradient();
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random[0].addEventListener("click", generateRandomColor);