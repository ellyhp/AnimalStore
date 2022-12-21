const iconCarrito = document.querySelector('.nav--carrito');
const shop = document.querySelector('#shop');
const ShoppingContainer = document.querySelector('.shopping--container');
const CarContainer = document.querySelector('#carList tbody');
const DeleteCar = document.querySelector('.btn-emptycart')
let myCarShop = [];



EventListenerRegister();
function EventListenerRegister(){

    iconCarrito.addEventListener('click', ShoppingCar);
    shop.addEventListener('click', shopProduct);
    ShoppingContainer.addEventListener('click', DeleteProducts);
    DeleteCar.addEventListener('click', () => {
        myCarShop = [];

        HTMLDelete();
    } );
}


function ShoppingCar(){
    ShoppingContainer.classList.toggle('inactive');
}

function shopProduct(e){

    if(e.target.classList.contains('boton--tarjeta')){
        const selectCourse = e.target.parentElement;
        DataProductRead(selectCourse);
    }
}

function DeleteProducts(e){
    if(e.target.classList.contains('icon--delete')){
        const idProduct = e.target.getAttribute('data-id');

        myCarShop = myCarShop.filter( product => product.id !== idProduct)
        
        HTMLCar();
    }

}




function DataProductRead(product){
    const ProductInfo = {
        image: product.querySelector('img').src,
        tittle: product.querySelector('p').textContent,
        precio: product.querySelector('h3').textContent,
        id: product.querySelector('button').getAttribute('data-id'),
        cantidad: 1
    }

    const exists = myCarShop.some( product => product.id === ProductInfo.id);
    if(exists){

        const products = myCarShop.map( product => {
            if(product.id === ProductInfo.id){
                product.cantidad++;
                return product;
            }else {
                return product;
            }
        })
        myCarShop = [...products]

    }else{
        myCarShop = [...myCarShop, ProductInfo];
    }
    
    console.log(myCarShop);

    HTMLCar();
}

function HTMLCar(){


    HTMLDelete();

    myCarShop.forEach(product=> {
        const { image, tittle,precio,cantidad,id} = product;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${image}" width="60px">
            </td>
            <td>
                ${tittle}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                    <i class="fa-solid fa-xmark  icon--delete" data-id="${id}"></i>
            </td>
        `;

        CarContainer.appendChild(row);

    });
}


function HTMLDelete(){
    // CarContainer.innerHTML = '';

    while(CarContainer.firstChild){
        CarContainer.removeChild(CarContainer.firstChild)
    }
}

