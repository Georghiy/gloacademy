document.addEventListener('DOMContentLoaded',()=>{
  const preloader = document.querySelector('.preloder');
  preloader.classList.add('active')

  fetch('./db.json')
    .then((response)=>{
        if (response.ok) {
          preloader.classList.remove('active')
          return response.json()
        } else {
          console.log("ошибка сервера " + response.status)
        }
      }
    )
    .then((data)=>{
      console.log(data.anime);
    })


})
