export default function setbg(elem) {
    const elList = elem.querySelectorAll('.set-bg')

  elList.forEach(element => {
    const src = element.dataset.setbg
    element.style.backgroundImage = `url(${src})`
  });
 }

document.addEventListener('DOMContentLoaded', ()=> {
  setbg(document)
})
