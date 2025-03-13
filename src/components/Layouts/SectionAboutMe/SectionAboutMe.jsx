import { ParagraphMain } from "../../Ui/ParagraphMain/ParagraphMain.jsx"
import { ImgPersonal } from "../../Ui/ImgPersonal/ImgPersonal"

export const SectionAboutMe = () => {
  return (
    <>
        <ParagraphMain contenido={"Sobre mi"} estilos={"about-me-text"} />
          <div className="container-img-personal">
              <ImgPersonal estilos={"img-personal"} />
          </div>
    
    </>
  )
}

