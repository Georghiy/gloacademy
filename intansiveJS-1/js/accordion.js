document.addEventListener('DOMContentLoaded', ()=>{
	const accordion = document.querySelector('.feature-list'),
		acordionBtnNList = accordion.querySelectorAll('.feature__link')	
	;

	acordionBtnNList.forEach(button => {
		button.addEventListener('click', (event) => {
			acordionBtnNList.forEach(btn => {
				if (btn.contains(event.target)) {
					button.classList.toggle('feature__link_active')
					button.nextElementSibling.classList.toggle('hidden')	
				} else {
					btn.classList.remove('feature__link_active')
					btn.nextElementSibling.classList.add('hidden')
				}
			})
		})
	});
})
