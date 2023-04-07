document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav');
    let lastScrollY = window.scrollY;

	function hiddenNav(){
		if(lastScrollY < window.scrollY){
			nav.style.top = "-200px"
		}else{
			nav.style.top = "0"
		}
		lastScrollY = window.scrollY;
	}

	window.addEventListener('scroll', hiddenNav);
})