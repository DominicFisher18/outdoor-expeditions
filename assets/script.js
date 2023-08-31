const menuButton = document.querySelector('.hamburger-menu')
let tableOfContents = document.querySelector('.table-of-contents')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    tableOfContents.classList.remove('hidden')
    tableOfContents.classList.add('activate')
    document.querySelector('.header')
        .classList.add('onscroll')
})

document.querySelector('.see-deals')
    .addEventListener('click', () => {
        location.href = "#clearance"
    })

document.querySelector('.js-view-all')
    .addEventListener('click', productPage)
document.querySelector('.js-view-all-2')
    .addEventListener('click', productPage)

function productPage() {
    location.href = "/outdoor-expeditions/product-page.html"
}

document.onscroll = () => {
    tableOfContents.classList.add('hidden')
    menuButton.classList.remove('rotate')
    if (window.scrollY > 0) {
        document.querySelector('.header')
            .classList.add('onscroll')
    } else {
        document.querySelector('.header')
            .classList.remove('onscroll')
    }
}
    
