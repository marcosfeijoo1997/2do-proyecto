import './App.css';
import Navbar from './Componentes/Navbar';
import NavbarPrinc from './Componentes/NavbarPrinc';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*todas las rutas*/
import Inicio from './Componentes/ItemsNav/Inicio';
import Nosotros from './Componentes/ItemsNav/Nosotros';
import ItemList from './Componentes/ItemList/ItemList'
import Servicios from './Componentes/ItemsNav/Servicios';
import CarritoContainer from './Componentes/Carrito/CarritoContainer';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';


/*fin*/


function App() {
  return (<div className="App">
    <BrowserRouter>
 <Navbar/>
 <NavbarPrinc/>


  <Routes>
<Route path='/' element={<Inicio/>}/>
<Route path='/Nosotros' element={<Nosotros/>}/>
<Route path='/ItemList' element={<ItemList/>}/>
<Route
						path="/categoria/:categoriaId"
						element={<ItemListContainer />}
					/>
<Route path='/Servicios' element={<Servicios/>}/>
<Route path='/Carrito' element={<CarritoContainer/>}/>
    </Routes>
    <Footer/>
</BrowserRouter>


    </div>
    /*En productos tengo que meter una ruta dinámica*/
  );
}

export default App;
