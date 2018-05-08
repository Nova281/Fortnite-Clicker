function instFunction() {
	alert("Click for more V-Bucks! Enjoy!");
}

var points = 0;
function clickFunction() {
	points = points + 100;
	document.querySelector("p").textContent = points + " V-Bucks";
}
document.getElementById('imgButton').addEventListener('click', clickFunction);

/*function rainFunction() {
	document.createElement('VBucks.png')
}*/
