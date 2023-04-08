document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav')
	let lastScrollY = window.scrollY

	function hiddenNav() {
		nav.classList.toggle('hide', lastScrollY < window.scrollY)
		lastScrollY = window.scrollY
	}

	window.addEventListener('scroll', hiddenNav)
})
