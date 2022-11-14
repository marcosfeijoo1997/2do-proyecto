import './App.css';
import Navbar from './Componentes/Navbar';
import NavbarPrinc from './Componentes/NavbarPrinc';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*todas las rutas*/
import Inicio from './Componentes/ItemsNav/Inicio';
import Nosotros from './Componentes/ItemsNav/Nosotros';
import Productos from './Componentes/ItemsNav/Productos';
import Servicios from './Componentes/ItemsNav/Servicios';
import DibujoNav from './Componentes/Carrito/DibujoNav';
import CarritoContainer from './Componentes/Carrito/CarritoContainer';
/*fin*/


function App() {
  return (<div className="App">
    <BrowserRouter>
 <Navbar/>
 <NavbarPrinc/>


  <Routes>
<Route path='/' element={<Inicio/>}/>
<Route path='/Nosotros' element={<Nosotros/>}/>
<Route path='/Productos' element={<Productos/>}/>
<Route path='/Servicios' element={<Servicios/>}/>
<Route path='/Carrito' element={<CarritoContainer/>}/>
    </Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
