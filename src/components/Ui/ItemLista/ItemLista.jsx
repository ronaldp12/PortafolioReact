

export const ItemLista = ({contenido, children, estilos, estilos2="list"}) => {
  return (
    <>
    <div className={estilos2}>
    <li className={estilos}>
          
          <span>{contenido}</span>
          <span>{children}</span>
        </li>
    </div>
        
    </>
  )
}

