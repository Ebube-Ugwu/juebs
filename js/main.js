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


	toggleCollapsibles();
	// navToggler.addEventListener("click", toggleNav);	
}


document.addEventListener("DOMContentLoaded", () => {
	initializeCollapsibles();
})