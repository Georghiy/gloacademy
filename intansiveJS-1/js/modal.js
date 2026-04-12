  document.addEventListener('DOMContentLoaded', ()=>{
    const modalOpenBtnNList = document.querySelectorAll('.more'),      
      modal = document.querySelector('.modal'),
      modalClose = modal.querySelector('.modal__close'),
      modalOverlay =  modal.querySelector('.overlay')
    ;

    modalOpenBtnNList.forEach(btn => {
      btn.addEventListener('click',()=>{
        modal.classList.remove('hidden')
      })
    });

    modalOverlay.addEventListener('click',()=>{
      modal.classList.add('hidden')
    });

    modalClose.addEventListener('click',()=>{
      modal.classList.add('hidden')      
    });   

  })