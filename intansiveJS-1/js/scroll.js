// функция скорре нужна при условии, что нет доступа к css иначе  в css
//  html {scroll-behavior: smooth;
// scroll-margin-top: 80px; /* Высота вашей шапки + запас для фиксированной шапки*/}

document.addEventListener('DOMContentLoaded', ()=> {
  const links = document.querySelectorAll('a[href^="#"]')
	function varOne (target) {
		// метод ниже на работает на ios и mac
			if (target) {
				target.scrollIntoView({
					block: 'start',
					behavior: 'smooth'
				})
			}
	}

// метод универсальный использует seamless-scroll-polyfill (https://www.npmjs.com/package/seamless-scroll-polyfill)
	function varTwo (target) {
		    seamless.scrollIntoView(target, {
        behavior: "smooth",
        block: "center",
        inline: "center",
    })
	}

	links.forEach(link => {
		link.addEventListener	('click', (event) => {
			event.preventDefault()
			
			// определяем значение атрибута href и убираем из него # записывая значения начиная с 1 индекса строки
			const id = link.getAttribute('href').substring(1),
				// определяем цель ссылки
				targetEl = document.getElementById(id)
			;
			
			// varOne (targetEl)
			varTwo (targetEl)

		})
	})

})