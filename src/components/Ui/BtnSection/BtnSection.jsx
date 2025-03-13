import { NavLink } from "react-router-dom"

export const BtnSection = ({contenido, estilos, to}) => {

  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {

      window.location.href = to;
    }, 1000);
  };

  return (
    <>
        <NavLink to={to}>
          <button onClick={handleClick} className={estilos}>{contenido}</button>
        </NavLink>
        
    </>
  )
}
