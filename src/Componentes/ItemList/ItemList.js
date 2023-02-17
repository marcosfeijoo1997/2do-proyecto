import React, { useEffect,useState} from "react";
import {getFirestore,collection,getDocs, DocumentSnapshot} from 'firebase/firestore';
import './ItemList.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';

const ItemList=()=>{
    const [products,setProducts]=useState([])
    const metalsOptions = [
        { label: "120x60x75", value: "20000" },
        { label: "160x80x75", value: "25000" },
        { label: "200x100x75", value: "30000" },

      ]
    useEffect(()=>{
        const db=getFirestore();
        const itemsCollection=collection(db,'Mesas');
        getDocs(itemsCollection).then(snapshot=>{

            const arrproducts=snapshot.docs.map(doc=>doc.data())
          
            setProducts(arrproducts)

        });  
        
   
},[]);
    return (<div>
        Mesasas
   {products.map((product)=>(
    <div className="ItemList" key={product.Titulo}><h1>{product.Titulo}</h1>
    <img src={product.Imagen}/>
    <h1>{product.asd}</h1>
    <div>
    

    </div>
    <Formik
        /*onSubmit={(values)=>updateCarrito({...values,props,"opcionesAdicionales":opcionesAdicionales},totalCalculado)}*/
        initialValues={{
            caños:"20000"
        }}
        
        >
        {({
        setFieldValue,
        values,
        },
          ) => (
            <Form>

            <Field className="caños" id="caños" as="select" initialValue="120x60x75" name="caños">
                {metalsOptions.map(medida=>{
                    return(<option key={medida.label} value={medida.value}>{medida.label}</option>)
                })
            }
                                
            </Field>
             <h2>${values.caños}</h2>
                </Form>
          )}
          </Formik>
     
        </div>
          
  
    
   ))}
    </div>)
}
export default ItemList