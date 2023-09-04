import React from 'react'
import './style.css'
import { useState } from 'react'
const ItemDetail = ({data}) => {
  const ManodeObra=18500

  const [cañoAlto,setCañoAlto]=useState(75)
  const [cañoAncho,setCañoAncho]=useState(60)
  const [cañoLargo,setCañoLargo]=useState(120)

  const [selectedValue, setSelectedValue] = useState(9.82);
  const [largoValue, setLargoValue] = useState(9.82);
  const handleSelectChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setSelectedValue(newValue);
  };
  const handleLargoChanged = (event) => {
    const newValue = parseFloat(event.target.value);
    setLargoValue(newValue);
  };
  function altoChanged(e){
   const cañoGastado=e.target.value
   setCañoAlto(cañoGastado)
  
  }
  function anchoChanged(e){
    const cañoGastado=e.target.value
    setCañoAncho(cañoGastado)
   
   }
   function largoChanged(e){
    const cañoGastado=e.target.value
    setCañoLargo(cañoGastado)
   }

  return (
    <div><p>{data.titulo}</p>
    <img src={data.image} alt={data.image}/>
    <br/>
    <h4>Seleccione el tipo de caño para las patas
    <select id='valorCañosPatas' className='select' onChange={handleSelectChange}>
  <option value={9.82}>caño 40x20</option>
  <option value={20.14}>caño 60x20</option>
  <option value={22.74}>caño 60x30</option>
  <option value={30.54}> caño 60x60</option>
  <option value={30.54}>caño 80x40</option>

</select>
    </h4>

    <br/>
<p>alto {cañoAlto} cm</p>
   <input type="range" id="alto" min="30" max="100" className='slider' onChange={altoChanged}></input>
   <p>Precio por el alto seleccionado:${(cañoAlto*data.alto*selectedValue).toFixed(2)}</p>
   

   <br/>
<p>ancho {cañoAncho} cm</p>
   <input type="range" id="ancho" min="30" max="100" className='slider' onChange={anchoChanged}></input>
   <p>Precio por el ancho seleccionado:${(cañoAncho*data.ancho*selectedValue).toFixed(2)}</p>
   <br/>



   <h4>Seleccione el tipo de caño para las uniones
    <select id='valorCañosPatas' className='select' onChange={handleLargoChanged}>
  <option value={9.82}>caño 40x20</option>
  <option value={20.14}>caño 60x20</option>
  <option value={22.74}>caño 60x30</option>
  <option value={30.54}> caño 60x60</option>
  <option value={30.54}>caño 80x40</option>

</select>
    </h4>


<p>largo {cañoLargo} cm</p>
   <input type="range" id="largo" min="30" max="280" className='slider' onChange={largoChanged}></input>
   <p>Precio por el largo seleccionado:${(cañoLargo*data.largo*largoValue).toFixed(2)}</p>


    
    
    
    
<p>Mano de obra {ManodeObra}</p>
    <h1>Precio total redondeado:${(Math.ceil((cañoLargo*data.largo*largoValue+cañoAncho*data.ancho*selectedValue+cañoAlto*data.alto*selectedValue+ManodeObra)/500))*500}</h1>
    
    </div>
    



  )
}

export default ItemDetail