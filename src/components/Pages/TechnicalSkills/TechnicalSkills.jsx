import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx"
import { ReactIcon } from "../../Ui/ReactIcon/ReactIcon.jsx"
import { HtmlIcon } from "../../Ui/HtmlIcon/HtmlIcon.jsx"

export const TechnicalSkills = () => {
  return (

    <>
      <div className="container-technical-skills">

        <div className="container-technical">

          <h3>Frontend</h3>

          <div className="container-skills-list">
            <ItemLista estilos={"skills-list"} contenido={"React"}>
              <ReactIcon estilos={"react-icon"}/>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"HTML"}>
              <HtmlIcon estilos={"react-icon"}/>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"CSS"}>
              <i class="bi bi-filetype-css"></i>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"JavaScript"}>
              <i class="bi bi-filetype-js"></i>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"Tailwind CSS"}>
              <i class="bi bi-0-square"></i>
            </ItemLista>

          </div>
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

