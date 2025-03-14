

export const ItemLista = ({contenido, children, estilos, estilos2="list"}) => {
  return (
    <>
    <div className={estilos2}>
    <li className={estilos}>
          <span>{children}</span>
          <span>{contenido}</span>
        </li>
    </div>
        
    </>
  )
}

