const menuButton = document.querySelector('.hamburger-menu')
let tableOfContents = document.querySelector('.table-of-contents')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    tableOfContents.classList.remove('hidden')
    tableOfContents.classList.add('activate')
    document.querySelector('.header')
        .classList.add('onscroll')
})

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
    
