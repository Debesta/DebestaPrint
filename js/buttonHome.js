document.addEventListener('DOMContentLoaded', function () {
	const btn = document.querySelector('.buttonHome')
	const header = document.querySelector('header')
	let heightHeader = header.offsetHeight / 2

	function buttonHome() {
		btn.classList.toggle('buttonHome--show', window.scrollY > heightHeader)
		btn.classList.toggle('buttonHome--hide', window.scrollY <= heightHeader)
	}

	window.addEventListener('scroll', buttonHome)
})
