import imgProyecto1 from '../../../assets/images/project-1.png'
import imgProyecto2 from '../../../assets/images/project-2.png'
import imgProyecto3 from '../../../assets/images/project-3.png'
import imgProyecto4 from '../../../assets/images/project-4.png'
import { Header2 } from '../../Layouts/Header2/Header2'
import { ImgProject } from '../../Ui/ImgProject/ImgProject.jsx'
import { ItemLista } from '../../Ui/ItemLista/ItemLista.jsx'
import {Footer} from '../../Layouts/Footer/Footer.jsx'

export const Experience = () => {
  return (

    <>
      <Header2 estilos={"header2"} estilos2={"container-header2"} />
      <div className='container-projects'>

        <h2>Proyectos</h2>

        <div className='container-project'>
          <a href="https://github.com/ronaldp12/atlas_project">
            <ImgProject estilosDiv={"container-img"} estilos={"img-project"} ruta={imgProyecto1} />
            <ItemLista estilos={"info"} estilos2={"project-name"} contenido={"Atlas project"}>

              <i class='bx bxl-github icon-github'></i>

            </ItemLista>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt?</p>
        </div>

        <div className='container-project'>
          <a href="https://github.com/ronaldp12/dictionary">
            <ImgProject estilosDiv={"container-img"} estilos={"img-project"} ruta={imgProyecto2} />
            <ItemLista estilos={"info"} estilos2={"project-name"} contenido={"Traductor"}>

              <i class='bx bxl-github icon-github'></i>

            </ItemLista>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt?</p>
        </div>


        <div className='container-project'>
          <a href="https://github.com/ronaldp12/LluviaDePalabras">
            <ImgProject estilosDiv={"container-img"} estilos={"img-project"} ruta={imgProyecto3} />
            <ItemLista estilos={"info"} estilos2={"project-name"} contenido={"Lluvia de palabras"}>

              <i class='bx bxl-github icon-github'></i>

            </ItemLista>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt?</p>
        </div>

        <div className='container-project'>
          <a href="https://github.com/ronaldp12/LluviaDePalabras">
            <ImgProject estilosDiv={"container-img"} estilos={"img-project"} ruta={imgProyecto4} />
            <ItemLista estilos={"info"} estilos2={"project-name"} contenido={"Reproductor"}>

              <i class='bx bxl-github icon-github'></i>

            </ItemLista>
          </a>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt?</p>
        </div>

      </div>

    <Footer/>
    </>
    
  )
}
