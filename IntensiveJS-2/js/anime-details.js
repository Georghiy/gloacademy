import * as render from './mainData.js';
import * as breadCrumbOption from './breadsCrumb.js'
import setbg from './bg-element.js';
import scrollTotop from './scrollToTop.js';
import modal from './modal.js'

document.addEventListener('DOMContentLoaded', ()=>{
  const params = new URLSearchParams(window.location.search),
    itemFlag = params.get("item"),
    animeDetailsContentRow = document.querySelector('.anime__details__content .row')
  ;

  scrollTotop()
  modal()

  render.fetchData('./db.json').then(data => {
    const item = data.anime.find(animeObj => animeObj.id == itemFlag); // ищем в списке объект содержащий параметр id равный кверу параметру

    let breadsCrumbDictionary = breadCrumbOption.dictionary

    breadCrumbOption.addCrumbInDictionary(breadsCrumbDictionary, breadCrumbOption.createCrumbObj(item.ganre, `./categories.html?ganre=${item.ganre}`))
    breadCrumbOption.renderBreadCrumbs('.breadcrumb__links', breadsCrumbDictionary, ['main', 'categories', item.ganre, item.title])

    animeDetailsContentRow.innerHTML = `
      <div class="col-lg-3">
        <div class="anime__details__pic set-bg" data-setbg="${item.image}">
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="anime__details__text">
          <div class="anime__details__title">
            <h3>${item.title}</h3>
            <span>${item['original-title']}</span>
          </div>

          <p>${item.description}
          </p>
        </div>
          <div class="anime__details__widget">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <ul>
                  <li><span>Год выхода:</span> ${item.date}</li>
                  <li><span>Рейтинг:</span> ${item.rating}</li>
                  <li><span>Жанр:</span> ${item.tags.join(", ")}</li>
                </ul>
              </div>
            <div class="col-lg-6 col-md-6">
            </div>
          </div>
        </div>
      </div>
    `
    setbg(document)
  })


})
