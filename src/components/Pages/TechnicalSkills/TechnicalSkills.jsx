import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx"
import { ReactIcon } from "../../Ui/ReactIcon/ReactIcon.jsx"
import { HtmlIcon } from "../../Ui/HtmlIcon/HtmlIcon.jsx"
import { CssIcon } from "../../Ui/CssIcon/CssIcon.jsx"
import { JavaScriptIcon } from "../../Ui/JavaScriptIcon/JavaScriptIcon.jsx"
import { TailwindIcon } from "../../Ui/TailwindIcon/TailwindIcon.jsx"

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
              <HtmlIcon estilos={"html-icon"}/>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"CSS"}>
              <CssIcon estilos={"css-icon"}/>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"JavaScript"}>
              <JavaScriptIcon estilos={"javascript-icon"}/>
            </ItemLista>
            <ItemLista estilos={"skills-list"} contenido={"Tailwind CSS"}>
              <TailwindIcon estilos={"tailwind-icon"}/>
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

