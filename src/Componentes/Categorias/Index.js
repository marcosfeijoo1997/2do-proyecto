import { NavLink } from "react-router-dom"
const Categorias=()=>{
    return(
        <li>	<NavLink className="hover-underline-animation" to="./mesas">
        <h1>Mesas</h1>
  </NavLink></li>
    )
}
export default Categorias