const burger = document.getElementById('burger_menu')
const burgerList = document.getElementById('burger_list')
const popupAd = document.getElementById('popup')
const popupX = document.getElementById('x_popup')
var counter = 0
var cycleLimit = 0
const cycledElements = document.getElementsByClassName('cycled_reviews')
const leftArrow = document.getElementById('arrow_1')
const rightArrow = document.getElementById('arrow_2')
cycleReview1 = document.getElementById('cycle_review1')
cycleReview2 = document.getElementById('cycle_review2')
cycleReview3 = document.getElementById('cycle_review3')
var windowWidth = window.matchMedia("(min-width: 1200px)")

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

function moveLeft() {

    console.log("left")
    console.log(cycleLimit)

    if (cycleLimit == 1) {
        cycleReview1.style.transform = "translateX(0px)"
        cycleReview2.style.transform = "translateX(1200px)"
        cycleReview3.style.transform = "translateX(2400px)"
        cycleLimit = cycleLimit - 1
        return;
    }
    if (cycleLimit == 2) {
        cycleReview1.style.transform = "translateX(-1200px)"
        cycleReview2.style.transform = "translateX(0px)"
        cycleReview3.style.transform = "translateX(1200px)"
        cycleLimit = cycleLimit - 1
        return;
    }
}

function moveRight() {

    console.log("right")
    console.log(cycleLimit)

    if (cycleLimit == 0) {
        cycleReview1.style.transform = "translateX(-1200px)"
        cycleReview2.style.transform = "translateX(0px)"
        cycleReview3.style.transform = "translateX(1200px)"
        cycleLimit = cycleLimit + 1
        return;
    }
    if (cycleLimit == 1) {
        cycleReview1.style.transform = "translateX(-2400px)"
        cycleReview2.style.transform = "translateX(-1200px)"
        cycleReview3.style.transform = "translateX(0px)"
        cycleLimit = cycleLimit + 1
        return;
    }
}


