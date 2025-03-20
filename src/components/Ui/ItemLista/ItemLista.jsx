

export const ItemLista = ({contenido, children, estilos, estilos2}) => {
  return (
    <>
      <li className={estilos}>

        <span className={estilos2}>{contenido}</span>
        <span>{children}</span>
        
      </li>
        
    </>
  )
}

