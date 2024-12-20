const addProduct = () => {
  const productField = document.getElementById('product-name')
  const quantityField = document.getElementById('product-quantity')

  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = '';
  quantityField.value = ''

  showProduct(product, quantity)
  saveProductToLocalStorage(product, quantity)
}

const showProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
}



const getStoredShoppingCart = () =>{
  let cart = {};
  const storedCart = localStorage.getItem('cart');
  if(storedCart){
    cart = JSON.parse(storedCart);
  }
  return cart
}


const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    localStorage.setItem('cart' ,JSON.stringify(cart))
  }


const displayProductsFromLocalStorage = () => {
  const savedCard = getStoredShoppingCart();
  
  for(const product in savedCard){
    const quantity = savedCard[product];
    showProduct(product, quantity)
  }


}
displayProductsFromLocalStorage()



/* 



const displayProductsFromLocalStorage = () => {
  const savedCard = getStoredShoppingCart();
  
  for(const product in savedCard){
    const quantity = savedCard[product]
    console.log(product, quantity)
    showProduct(product, quantity)
  }

}

displayProductsFromLocalStorage() */