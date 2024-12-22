console.log("added")
const addProduct = () => {
    const productField = document.getElementById("productName");
    const quantityField = document.getElementById("productQuantity");
    const product = productField.value ;
    const quantity = quantityField.value ;
    productField.value = '';
    quantityField.value = '';
    // console.log(`${product} : ${quantity}`);
    displayProduct(product , quantity);
    saveProductToLocalStorage(product , quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById("product_container")
    const li = document.createElement("li")
    li.innerText = `
    ${product} : ${quantity}
    `
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {}; 
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
       cart = JSON.parse(storeCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product , quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductFromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    console.log(saveCart);
    for( product in saveCart){
        const quantity = saveCart[product];
        displayProduct(product , quantity);
        
    }
}
displayProductFromLocalStorage();