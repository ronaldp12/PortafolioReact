

export const ImgProject = ({estilosDiv, estilos, ruta}) => {
  return (
    <>
    <div className={estilosDiv}>
        <img className={estilos} src={ruta} alt="" />
    </div>
        
    </>
  )
}
