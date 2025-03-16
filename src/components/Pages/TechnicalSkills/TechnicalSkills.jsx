import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx"
import {Footer } from '../../Layouts/Footer/Footer.jsx'
import { Header2 } from "../../Layouts/Header2/Header2.jsx"

export const TechnicalSkills = () => {
  return (

    <>

      <Header2 estilos={"header2"} estilos2={"container-header2"} />

      <div className="container-technical-skills">

        <h2>Habilidades Técnicas</h2>

        <div className="container-technical">

          <h3>Frontend</h3>

          <div className="container-skills-list">
            <ItemLista>
            <i class="bi bi-filetype-jsx"></i>
            </ItemLista>
            <ItemLista >
            <i class="bi bi-filetype-html"></i>
            </ItemLista>
            <ItemLista >
            <i class="bi bi-filetype-css"></i>
            </ItemLista>
            <ItemLista >
            <i class="bi bi-filetype-js"></i>
            </ItemLista>
            <ItemLista >
            <i class="bi bi-bootstrap"></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-angular'></i>
            </ItemLista>

          </div>
        </div>

        <div className="container-technical">
          <h3>Control de versiones</h3>
          <div className="container-skills-list">
          <ItemLista>
          <i class="bi bi-git"></i>
          </ItemLista>
          <ItemLista>
          <i class="bi bi-github"></i>
          </ItemLista>
          <ItemLista>
          <i class="bi bi-gitlab"></i>
          </ItemLista>
          </div>
          
        </div>

        <div className="container-technical">
          <h3>Backend </h3>
          <div className="container-skills-list">
            <ItemLista>
            <i class='bx bxl-nodejs'></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-python' ></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-java'></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-django'></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-spring-boot' ></i>
            </ItemLista>
          </div>
        </div>

        <div className="container-technical">
          <h3>Base de datos </h3>
          <div className="container-skills-list">
            <ItemLista>
            <i class="bi bi-filetype-sql"></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-postgresql'></i>
            </ItemLista>
            <ItemLista>
            <i class='bx bxl-mongodb' ></i>
            </ItemLista>
          </div>
        </div>
        
      </div>

      <Footer/>
    </>
    
    
  )
}

