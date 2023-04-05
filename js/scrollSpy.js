document.addEventListener('DOMContentLoaded', function () {
	const sec_1 = document.querySelector('.first')
	const sec_2 = document.querySelector('.second')
	const sec_3 = document.querySelector('.third')
	const sec_4 = document.querySelector('.fourth')
	const sec_5 = document.querySelector('.fifth')

	const nav = document.querySelector('nav')
	const home = document.querySelector('.home')
	const aboutus = document.querySelector('.about-us')
	const portfolio = document.querySelector('.portfolio')
	const prices = document.querySelector('.prices')

	// Ostatni element nie jest potrzebny
	let heightNav = nav.offsetHeight
	let heightHome = home.offsetHeight
	let heightAboutus = aboutus.offsetHeight
	let heightPortfolio = portfolio.offsetHeight
	let heightPrices = prices.offsetHeight

	const pos_1 = 0 - heightNav
	const pos_2 = heightHome - heightNav
	const pos_3 = heightAboutus + heightHome - heightNav
	const pos_4 = heightPortfolio + heightAboutus + heightHome - heightNav
	const pos_5 = heightPrices + heightPortfolio + heightAboutus + heightHome - heightNav

	function scrollSpy() {
		// Krótszy kod niż za pomocą funkcji warunkowej if
		// Pierwszemu elementowi, aby był od razu podświetlony przy uruchomieniu strony, trzeba nadać klasę "active" w HTMLu

		sec_1.classList.toggle('active', window.scrollY >= pos_1 && window.scrollY < pos_2)

		sec_2.classList.toggle('active', window.scrollY >= pos_2 && window.scrollY < pos_3)

		sec_3.classList.toggle('active', window.scrollY >= pos_3 && window.scrollY < pos_4)

		sec_4.classList.toggle('active', window.scrollY >= pos_4 && window.scrollY < pos_5)

		sec_5.classList.toggle('active', window.scrollY >= pos_5)
	}

	window.addEventListener('scroll', scrollSpy)
})
