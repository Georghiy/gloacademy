export default function(switcEl, burgerEl) {
    
    const burgerLink = burgerEl.querySelectorAll('a');
    const toggleMenu = () => {
        switcEl.classList.toggle('humburger-menu-active')
        burgerEl.classList.toggle('menu-active')
    }

    document.addEventListener('click', (event) => {
        if (event.target === switcEl || (event.target.closest('a') && burgerEl.contains(event.target)) || event.target !== burgerEl) {
            toggleMenu()     
        }
    })
}