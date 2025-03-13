import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx"

export const TechnicalSkills = () => {
  return (

    <>
      <div className="container-technical-skills">

        <div className="container-technical">
          <h3>Frontend</h3>
          <ItemLista contenido={"React"} />
          <ItemLista contenido={"Html"} />
          <ItemLista contenido={"CSS"} />
          <ItemLista contenido={"JavaScript"} />
          <ItemLista contenido={"Tailwind CSS"} />
        </div>

        <div className="container-technical">
          <h3>Control de versiones</h3>
          <ItemLista contenido={"Git"} />
          <ItemLista contenido={"Github"} />
        </div>

        <div className="container-technical">
          <h3>Educacion y Liderazgo </h3>
          <ItemLista contenido={"Logica de programacion "} />
          <ItemLista contenido={"Preparacion"} />
          <ItemLista contenido={"Conduccion de conferencias"} />
        </div>

        <div className="container-technical">
          <h3>Desarrollo web </h3>
          <ItemLista contenido={"Aplicaciones del lado del cliente"} />
        </div>
        
      </div>
    </>
    
    
  )
}

