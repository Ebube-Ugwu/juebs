function initializeCollapsibles () {
	const navToggler = document.querySelector(".nav__toggler");
	const collapsibles = document.querySelectorAll(".collapsible");

	function toggleNav() {
		const nav = document.querySelector("nav");
		nav.classList.toggle("collapsible--expanded");
	}

	function toggleCollapsibles() {
		collapsibles.forEach( (item) => {
			item.addEventListener("click", () => {
				item.classList.toggle("collapsible--expanded");
			});
		});
	}


	navToggler.addEventListener("click", toggleNav);	
	toggleCollapsibles();
}


function initializeCopyright() {
	const currentYear = new Date().getFullYear();
	const copyright = document.querySelector(".copyright");
	copyright.innerText = copyright.innerText + currentYear;
}



document.addEventListener("DOMContentLoaded", () => {
	initializeCollapsibles();
	initializeCopyright();
})