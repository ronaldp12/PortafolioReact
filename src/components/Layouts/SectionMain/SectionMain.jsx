import { BtnSection } from "../../Ui/BtnSection/BtnSection"


export const SectionMain = () => {
  return (
    <div className="container-btns">
      <BtnSection estilos="btn-section" contenido={"Habilidades Técnicas"}/>
      <BtnSection estilos="btn-section" contenido={"Habilidades Sociales"}/>
      <BtnSection estilos="btn-section" contenido={"Experiencia Profesional"}/>
      <BtnSection estilos="btn-section" contenido={"Estudios"}/>
    </div>
  )
}

