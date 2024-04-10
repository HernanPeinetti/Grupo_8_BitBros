document.addEventListener('DOMContentLoaded', () => {
    viewCountCart()
    viewCardCart()
    viewPriceTotal()
});

function addCart(productId) {
    const countProduct = document.getElementById('count-product');
    fetch(`http://localhost:3001/api/products/detail/${productId}`)
        .then(response => response.json())
        .then(data =>
            addCardItem(data.data, parseInt(countProduct.value))
        )
        .catch(err => console.log(err))
}

function addCardItem(product, count) {
    let currentProducts = localStorage.getItem('cart');
    if (!currentProducts) {
        // Si no hay valores actuales, creamos un arreglo para almacenar los valores
        currentProducts = [];
    } else {
        // Si hay valores actuales, los convertimos de cadena JSON a un arreglo
        currentProducts = JSON.parse(currentProducts);
    }

    let productExists = false;

    // Buscar si el producto ya existe en el arreglo
    for (let i = 0; i < currentProducts.length; i++) {
        if (currentProducts[i].id === product.id_product) {
            // El producto ya existe, actualizar la cantidad
            currentProducts[i].count += count;
            productExists = true; // Marcar que el producto existe
            break; // Salir del bucle, ya que encontramos el producto
        }
    }

    // Si el producto no existe, agregarlo al arreglo
    if (!productExists) {
        currentProducts.push({
            id: product.id_product,
            count: count,
            detail: product,
        });
    }

    // Convertir el arreglo actualizado a una cadena JSON y guardarlo en el Local Storage
    localStorage.setItem('cart', JSON.stringify(currentProducts));
    viewCountCart()
    viewCardCart()
    viewPriceTotal()
}

function viewCountCart() {
    const pCartIconDesktop = document.getElementById('p-cart-icon-desktop')
    const pCartIconMobile = document.getElementById('p-cart-icon-mobile')
    let cart = JSON.parse(localStorage.getItem('cart'));

    pCartIconDesktop.innerText = cart.length
    pCartIconMobile.innerText = cart.length
}

function viewCardCart() {
    let ulCart = document.getElementById('ul-cart')
    let cart = JSON.parse(localStorage.getItem('cart'));

    ulCart.innerHTML = ""
    cart.forEach(product => {
        ulCart.innerHTML += `
    <div class="card mt-3">
        <div class="card-body d-flex">
            <img style="width: 40%; height: 120px; object-position: center; object-fit: cover; border-radius: 0.3rem;"
                src="${product.detail.image}" alt="">
            <div style="width: 65%; gap: 5px;" class="d-flex flex-column">
                <div style="height: 55%;" class="d-flex">
                    <h3 style="margin-left: 1rem; width: 80%; font-size: 16px;overflow:hidden">Bicicleta Mtb Overtech Q6 R28 (${product.count})</h3>
                    <div style="width: 20%; justify-content: end;" class="d-flex">
                        <button type="button" onclick="deleteCardCart('${product.id}')" class="btn-close"></button>
                    </div>
                </div>
                <div style="height: 45%; justify-content: space-between;align-items: flex-end; " class="d-flex">
                    <h5 style="margin-left: 1rem;">$${product.detail.price * product.count}</h5>
                    
                </div>
            </div>
        </div>
    </div>
`
    // <div>
    //     <button class="btn ">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //             class="bi bi-plus" viewBox="0 0 16 16">
    //             <path
    //                 d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
    //         </svg>
    //     </button>
    //     <button class="btn">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
    //             class="bi bi-dash" viewBox="0 0 16 16">
    //             <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
    //         </svg>
    //     </button>
    // </div>
    });
}

function viewPriceTotal() {
    const cartPriceTotal = document.getElementById('cart-price-total')
    let cart = JSON.parse(localStorage.getItem('cart'));

    priceTotal = 0;

    cart.forEach(product => {
        priceTotal += product.detail.price * product.count
    })

    priceTotal = `Total: $${priceTotal}`

    cartPriceTotal.innerText = priceTotal
}

function deleteCardCart(idDelete) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    let cartFormatted = []
    for (let i = 0; i < cart.length; i++) {
        if(cart[i].id != idDelete) {
            cartFormatted.push({
                id: cart[i].id,
                count: cart[i].count,
                detail: cart[i].detail,
            })
        }
    }

    localStorage.setItem('cart', JSON.stringify(cartFormatted))
    
    viewCountCart()
    viewCardCart()
    viewPriceTotal()
}