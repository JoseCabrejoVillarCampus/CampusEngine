//database
export default{
    dataCarrito(){
        localStorage.setItem("tienda"),JSON.stringify({
            producto:{
                nombre:[],
                precio:[]
            }
        })
    }
}