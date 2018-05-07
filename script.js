var points = 0;
	function clickFunction(amount) {
		if(points + amount < 0) {
			amounts = 0;
		}
		points = points + amount;
		document.querySelector("p").textContent = points + " V Bucks";