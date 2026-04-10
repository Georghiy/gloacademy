export default function accordion(btnList, itemList){
    btnList.forEach(btn => {                
        btn.addEventListener('click', () => {  
            btnList.forEach(el => el.classList.remove('feature__link_active'))
            itemList.forEach(el => el.classList.add('hidden'))
            btn.classList.add('feature__link_active')
            btn.nextElementSibling.classList.remove('hidden')
        })
    });

}