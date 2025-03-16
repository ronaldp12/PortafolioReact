import { BtnSection } from "../../Ui/BtnSection/BtnSection.jsx"

export const SectionBtns = () => {
  return (
    <>
    <div className="container-btns">
      <BtnSection  estilos="btn-section" contenido={"Habilidades Técnicas"} to="/technicalSkills" />
      <BtnSection estilos="btn-section" contenido={"Habilidades Sociales"} to={"/socialSkills"} />
      <BtnSection estilos="btn-section" contenido={"Experiencia Profesional"}/>
      <BtnSection estilos="btn-section" contenido={"Estudios"}/>
    </div>
    
    </>
  )
}
