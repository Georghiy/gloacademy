document.addEventListener('DOMContentLoaded', ()=>{
  const slider = new Swiper('.swiper',
    {
      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.arrow_carrot-right',
        prevEl: '.arrow_carrot-left',
      },
      effect: "fade",
      speed: 1000,
    }
  )


})

