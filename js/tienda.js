//script funcionalidad de carrito y tienda
let produtctos= document.querySelector(`carts`)
let carrito={}

addEventListener("submit", (e)=>{
    e.preventDefault();
    let data= Object.fromEntries(newFormData(e.target))
    carrito[`${data.nombreProducto}`] = {Nombre: [], Precio: []};
})