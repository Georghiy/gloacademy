import accordion from "./js/accordion.js";
import tabs from "./js/tabs.js";
import smoothScroll from "./js/smothscroll.js";
import modal from "./js/modal.js";
import burger from "./js/burger.js"

document.addEventListener('DOMContentLoaded', ()=>{
    const accordionBtnList = document.querySelectorAll('.feature__link'),
        accordionItemList = document.querySelectorAll('.feature-sub'),
        tabsBtnList = document.querySelectorAll('.design-list__item'),
        tabsContentList = document.querySelectorAll('[data-tabs-field]'),
        menuLinkList = document.querySelectorAll('.menu-list__link'),
        mainScroll = document.querySelector('.main__scroll'),
        mainBtn = document.querySelector('.main__button'),        
        allLinkList = [...menuLinkList, mainScroll, mainBtn],
        switchModalList = document.querySelectorAll('.more'),
        modalEl = document.querySelector('.modal'),
        burgerBtn = document.querySelector('.humburger-menu'),
        menu = document.querySelector('.menu')
    ;

    console.log(burgerBtn)

    accordion(accordionBtnList,accordionItemList)
    tabs(tabsBtnList, tabsContentList)
    smoothScroll(allLinkList)
    modal(switchModalList, modalEl)
    burger(burgerBtn, menu)
})