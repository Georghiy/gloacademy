document.addEventListener('DOMContentLoaded', ()=> {
  const elList = document.querySelectorAll('.set-bg')

  elList.forEach(element => {
    const src = element.dataset.setbg
    element.style.backgroundImage = `url(${src})`
  });

})
