
import './Carrito.css'
import { useCartContext } from "../../CartContext/CartProvider"

const ItemCount=()=> {

   const {count,setCount}=useCartContext()

    const suma=()=>{
        setCount(count+1)
    }
    const resta=()=>{
        setCount(count-1)
    }


    return (<div className="contador">
        <button onClick={resta}disabled={count<=1}>-</button>
        <p>{count}</p>
        <button onClick={suma} disabled={count>=10}>+</button>

    </div>)
}
export default ItemCount