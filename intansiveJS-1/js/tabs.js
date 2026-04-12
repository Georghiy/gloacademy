// в целом листенер на документ с defer не так уж и нужен, но для надежности работы в более старых версиях лучше оставлять
document.addEventListener('DOMContentLoaded', ()=>{
  const tabButtons = document.querySelectorAll('.design-list__item'),
    tabDescrNList = document.querySelectorAll('.design__descr'),
    tabImageNList = document.querySelectorAll('.design-images'),
    title = document.querySelector('title')
  ;

  // функции активации элементов табов:
  // текста и картинок
  function activeTabEl(tabData, elList) {    
    elList.forEach(element => {        
      element.classList.add('hidden')
      if (element.dataset.tabsField === tabData) {
        element.classList.remove('hidden')            
      }        
    });  

  };
  // кнопки
  function activeTabButton (tabButton, TabButtonList) {    
    TabButtonList.forEach(btn => {
        btn.classList.remove('design-list__item_active')        
    });  

    tabButton.classList.add('design-list__item_active')
  };

  tabButtons.forEach(tabButton => {    
    tabButton.addEventListener('click', (event)=> {                  
      // по клику определяем элементы таба требующие активации
      const tabData = event.target.dataset.tabsHandler,        
        tabTitle = event.target.textContent
      ; 

      //активируем элементы таба
      activeTabButton(event.target, tabButtons)
      activeTabEl(tabData, tabDescrNList) 
      activeTabEl(tabData,tabImageNList)   

      // меняем тектст <title>
      title.textContent = tabTitle
    })
  })

})