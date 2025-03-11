import { NavLink } from "react-router-dom"

export const BtnSection = ({contenido, estilos, to}) => {
  return (
    <>
        <NavLink to={to}>
          <button className={estilos}>{contenido}</button>
        </NavLink>
        
    </>
  )
}
