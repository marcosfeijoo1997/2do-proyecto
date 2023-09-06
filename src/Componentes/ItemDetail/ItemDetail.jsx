import React, { useEffect } from 'react'
import './style.css'
import { useState } from 'react'
const ItemDetail = ({data}) => {


  
  const ManodeObra=data.title==='Patas'?13000:18500
  const cañoCuarentaVeinte=9.82
  const cañoSesentaVeinte=20.14
  const cañoSesentaTreinta=22.74
  const cañosesentaSesenta=30.54

  



  const [cañoAlto,setCañoAlto]=useState(75)
  const [cañoAncho, setCañoAncho] = useState(60);
  useEffect(() => {

    if (data.title === 'Patas') {
      setCañoAncho(20);
    } else {
      setCañoAncho(60);
    }
  }, [data.title]);


  const [cañoLargo,setCañoLargo]=useState(120)

  const [selectedValue, setSelectedValue] = useState(9.82);
  const [largoValue, setLargoValue] = useState(9.82);
  if (data.title==='Mesa de patas rectangulares') {
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
    <div><h1>{data.titulo}</h1>
    <img src={data.image} alt={data.image}/>
    <br/>
    <h4>Seleccione el tipo de caño para las patas
    <select id='valorCañosPatas' className='select' onChange={handleSelectChange}>
    <option value={cañoCuarentaVeinte}>caño 40x20</option>
    <option value={cañoSesentaVeinte}>caño 60x20</option>
    <option value={cañoSesentaTreinta}>caño 60x30</option>
    <option value={cañosesentaSesenta}> caño 60x60</option>
    <option value={cañosesentaSesenta}>caño 80x40</option>

</select>
    </h4>

    <br/>
<p>alto {cañoAlto} cm</p>
   <input type="range" id="alto" min="30" max="100" className='slider' value={cañoAlto} onChange={altoChanged}></input>
   <p>Precio por el alto seleccionado:${(cañoAlto*4*selectedValue).toFixed(2)}</p>
   

   <br/>
<p>ancho {cañoAncho} cm</p>
   <input type="range" id="ancho" min="30" max="100" className='slider' value={cañoAncho}onChange={anchoChanged}></input>
   <p>Precio por el ancho seleccionado:${(cañoAncho*4*selectedValue).toFixed(2)}</p>
   <br/>



   <h4>Seleccione el tipo de caño para las uniones
    <select id='valorCañosPatas' className='select' onChange={handleLargoChanged}>
    <option value={cañoCuarentaVeinte}>caño 40x20</option>
    <option value={cañoSesentaVeinte}>caño 60x20</option>
    <option value={cañoSesentaTreinta}>caño 60x30</option>
    <option value={cañosesentaSesenta}> caño 60x60</option>
    <option value={cañosesentaSesenta}>caño 80x40</option>

</select>
    </h4>


<p>largo {cañoLargo} cm</p>
   <input type="range" id="largo" min="30" max="280" className='slider' value={cañoLargo} onChange={largoChanged}></input>
   <p>Precio por el largo seleccionado:${(cañoLargo*2*largoValue).toFixed(2)}</p>


    
    
    
    
<p>Mano de obra {ManodeObra}</p>
    <h1>Precio total redondeado:${(Math.ceil((cañoLargo*data.largo*largoValue+cañoAncho*data.ancho*selectedValue+cañoAlto*data.alto*selectedValue+ManodeObra)/500))*500}</h1>
    
    </div>
    



  )
  }
  
  if (data.title==='Patas') {
    
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
      <div><h1>{data.title}</h1>
      <p>Precio por el par</p>
      <img src={data.image} alt={data.image}/>
      <br/>
      <h4>Seleccione el tipo de caño para las patas
     
      <select id='valorCañosPatas' className='select' onChange={handleSelectChange}>
    <option value={cañoCuarentaVeinte}>caño 40x20</option>
    <option value={cañoSesentaVeinte}>caño 60x20</option>
    <option value={cañoSesentaTreinta}>caño 60x30</option>
    <option value={cañosesentaSesenta}> caño 60x60</option>
    <option value={cañosesentaSesenta}>caño 80x40</option>
  
  </select>
      </h4>
  
      <br/>
  <p>alto {cañoAlto} cm</p>
     <input type="range" id="alto" min="30" max="100" className='slider' value={cañoAlto} onChange={altoChanged}></input>
     <p>Precio por el alto y el ancho seleccionado:${((Math.sqrt(cañoAlto**2+cañoAncho**2))*4*selectedValue).toFixed(2)}</p>
     
  
     <br/>
  <p>ancho {cañoAncho} cm</p>
     <input type="range" id="ancho" min="0" max="40" className='slider' value={cañoAncho}onChange={anchoChanged}></input>

     <br/>
  
  
  
     <h4>Seleccione el tipo de caño para las uniones
      <select id='valorCañosPatas' className='select' onChange={handleLargoChanged}>
      <option value={cañoCuarentaVeinte}>caño 40x20</option>
    <option value={cañoSesentaVeinte}>caño 60x20</option>
    <option value={cañoSesentaTreinta}>caño 60x30</option>
    <option value={cañosesentaSesenta}> caño 60x60</option>
    <option value={cañosesentaSesenta}>caño 80x40</option>
  
  </select>
      </h4>
  
  
  <p>largo {cañoLargo} cm</p>
     <input type="range" id="largo" min="0" max="30" className='slider' value={cañoLargo} onChange={largoChanged}></input>
     <p>Precio por el largo seleccionado:${(cañoLargo*2*largoValue).toFixed(2)}</p>
  
  
      
      
      
      
  <p>Mano de obra {ManodeObra}</p>
      <h1>Precio total redondeado:${(Math.ceil(((Math.sqrt(cañoAlto**2+cañoAncho**2))*4*selectedValue+cañoLargo*2*largoValue+ManodeObra)/500))*500}</h1>
   
      </div>
      
  
  
  
    )
    }
    if (data.title==='Mesa en X') {
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
        <div><h1>{data.titulo}</h1>
        <img src={data.image} alt={data.image}/>
        <br/>
        <h4>Seleccione el tipo de caño para las patas
        <select id='valorCañosPatas' className='select' onChange={handleSelectChange}>
      <option value={cañoCuarentaVeinte}>caño 40x20</option>
      <option value={cañoSesentaVeinte}>caño 60x20</option>
      <option value={cañoSesentaTreinta}>caño 60x30</option>
      <option value={cañosesentaSesenta}> caño 60x60</option>
      <option value={cañosesentaSesenta}>caño 80x40</option>
    
    </select>
        </h4>
    
        <br/>
    <p>alto {cañoAlto} cm</p>
       <input type="range" id="alto" min="30" max="100" className='slider' value={cañoAlto} onChange={altoChanged}></input>
       <p>Precio por el alto y el ancho seleccionado:${((Math.sqrt(cañoAlto**2+cañoAncho**2))*4*selectedValue).toFixed(2)}</p>
       
    
       <br/>
    <p>ancho {cañoAncho} cm</p>
       <input type="range" id="ancho" min="30" max="100" className='slider' value={cañoAncho}onChange={anchoChanged}></input>
  
       <br/>
    
    
    
       <h4>Seleccione el tipo de caño para las uniones
        <select id='valorCañosPatas' className='select' onChange={handleLargoChanged}>
        <option value={cañoCuarentaVeinte}>caño 40x20</option>
      <option value={cañoSesentaVeinte}>caño 60x20</option>
      <option value={cañoSesentaTreinta}>caño 60x30</option>
      <option value={cañosesentaSesenta}> caño 60x60</option>
      <option value={cañosesentaSesenta}>caño 80x40</option>
    
    </select>
        </h4>
    
    
    <p>largo {cañoLargo} cm</p>
       <input type="range" id="largo" min="30" max="280" className='slider' value={cañoLargo} onChange={largoChanged}></input>
       <p>Precio por el largo seleccionado:${(cañoLargo*2*largoValue).toFixed(2)}</p>
    
    
        
        
        
        
    <p>Mano de obra {ManodeObra}</p>
        <h1>Precio total redondeado:${(Math.ceil(((Math.sqrt(cañoAlto**2+cañoAncho**2))*4*selectedValue+cañoLargo*2*largoValue+ManodeObra)/500))*500}</h1>
   
        </div>
        
    
    
    
      )
      }
}


export default ItemDetail