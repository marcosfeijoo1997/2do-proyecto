import React,{useContext,useState} from "react";
const CartContext=React.createContext([]) 
export const useCartContext=()=>useContext(CartContext)

const CartProvider=({children})=>{
   const [cart,setCart]=useState([])
   const [count, setCount] = useState(1);
  
   const addProduct=(item,newQuantity,precioFinal)=>{
      const newCart=cart.filter(prod=>prod.id !==item.id);
      newCart.push({...item,quantity:newQuantity,finalPrice:precioFinal});
      setCart(newCart);
   

   }
  
   const totalPrice=()=>{
      return cart.reduce((prev,act)=>prev+act.quantity*act.finalPrice,0);
   
    }
   
   const totalProducts=()=>cart.reduce((acumulador,productoActual)=>acumulador+productoActual.quantity,0)
   

   return(
      
   <CartContext.Provider value={{addProduct,cart,count,setCount,totalPrice,totalProducts}}>
      <div>{children}</div>

 </CartContext.Provider>)
}
export default CartProvider