export default function accordion(btnList, itemList){
    btnList.forEach(btn => {                
        btn.addEventListener('click', (event) => {  
            btnList.forEach(el => el.classList.remove('feature__link_active'))
            itemList.forEach(el => el.classList.add('hidden'))
            event.currentTarget.classList.add('feature__link_active')
            event.currentTarget.nextElementSibling.classList.remove('hidden')
        })
    });

}