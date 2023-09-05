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