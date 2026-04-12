export default function modal(switchElList, modalEl) {
    switchElList.forEach((el) => {
        el.addEventListener('click', () => {
            modalEl.classList.remove('hidden')

            modalEl.addEventListener('click', (event) => {
                if (event.target.classList.contains('overlay') || event.target.classList.contains('modal__close')) {
                    modalEl.classList.add('hidden')
                }
            })
        })

    })
}