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
                    <a href="tel:+573022892903">
                      <i class="bi bi-telephone-fill"></i>
                    </a>
                  </ItemLista>

                  <ItemLista>
                    <a href="mailto:patinoguevararonald@gmail.com">
                      <i class="bi bi-envelope-at-fill"></i>
                    </a>
                  </ItemLista>

                  <ItemLista>
                    <a href="https://github.com/ronaldp12">
                      <i class="bi bi-github"></i>
                    </a>
                  </ItemLista>

                  <ItemLista>
                    <a href="www.linkedin.com/in/ronald-patiño-7b9980305">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </ItemLista>
              </div>

              <p>©2025 Portfolio. Todos los derechos reservados</p>

              
          </div>
      </>
    
    
  )
}

