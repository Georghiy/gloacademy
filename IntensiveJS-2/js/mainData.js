import {setbg} from './bg-element.js';

document.addEventListener('DOMContentLoaded',()=>{
  const renderAnimeList = (array, ganres) =>{
    console.dir(ganres)
    console.log(array)

  };

  const preloader = document.querySelector('.preloder');
  preloader.classList.add('active')

  const renderTopAnime = (array) => {
    const wrapper = document.querySelector('.filter__gallery')
    wrapper.innerHTML =" "
    array.forEach(item => {
      wrapper.insertAdjacentHTML('afterbegin', `
        <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
          <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          <h5><a href="/anime-details.html">${item.title}</a></h5>
        </div>
      `)
    setbg(wrapper)
    });
  }

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
      const ganres = new Set()
      data.anime.forEach(item => {
        ganres.add(item.ganre)
      })
      renderAnimeList (data.anime, ganres)
      renderTopAnime (data.anime.sort((a, b) => b.views - a.views).slice(0, 5)
    );
  })
})
