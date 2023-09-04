import { NavLink } from "react-router-dom"
const Categorias=()=>{
    return(<div>
        <li>	<NavLink className="hover-underline-animation" to="./Bases de mesas">
        <h1>Mesas</h1>


  </NavLink></li>
     <li>	<NavLink className="hover-underline-animation" to="./Bases de sillas">
     <h1>Sillas</h1>


</NavLink></li>
</div>
    )
}
export default Categorias