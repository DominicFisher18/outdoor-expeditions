// let sections = ["All", "Fishing", "Camping", "Hiking", "Backyard", "Food"];
// let visibleSectionId = null;

// function showProducts(sectionId) {
//     if(visibleSectionId === sectionId) {
//         visibleSectionId = null
//     } else {
//         visibleSectionId = sectionId
//     }
//     hideOtherSections()
// }

// function hideOtherSections() {
//     let i, sectionId, section;
//     for (i = 0; 1 < sections.length; i++) {
//         sectionId = sections[i];
//         section = document.getElementById(sectionId)
//         if (visibleSectionId === sectionId) {
//             section.classList.remove('hidden')
//         } else {
//             section.classList.add('hidden')
//         }
//     }
// }   

// script
const menuButton = document.querySelector('.hamburger-menu')
let tableOfContents = document.querySelector('.table-of-contents')
let checkoutButton = document.querySelector('.checkout')
let checkoutMenu = document.querySelector('.checkout-menu')

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    tableOfContents.classList.remove('hidden')
    tableOfContents.classList.add('activate')
    document.querySelector('.header')
        .classList.add('onscroll')
})

checkoutButton.addEventListener('click', () => {
    checkoutMenu.classList.remove('hidden')
    checkoutMenu.classList.add('activate')
})

// document.onscroll = () => {
//     tableOfContents.classList.add('hidden')
//     menuButton.classList.remove('rotate')
//     checkoutMenu.classList.add('hidden')
    
//     if (window.scrollY > 0) {
//         document.querySelector('.header')
//             .classList.add('onscroll')
//     } else {
//         document.querySelector('.header')
//             .classList.remove('onscroll')
//     }
// } 




