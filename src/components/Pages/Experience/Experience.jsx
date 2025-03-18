import imgProyecto1 from '../../../assets/images/project-1.png'
import { Header2 } from '../../Layouts/Header2/Header2'
import { ImgProject } from '../../Ui/ImgProject/ImgProject.jsx'
import { ItemLista } from '../../Ui/ItemLista/ItemLista.jsx'

export const Experience = () => {
  return (

    <>
    <Header2 estilos={"header2"} estilos2={"container-header2"} />
        <div className='container-projects'>

            <h2>Proyectos</h2>

            <div className='container-project'>
                <ImgProject estilosDiv={"container-img"} estilos={"img-project"} ruta={imgProyecto1} />
                <ItemLista estilos2={"project-name"} contenido={"Atlas project"}>
                <i class='bx bxl-github'></i>
                </ItemLista>
                <p>descripcion</p>
            </div>
      
        </div>
    </>
    
  )
}
