import { BtnSection } from "../../Ui/BtnSection/BtnSection"
import { ParagraphMain } from "../../Ui/ParagraphMain/ParagraphMain"


export const SectionMain = () => {
  return (
    <>
    <ParagraphMain/>
    
    <div className="container-btns">
      <BtnSection  estilos="btn-section" contenido={"Habilidades Técnicas"} to="/technicalSkills" />
      <BtnSection estilos="btn-section" contenido={"Habilidades Sociales"}/>
      <BtnSection estilos="btn-section" contenido={"Experiencia Profesional"}/>
      <BtnSection estilos="btn-section" contenido={"Estudios"}/>
    </div>
    </>
  )
}

