let sections = ["All", "Fishing", "Camping", "Hiking", "Backyard", "Food"];
let visibleSectionId = null;

function showProducts(sectionId) {
    if(visibleSectionId === sectionId) {
        visibleSectionId = null
    } else {
        visibleSectionId = sectionId
    }
    hideOtherSections()
}

function hideOtherSections() {
    let i, sectionId, section;
    for (i = 0; 1 < sections.length; i++) {
        sectionId = sections[i];
        section = document.getElementById(sectionId)
        if (visibleSectionId === sectionId) {
            section.classList.remove('hidden')
        } else {
            section.classList.add('hidden')
        }
    }
}    

// script
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

// index

function productPage() {
    location.href = "/outdoor-expeditions/product-page.html"
    console.log('hello')
    event.preventDefault()
}

function changePage() {
    location.href = "/outdoor-expeditions/product-page.html";
    console.log('hello')
    event.preventDefault()
}



