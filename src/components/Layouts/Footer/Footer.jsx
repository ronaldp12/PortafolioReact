import { BtnSection } from "../../Ui/BtnSection/BtnSection.jsx"
import { ItemLista } from "../../Ui/ItemLista/ItemLista.jsx"


export const Footer = () => {
  return (

      <>
          <div className="footer">

              <div className="email-footer">
                  <a href="mailto:patinoguevararonald@gmail.com">
                      <button className="btn-contact">Contáctame</button>
                  </a>
                  <p>O también puedes contactarme a través de: </p>
              </div>

              <div className="icons-footer">
                  <ItemLista>
                      <i class="bi bi-telephone-fill"></i>
                  </ItemLista>

                  <ItemLista>
                      <i class="bi bi-envelope-at-fill"></i>
                  </ItemLista>

                  <ItemLista>
                      <i class="bi bi-github"></i>
                  </ItemLista>

                  <ItemLista>
                      <i class="bi bi-linkedin"></i>
                  </ItemLista>
              </div>

              <p>©2025 Portfolio. Todos los derechos reservados</p>

              
          </div>
      </>
    
    
  )
}

