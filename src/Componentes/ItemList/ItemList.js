import React, { useEffect,useState} from "react";
import {getFirestore,collection,getDocs, DocumentSnapshot} from 'firebase/firestore';
import './ItemList.css'
import Select from "./Select";

const ItemList=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Mesas');
        getDocs(itemsCollection).then(snapshot=>{

            const arrproducts=snapshot.docs.map(doc=>doc.data())
          
            setProducts(arrproducts)

        });  
        
   
},[]);
    return (<div>
   {products.map((product)=>(
    <div className="ItemList" key={product.Titulo}><h1>{product.Titulo}</h1>
    <img src={product.Imagen}/>
    <h1>{product.asd}</h1>
    <div>
    

            </div><Select/></div>
          
  
    
   ))}
    </div>)
}
export default ItemList