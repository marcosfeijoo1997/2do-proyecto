import React from "react"

import { useCartContext } from "../../CartContext/CartProvider"
import ItemCart from "./ItemCart"


const CarritoContainer=()=>{
    const {cart,totalPrice}=useCartContext()
    if (cart.length===0){
        return (<div>no tengo elementos</div>)
    }

 else { return (<>
    {cart.map(product=><ItemCart key={product.id} product={product}/>)}
    <h1>Precio total ${totalPrice()}</h1>

    
    </>)
    
 }

    
 
}
export default CarritoContainer