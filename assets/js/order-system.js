let carts  = document.querySelectorAll('.add-cart');

let products = [
    {
        name : 'Beef BBQ',
        tag : 'BeefBBQ',
        price : 15,
        inCart :0
    },
    {
        name : 'Creamy Tomato Chicken',
        tag : 'CreamyTomato',
        price : 15,
        inCart :0
    },
    {
        name : 'Honey Mustard',
        tag : 'HoneyMustard',
        price : 15,
        inCart :0
    },
    {
        name : 'Tasty Tuna',
        tag : 'TastyTuna',
        price : 15,
        inCart :0
    },
    {
        name : 'Krakatau Burst',
        tag : 'krakatauBurst',
        price : 15,
        inCart :0
    },
    {
        name : 'Honey Mustard Chicken',
        tag : 'HoneyChicken',
        price : 15,
        inCart :0
    },
    {
        name : 'Mineral Water',
        tag : 'Mineral Water',
        price : 15,
        inCart :0
    },
    {
        name : 'Coca Cola',
        tag : 'CocaCola',
        price : 15,
        inCart :0
    },
    {
        name : 'Honey Lime Tea',
        tag : 'HoneyTea',
        price : 15,
        inCart :0
    },
    {
        name : 'Chocolate Blast',
        tag : 'ChocolateBlast',
        price : 15,
        inCart :0
    },
    {
        name : 'Bluea Ocean',
        tag : 'BlueOcean',
        price : 15,
        inCart :0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers); 

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(products);
}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems); 

    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart += 1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }


    localStorage.setItem("productInCart",JSON.stringify(cartItems));

    }
}


function onloadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

onloadCartNumbers();