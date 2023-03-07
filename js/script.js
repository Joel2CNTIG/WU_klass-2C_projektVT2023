const burger = document.getElementById('burger_menu')
const burgerList = document.getElementById('burger_list')
const popupAd = document.getElementById('popup')
const popupX = document.getElementById('x_popup')
var counter = 0

function toggleMenu() {
    burgerList.classList.toggle('burger_list_visible')
    burger.classList.toggle('burger_x_form')
}

burger.addEventListener('click', () => {
    toggleMenu()
})



function togglePopup() {
    popupAd.classList.remove('popup_hidden')
}


window.addEventListener('scroll', () => {
    counter = counter + 1
    if (counter == 50) {togglePopup()}
})

function xTogglePopup() {
    popupAd.classList.add('popup_hidden')
}

popupX.addEventListener('click', () => {
    xTogglePopup()
})

