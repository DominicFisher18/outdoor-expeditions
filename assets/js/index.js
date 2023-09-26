

function productPage() {
    location.href = "/outdoor-expeditions/product-page.html"
    console.log('hello')
    event.preventDefault()
}

function changePage() {
    location.href = "/outdoor-expeditions/product-page.html";
    event.preventDefault()
}

document.querySelector('.js-view-all')
    .addEventListener('click', productPage)
document.querySelector('.js-view-all-2')
    .addEventListener('click', productPage)

 