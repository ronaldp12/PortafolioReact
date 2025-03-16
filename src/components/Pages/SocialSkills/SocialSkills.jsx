import React from 'react'
import { Header2 } from '../../Layouts/Header2/Header2.jsx'
import { ItemLista } from '../../Ui/ItemLista/ItemLista.jsx'
import { Footer } from '../../Layouts/Footer/Footer.jsx'

export const SocialSkills = () => {
  return (

    <>
          <Header2 estilos={"header2"} estilos2={"container-header2"} />

          <div className='container-social-skills'>
              <h2>Habilidades sociales</h2>

              <div className='container-social-list'>
                  <div className='item-social'>
                      <ItemLista contenido={"Comunicacion Efectiva"} />
                  </div>

                  <div className='item-social2'>
                      <ItemLista contenido={"Liderazgo"} />
                  </div>

                  <div className='item-social3'>
                      <ItemLista contenido={"Honestidad"} />
                  </div>

                  <div className='item-social4'>
                      <ItemLista contenido={"Respeto"} />
                  </div>

                  <div className='item-social5'>
                      <ItemLista contenido={"Trabajo en Equipo"} />
                  </div>

                  <div className='item-social6'>
                      <ItemLista contenido={"Empatía"} />
                  </div>

                  <div className='item-social7'>
                      <ItemLista contenido={"Escucha Activa"} />
                  </div>

                  <div className='item-social8'>
                      <ItemLista contenido={"Proactivo"} />
                  </div>

                  <div className='item-social9'>
                      <ItemLista contenido={"Adaptabilidad"} />
                  </div>

              </div>

              <div className='container-level-english'>
                  <ItemLista contenido={"Nivel de inglés "}>
                      <span className='level'>B1+ </span>
                      <i class="bi bi-translate"></i>
                  </ItemLista>
              </div>
          </div>

          <Footer/>

    </>
    
      
    
  )
}

