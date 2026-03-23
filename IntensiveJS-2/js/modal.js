
export default function modal() {
    const modal = document.querySelector('.search-model'),
    modalBtn = document.querySelector('.icon_search'),
    modalCloseBtn = modal.querySelector('.search-close-switch'),
    modalInput = modal.querySelector('#search-input')
  ;

  modalBtn.addEventListener('click', ()=> {
    modal.style.display = "block";

    modalCloseBtn.addEventListener('click', () => {
      modal.style.display = "none"
    })

    modalInput.addEventListener('input', ()=> {
      setTimeout(()=>{
        console.log(modalInput.value)
      }, 200) // делается для того чтобы убедиться что человек закончил ввод или мог исправить ошибку.
      // обычно применяется когда к примеру система ищет в БД возможные совпадения и сразу выводит из пользователю
    })
  })
}

document.addEventListener('DOMContentLoaded', ()=>{
  modal()
})


