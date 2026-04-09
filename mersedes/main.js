import accordion from "./js/accordion.js"
document.addEventListener('DOMContentLoaded', ()=>{
    const accordionBtnList = document.querySelectorAll('.feature__link'),
        accordionItemList = document.querySelectorAll('.feature-sub')
    ;

    console.log(accordionItemList)
    accordion(accordionBtnList,accordionItemList)
})