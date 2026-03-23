let dictionary = {
  main: {
    text: "Главная",
    link: "./index.html"
  },
  categories: {
    text: "Категории",
    link: "./categories.html"
  }
}

const createCrumbObj = (crumb, link, ruText = false) => {
  let crumbObj = {
    link
  }
  if (ruText) {
    crumbObj.text = ruText
    crumbObj.crumb = crumb
    } else {
      crumbObj.text = crumb
  }
  return crumbObj
}

const addCrumbInDictionary = (dictionary, crumbsDb) => {
  // dictionary, crumb, link, ruText

  if (Array.isArray(crumbsDb)){
    crumbsDb.forEach(crumbObj => {
      crumbObj.crumb ? dictionary[crumbObj.crumb] = crumbObj : dictionary[crumbObj.text] = crumbObj
    })
  } else {
    crumbsDb.crumb ? dictionary[crumbsDb.crumb] = crumbsDb :
    dictionary[crumbsDb.text] = crumbsDb
  }
}

const renderBreadCrumbs = (selector, dictionary, crumbList) => {
  const breadcrumbBlock = document.querySelector(selector);
  breadcrumbBlock.innerHTML = ''
  crumbList.forEach(crumb => {
    let crumbEl
    if (dictionary[`${crumb}`]) {
      crumbEl = document.createElement('a')
      crumb === 'main' ?
        crumbEl.innerHTML = `<i class="fa fa-home"></i>${dictionary[`${crumb}`].text}` :
        crumbEl.innerText = `${dictionary[`${crumb}`].text}`

      crumbEl.href = dictionary[`${crumb}`].link
    } else {
      crumbEl = document.createElement('span')
      crumbEl.textContent = crumb
    }

    breadcrumbBlock.insertAdjacentElement('beforeend', crumbEl)
  })
}

export {renderBreadCrumbs, dictionary, addCrumbInDictionary, createCrumbObj}
