import preloader from './preloader.js';
import modal from './modal.js';
import * as render from './mainData.js';
import scrollTotop from './scrollToTop.js';

document.addEventListener('DOMContentLoaded', ()=> {
  preloader() //  в целом нет необходимости, такое надо запускать в fetch
  modal()
  scrollTotop()

  render.fetchData('./db.json').then(data => {
    render.renderGanreList(data.ganres)
    render.renderAnimeList (data.anime, data.ganres, '.product .col-lg-8')
    render.renderTopAnime (data.anime.sort((a, b) => b.views - a.views).slice(0, 5))
  })


})

