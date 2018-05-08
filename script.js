var points = 0;
function clickFunction() {
	points++;
	document.querySelector("p").textContent = points + " V-Bucks";
}
document.getElementById('imgButton').addEventListener('click', clickFunction);
