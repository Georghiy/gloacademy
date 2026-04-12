document.addEventListener('DOMContentLoaded', ()=>{
	const timerEl = document.querySelector('.timer__time');
		const overDate =  "2026.02.19";
		 const setTimer = setInterval(timer, 500, overDate);

	
	function timer (overDate) {		
		// определяем интервал в миллисекдах, определяем в секундах, даллее каждую удиницу счетчика вычисляем какостаток от деления на 60
	// полученное число переводим в строку и применяем метод добавляющий впереди 0 если длина меньше заденной. 
		const date = new Date().getTime(),
			endDate = new Date(overDate).getTime(),		
			interval = (endDate - date) / 1000
		;

		if (interval <= 0) {
			clearInterval(setTimer)
			timerEl.textContent = ('00:00:00')
		} else {
			const timerSec = (Math.floor(interval % 60)).toString().padStart(2,0),
				timerMin = (Math.floor((interval / 60) % 60)).toString().padStart(2,0),
				timerHour = (Math.floor((interval / 60 / 60) % 24 )).toString().padStart(2,0),
				timerDay = Math.floor(interval / 60 / 60 / 24 ) > 0 ? (Math.floor(interval / 60 / 60 / 24 )).toString().padStart(2,0) : 0,		
				getText = () => {
					const lastDigit = timerDay % 10;
    			const lastTwoDigits = timerDay % 100;
					switch (true) {
						case (lastTwoDigits >= 11 && lastTwoDigits <= 14):
							return "дней";
						case (lastDigit === 1):
							return 'день';
						case (lastDigit > 1 && lastDigit < 5): 
							return 'дня';
						default:
							return 'дней'
					}
				}
			;
			timerEl.textContent = (`${timerDay !== 0 ? timerDay + " " + getText() : ""} ${timerHour}:${timerMin}:${timerSec} `)
		}			
	}
})