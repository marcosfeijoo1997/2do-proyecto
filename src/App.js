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
import CarritoContainer from './Componentes/Carrito/CarritoContainer';
import Footer from './Componentes/Footer/Footer';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdzDScgITOw_6CM0IIu6HUOjvSpmka3SY",
  authDomain: "proyecto-2-7797f.firebaseapp.com",
  projectId: "proyecto-2-7797f",
  storageBucket: "proyecto-2-7797f.appspot.com",
  messagingSenderId: "708104194861",
  appId: "1:708104194861:web:3943f4c8021cbad7ac61a4",
  measurementId: "G-VG1E3JRHVY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
    <Footer/>
</BrowserRouter>


    </div>
    /*En productos tengo que meter una ruta dinámica*/
  );
}

export default App;
