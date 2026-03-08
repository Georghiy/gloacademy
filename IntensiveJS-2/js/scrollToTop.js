document.addEventListener('DOMContentLoaded', ()=>{
  const topBtn = document.querySelector('#scrollToTopButton')
  ;

  topBtn.addEventListener('click', (event)=>{
    console.log(event)
    event.preventDefault()
    seamless.scrollIntoView(document.querySelector(".header"), {
        behavior: "smooth",
        block: "center",
        inline: "center",
    })


  })
})
