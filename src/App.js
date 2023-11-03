import './App.css';
import Navbar from './Componentes/Navbar';
import NavbarPrinc from './Componentes/NavbarPrinc';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*todas las rutas*/
import Inicio from './Componentes/ItemsNav/Inicio';
import Nosotros from './Componentes/ItemsNav/Nosotros';
import Servicios from './Componentes/ItemsNav/Servicios';
import CarritoContainer from './Componentes/Carrito/CarritoContainer';
import Footer from './Componentes/Footer/Footer';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Categorias from './Componentes/Categorias/Index';
import ItemDetailContainer from './Componentes/ItemDetail/ItemDetailContainer'
import CartProvider from './CartContext/CartProvider';



function App() {
  
  return (<div className="App"><>
    <BrowserRouter>
 
 <CartProvider>
 <Navbar/>
 <NavbarPrinc/>
 
  <Routes>
<Route path='/' element={<Inicio/>}/>
<Route path='/Nosotros' element={<Nosotros/>}/>
<Route path='/Categorias' element={<Categorias/>}/>
<Route
						path="/Categorias/:categoriaId"
						element={<ItemListContainer />}
					/>
     <Route
						path="/detalle/:detalleId"
						element={<ItemDetailContainer/>}
					/>
<Route path='/Servicios' element={<Servicios/>}/>
<Route path='/Carrito' element={<CarritoContainer/>}/>
    </Routes>
    </CartProvider>
 
    <Footer/>
</BrowserRouter>
</>

    </div>
    /*En productos tengo que meter una ruta dinámica*/
  );
}

export default App;
