const Select=()=>{

  const newMesagge= {message:'asd',
  hola:'aaaaad'}
 


 



    return (<div><h2>Seleccionar medida</h2>
    
        <button onClick={()=>{ newMesagge()}}> pulsar</button>
  
     

<select>
<option className="120x60" value='frutas' onClick={()=> newMesagge()}>120x60x75</option>


<option className="160x80">160x80x75</option>
<option className="200x100">200x100x75</option>

</select>

<div>{newMesagge.message}{newMesagge.hola}</div>

</div>
)}

export default Select