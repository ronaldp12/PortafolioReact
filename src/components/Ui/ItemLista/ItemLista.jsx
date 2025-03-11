

export const ItemLista = ({contenido, children}) => {
  return (
    <>
        <li>
            <span>{children}</span>
            <span>{contenido}</span>
        </li>
    </>
  )
}

