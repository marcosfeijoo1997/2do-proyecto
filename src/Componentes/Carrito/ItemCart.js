

const ItemCart=({product})=>{

 



    return (<div className="cartContainer">
         <div>  <img src={product.image} alt='img'/></div>
        <div> <p>{product.title}</p></div>
        <div><p>{product.quantity}</p></div>      
     
      <div> <p>${product.finalPrice*product.quantity}</p></div>
   
   

       
        </div>)
}
export default ItemCart