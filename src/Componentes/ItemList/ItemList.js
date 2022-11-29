import React, { useEffect,useState} from "react";
import {getFirestore,collection,getDocs, DocumentSnapshot} from 'firebase/firestore';
import './ItemList.css'
import Select from "./Select";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const ItemList=()=>{
    const [products,setProducts]=useState([])
    const metalsOptions = [
        { label: "120x60x75", value: "500" },
        { label: "160x80x75", value: "1000" },
        { label: "2x100x75", value: "2000" },

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
   {products.map((product)=>(
    <div className="ItemList" key={product.Titulo}><h1>{product.Titulo}</h1>
    <img src={product.Imagen}/>
    <h1>{product.asd}</h1>
    <div>
    

    </div>
    <Formik
        /*onSubmit={(values)=>updateCarrito({...values,props,"opcionesAdicionales":opcionesAdicionales},totalCalculado)}*/
        initialValues={{
            caños:"120x60x75"
        }}
        
        >
        {({
        setFieldValue,
        values,
        },
          ) => (
            <Form>

            <Field className="caños" id="caños" as="select" initialValue="120x60x75" name="caños">
                {metalsOptions.map(pintura=>{
                    return(<option key={pintura.label}  value={pintura.label}>{pintura.label}</option>)
                })
            }
                                
            </Field>
            HOlaaaa {values.caños}
                </Form>
          )}
          </Formik>
     
        </div>
          
  
    
   ))}
    </div>)
}
export default ItemList