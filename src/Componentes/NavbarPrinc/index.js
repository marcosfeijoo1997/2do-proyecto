import './NavbarPrinc.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import DibujoNav from '../Carrito/DibujoNav'




const NavbarPrinc=()=>{
   

  
  
    /*navigation menuToggle checkbox animation*/
    return (
        <div>   
            
            
             <div className='menuMovile'>
            <nav role="navigation" className='navigation'>
    <div id="menuToggle">
    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>
 
    
    
  
    <ul id="menu" className='menu'>
    <div className="dropdown elemento-desplegable">
    <li>	<NavLink className="hover-underline-animation" to="/">
						Inicio 
					</NavLink></li>
 
</div>

<div className="dropdown">
<li>	<NavLink className="hover-underline-animation" to="/Nosotros">
                        Nosotros
					</NavLink></li>


                      </div>
                      <div className="dropdown">
                    
                  
            <li>	<NavLink className="hover-underline-animation" to="/Servicios">
                             Servicios
                             
					</NavLink></li>
                   

               
                    </div>
                              <div className="dropdown">
           
                              <li>	<NavLink className="hover-underline-animation" to="/Categorias">
                          Productos
					</NavLink></li>
                    

</div>
                  
         
    
    </ul>
  

  </div>


</nav></div>
<li className='cart'><NavLink to="/Carrito"><DibujoNav/>
                          
                          </NavLink></li>

            
            <div className='route'><ul>
       <li>
           <img src={logo} alt='img'></img></li>
           <li>	<NavLink className="hover-underline-animation" to="/">
						Inicio
					</NavLink></li>

            <li>	<NavLink className="hover-underline-animation" to="/Nosotros">
                        Nosotros
					</NavLink></li>


            <li>	<NavLink className="hover-underline-animation" to="/Servicios">
                             Servicios
                             
					</NavLink></li>
                   


            <li>	<NavLink className="hover-underline-animation" to="/Categorias">
                          Productos
					</NavLink></li>

                    <li><NavLink to="/Carrito"><DibujoNav/>
                          
					</NavLink></li>



                </ul>
                
                </div>
           </div>

    
    )
}
export default NavbarPrinc