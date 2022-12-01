const iconCarrito = document.querySelector('.nav--carrito');
const ShoppingContainer = document.querySelector('.shopping--container');


iconCarrito.addEventListener('click', ShoppingCar);

function ShoppingCar(){
    ShoppingContainer.classList.toggle('inactive');
} /* */