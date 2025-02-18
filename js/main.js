function initializeCollapsibles () {
	const navToggler = document.querySelector(".nav__toggler");

	function toggleNav() {
		const nav = document.querySelector("nav");
		nav.classList.toggle("collapsible--expanded");
	}

	navToggler.addEventListener("click", toggleNav);	
}


document.addEventListener("DOMContentLoaded", () => {
	// initializeCollapsibles();
})