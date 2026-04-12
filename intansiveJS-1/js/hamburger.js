document.addEventListener('DOMContentLoaded', ()=>{
	const burgerBtn = document.querySelector('.humburger-menu'),
		menu = document.querySelector('.menu'),
		menuItemNList = menu.querySelectorAll('.menu-list__item')
	;
	
	burgerBtn.addEventListener('click', () => {
		menu.classList.toggle('menu-active')
	});

	menuItemNList.forEach( link => {
		link.addEventListener('click', ()=>{
			menu.classList.remove('menu-active')		
		})
	});

	document.addEventListener('click', click=>{
		if(!(click.target.closest('.menu') || click.target.closest('.humburger-menu'))) {
			menu.classList.remove('menu-active')
		}
	})

})


