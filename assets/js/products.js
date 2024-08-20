import { cart } from "./cart.js"

const products = [{
    image: '/outdoor-expeditions/assets/images/fishing-pole.jpg',
    name: 'Black Fishing Pole',
    priceDollars: 140,
    category: 'All',
    subcategory: 'Fishing'
}, {
    image: '/outdoor-expeditions/assets/images/fishing-hat.jpg',
    name: 'Fishing Hat',
    priceDollars: 25,
    category: 'All',
    subcategory: 'Fishing'
}, {
    image: '/outdoor-expeditions/assets/images/tackle-box.jpg',
    name: 'Tackle Box',
    priceDollars: 35,
    category: 'All',
    subcategory: 'Fishing'
}, {
    image: '/outdoor-expeditions/assets/images/tent.png',
    name: 'Light Blue Tent',
    priceDollars: 30,
    category: 'All',
    subcategory: 'Camping'
}, {
    image: '/outdoor-expeditions/assets/images/hammock.png',
    name: 'Colorful Hammock',
    priceDollars: 20,
    category: 'All',
    subcategory: 'Camping'
}, {
    image: '/outdoor-expeditions/assets/images/green-canoe.png',
    name: 'Green Canoe',
    priceDollars: 650,
    category: 'All',
    subcategory: 'Camping'
}, {
    image: '/outdoor-expeditions/assets/images/firewood.jpg',
    name: 'Firewood',
    priceDollars: 12,
    category: 'All',
    subcategory: 'Camping'
}, {
    image: '/outdoor-expeditions/assets/images/sleeping-bag.jpg',
    name: 'Sleeping Bag',
    priceDollars: 22,
    category: 'All',
    subcategory: 'Camping'
}, {
    image: '/outdoor-expeditions/assets/images/trekking-pole.jpg',
    name: 'Trekking Pole',
    priceDollars: 80,
    category: 'All',
    subcategory: 'Hiking'
}, {
    image: '/outdoor-expeditions/assets/images/hiking-boots.jpg',
    name: 'Hiking Boots',
    priceDollars: 55,
    category: 'All',
    subcategory: 'Hiking'
}, {
    image: '/outdoor-expeditions/assets/images/hiking-backpack.jpg',
    name: 'Hiking Backpack',
    priceDollars: 120,
    category: 'All',
    subcategory: 'Hiking'
}, {
    image: '/outdoor-expeditions/assets/images/hiking-headlamp.jpg',
    name: 'Hiking Headlamp',
    priceDollars: 20,
    category: 'All',
    subcategory: 'Hiking'
}, {
    image: '/outdoor-expeditions/assets/images/round-grill.png',
    name: 'Black Round Grill',
    priceDollars: 110,
    category: 'All',
    subcategory: 'Backyard'
}, {
    image: '/outdoor-expeditions/assets/images/fence.jpg',
    name: 'Custom Fence',
    priceDollars: 15,
    category: 'All',
    subcategory: 'Backyard'
}, {
    image: '/outdoor-expeditions/assets/images/spatula.jpg',
    name: 'Steel Spatula',
    priceDollars: 30,
    category: 'All',
    subcategory: 'Backyard'
}, {
    image: '/outdoor-expeditions/assets/images/birdfeeder.jpg',
    name: 'Birdfeeder',
    priceDollars: 18,
    category: 'All',
    subcategory: 'Backyard'
}, {
    image: '/outdoor-expeditions/assets/images/trail-mix.jpg',
    name: 'Trail Mix',
    priceDollars: 12,
    category: 'All',
    subcategory: 'Food'
}, {
    image: '/outdoor-expeditions/assets/images/beef-jerky.jpeg',
    name: 'Beef Jerky',
    priceDollars: 18,
    category: 'All',
    subcategory: 'Food'
}]



let productsHTML = ''

products.forEach((product) => {
    productsHTML += `<div class="product-box">
                    <div class="image">
                        <img src="${product.image}">
                    </div>
                    <div class="product-description">
                        <h4 class="item-name">${product.name}</h4>
                        <div class="price-cart-container">
                            <p class="item-price">$${product.priceDollars}</p>
                            <button class="add-to-cart js-add-to-cart" data-product-name="${product.name}">Add To Cart</button>
                        </div>
                    </div>
                </div>
                `
})

document.querySelector('.product-js-container').innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = (button.dataset.productName)

        let matchingItem

        cart.forEach((item) => {
            if (productName === item.productName) {
                matchingItem = item
            }
        })

        if (matchingItem) {
            matchingItem.quantity += 1
        } else {
            cart.push({
                productName: productName,
                quantity: 1
            })
        }

        let cartQuantity = 0

        cart.forEach((item) => {
            cartQuantity += item.quantity
        })

        document.querySelector('.js-item-count').innerHTML = cartQuantity

        console.log(cart)
        console.log(cartQuantity)
    })
})

    
