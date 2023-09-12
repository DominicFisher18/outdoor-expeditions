let cartButtons = document.getElementsByClassName('add-to-cart-btn')
for (let i = 0; i < cartButtons.length; i++) {
    let button = cartButtons[i]
    button.addEventListener('click', addToCartBtn)
}

function addToCartBtn(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.getElementsByClassName('item-name')[0].innerText
    let price = shopItem.getElementsByClassName('item-price')[0].innerText
    console.log(title, price)
    addToCart(title, price)
}

function addToCart(title, price) {
    let cartRow = document.createElement('div')
    cartRow.innerText = (title + price)
    let cartItems = document.getElementsByClassName('checkout-div')[0]
    cartItems.append(cartRow)
}