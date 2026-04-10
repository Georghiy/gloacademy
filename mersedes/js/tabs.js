export default function tabs(btnList, contentList){
    btnList.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const btnData = btn.dataset.tabsHandler;            
            btnList.forEach(el => el.classList.remove('design-list__item_active'))
            btn.classList.add('design-list__item_active')
            
            for (let el of contentList) {
                if (el.dataset.tabsField === btnData) {
                    el.classList.remove('hidden')
                } else {
                    el.classList.add('hidden')
                }
            }
        })
    });
}