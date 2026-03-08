document.addEventListener('DOMContentLoaded0', ()=>{
  const swiper = new Swiper('.swiper',
    {
      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: "fade",
      speed: 1000,
    }
  )
})

