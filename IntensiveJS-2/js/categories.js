import preloader from './preloader.js';
import modal from './modal.js';
import * as render from './mainData.js';
import scrollTotop from './scrollToTop.js';
import * as breadCrumbOption from './breadsCrumb.js'

document.addEventListener('DOMContentLoaded', ()=> {
  // определяем значение квери параметра из адресной строки ? может ли квери параметр содержать несколько переменных
  const params = new URLSearchParams(window.location.search),
    ganreFlag = params.get("ganre")
  ;

  preloader() //  в целом нет необходимости, такое надо запускать в fetch
  modal()
  scrollTotop()

  render.fetchData('./db.json').then(data => {
    render.renderGanreList(data.ganres)
    render.renderTopAnime (data.anime.sort((a, b) => b.views - a.views).slice(0, 5))

    if (ganreFlag === null) {
      const mainEl = document.querySelector('.product-page .col-lg-8')
      mainEl.innerHTML = " "
      data.ganres.forEach(ganre => {
        const ganreBlock = render.creategGanreBlockTitle(ganre)
        ganreBlock.classList.add('mb-5')

        mainEl.insertAdjacentElement('beforeend', ganreBlock)
      })

      // render.renderAnimeList(data.anime, data.ganres, '.product-page .col-lg-8')
      breadCrumbOption.renderBreadCrumbs('.breadcrumb__links', breadCrumbOption.dictionary, ['main', 'Категории'])
    } else {
      render.renderAnimeList(data.anime, [ganreFlag], '.product-page .col-lg-8')
      breadCrumbOption.renderBreadCrumbs('.breadcrumb__links', breadCrumbOption.dictionary, ['main', 'categories', ganreFlag])
      document.querySelector('.btn__all').innerHTML = " "

    }


  })


})

