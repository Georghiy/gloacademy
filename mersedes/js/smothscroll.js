export default function smoothScroll(linkList) {
    linkList.forEach(link => {
        link.addEventListener('click', (event)=>{
            event.preventDefault()
            const id = link.getAttribute('href').substr(1),
                target = document.getElementById(id)
            ;

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    })
}