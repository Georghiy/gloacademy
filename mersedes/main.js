import accordion from "./js/accordion.js";
import tabs from "./js/tabs.js";
import smoothScroll from "./js/smothscroll.js";


document.addEventListener('DOMContentLoaded', ()=>{
    const accordionBtnList = document.querySelectorAll('.feature__link'),
        accordionItemList = document.querySelectorAll('.feature-sub'),
        tabsBtnList = document.querySelectorAll('.design-list__item'),
        tabsContentList = document.querySelectorAll('[data-tabs-field]'),
        menuLinkList = document.querySelectorAll('.menu-list__link'),
        mainScroll = document.querySelector('.main__scroll'),
        allLinkList = [...menuLinkList, mainScroll]
    ;

    accordion(accordionBtnList,accordionItemList)
    tabs(tabsBtnList, tabsContentList)
    smoothScroll(allLinkList)
})