import './style.css'
import { NavLink } from "react-router-dom"
import img1 from '../../assets/Mesa en X de hierro.png'
import img2 from '../../assets/silla.png'
const Categorias=()=>{
    return(<div className="productos-index">
        <li>	<NavLink to="./Bases de mesas">
        <h1>Mesas</h1>
        <img src={img1} alt='imgalt'/>


  </NavLink></li>
     <li>	<NavLink to="./Bases de sillas">
     <h1>Sillas</h1>
     <img src={img2} alt='imgalts'/>


</NavLink></li>
</div>
    )
}
export default Categorias