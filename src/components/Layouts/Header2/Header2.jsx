
import { ItemLista } from '../../Ui/ItemLista/ItemLista.jsx'
import { ImgPersonal } from '../../Ui/ImgPersonal/ImgPersonal'
import { NavLink } from "react-router-dom"

export const Header2 = ({estilos, estilos2}) => {
  return (
    <div>
      
      <header className={estilos}>
        <ItemLista>
            <NavLink to={"/"}>
                <i class="bi bi-arrow-left-circle-fill"></i>
            </NavLink>
        </ItemLista>

        <div className={estilos2}>
        <ImgPersonal estilos={"img-personal2"}/>
        <h2>Portfolio</h2>
        </div>
        
      </header>

    </div>
  )
}