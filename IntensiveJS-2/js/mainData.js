import setbg from './bg-element.js';

const renderGanreList = (ganres) => {
  const dropdown = document.querySelector('.header__menu .dropdown');
  dropdown.innerHTML = ""

  ganres.forEach(ganre => {
    dropdown.insertAdjacentHTML('beforeend', `
      <li><a href="./categories.html?ganre=${ganre}">${ganre}</a></li>
    `)
  })
}

const creategGanreBlockTitle = (title)=>{
  const titleRow = document.createElement('div');

  titleRow.classList.add('row');
  titleRow.insertAdjacentHTML('beforeend', `
    <div class="col-lg-8 col-md-8 col-sm-8">
      <div class="section-title">
        <h4>${title}</h4>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4">
      <div class="btn__all">
        <a href="categories.html?ganre=${title}" class="primary-btn">Показать все<span class="arrow_right"></span></a>
      </div>
    </div>
  `)
  return titleRow
}

const renderAnimeList = (array, ganres, wrapperSelector) =>{
  const wrapper = document.querySelector(wrapperSelector);

  wrapper.innerHTML = '';

  ganres.forEach(ganre => {
    const productBlock = document.createElement('div'),
      listBlock = document.createElement('div')
    ;

    let list = [];

    if (ganres.length > 1 ) {
      list = array.filter(item=> item.ganre === ganre);

    } else {
      list = array.filter(item=> item.ganre.includes(ganre))
    }

    listBlock.classList.add('row');
    productBlock.classList.add('mb-5');
    productBlock.append(creategGanreBlockTitle(ganre))

    list.forEach(item => {
      const tagsBlock = document.createElement ('ul');

      item.tags.forEach(tag => {
        tagsBlock.insertAdjacentHTML('beforeend', `
          <li>${tag}</li>
        `)
      })

    listBlock.insertAdjacentHTML('beforeend', `
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="product__item">
          <div class="product__item__pic set-bg" data-setbg="${item.image}">
            <div class="ep">${item.rating}/ 10</div>
            <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          </div>
          <div class="product__item__text">
            ${tagsBlock.outerHTML}
                <h5><a href="./anime-details.html?item=${item.id}">${item.title}</a></h5>
            </div>
          </div>
        </div>
      `)
    })

    productBlock.append(listBlock);
    wrapper.append(productBlock);
  })
  setbg(wrapper)
};

const renderTopAnime = (array) => {
  const wrapper = document.querySelector('.filter__gallery')
  wrapper.innerHTML =" "
  array.forEach(item => {
    wrapper.insertAdjacentHTML('beforeend', `
      <div class="product__sidebar__view__item set-bg mix" data-setbg="${item.image}">
        <div class="ep">${item.rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
        <h5><a href="./anime-details.html?item=${item.id}">${item.title}</a></h5>
      </div>
    `)
  setbg(wrapper)
  });
}

const fetchData = async(src) => {
  const preloader = document.querySelector('.preloder');
  preloader.classList.add('active')

  try {
    const response = await fetch(src)
    if (!response.ok) {
      throw new Error ("Ошибка получения данных от сервера " + response.status);
    }
    // получаем объект БД и создаем пустую коллекцию (объект класса Set) который из всех передаваемых в обхект значений записывает в себя только уникальные (т.е. те что сам не содержит значения
    const data = await response.json(),
      ganres = new Set()
    ;
    preloader.classList.remove('active')
    // наполняем коллекцию перебирая все объекты БД и считывая кажды укаазанный жанр
    data.anime.forEach(item => {
      ganres.add(item.ganre)
    })

    return {anime: data.anime,
      ganres
    }
  } catch (error) {
    preloader.classList.remove('active')
    console.error(error)
  }
}

export {creategGanreBlockTitle, renderGanreList, renderAnimeList, renderTopAnime, fetchData}

// document.addEventListener('DOMContentLoaded',()=>{
//   const preloader = document.querySelector('.preloder');
//   preloader.classList.add('active')

//   // Получаем json строку, переводим ее в объект {anime: [массив объектов фильмов]}
//   fetch('./db.json')
//     .then((response)=>{
//         if (response.ok) {
//           preloader.classList.remove('active')
//           return response.json()
//         } else {
//           console.log("ошибка сервера " + response.status)
//         }
//       }
//     )
//     .then((data)=>{
//       // получаем коллекцию (объект класса Set) который записывает в себя только уникальные значения из всех переданных в объект
//       const ganres = new Set()
//       data.anime.forEach(item => {
//         ganres.add(item.ganre)
//       })

//       // запускаем функции отвечающие за рендер различных частей страницы
//       // алгоритм рендеров примерно одинаков - находим в разметке основного родителя, затираем его и затем в цикле формируем необходимые карточки вставляя html код как строку с переменными.
//       renderGanreList (ganres)
//       renderAnimeList (data.anime, ganres, '.product .col-lg-8')
//       renderTopAnime (data.anime.sort((a, b) => b.views - a.views).slice(0, 5)
//     );
//   })
// })
