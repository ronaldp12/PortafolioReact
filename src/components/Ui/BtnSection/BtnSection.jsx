import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"

export const BtnSection = ({contenido, estilos, to}) => {

  const navigate= useNavigate();

  const handleClick = (e) => {
    
    e.preventDefault();

    setTimeout(() => {

      navigate(to);
    }, 600);
  };

  return (
    <>
        <NavLink to={to}>
          <button onClick={handleClick} className={estilos}>{contenido}</button>
        </NavLink>
        
    </>
  )
}
