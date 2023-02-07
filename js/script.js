const burger = document.getElementById('burger_menu')
const burgerList = document.getElementById('burger_list')

function toggleMenu() {
    burgerList.classList.toggle('burger_list_visible')
    burger.classList.toggle('burger_x_form')
}

burger.addEventListener('click', () => {
    toggleMenu()
})