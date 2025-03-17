import React from 'react'
import { Header2 } from '../../Layouts/Header2/Header2.jsx'
import { ItemLista } from '../../Ui/ItemLista/ItemLista.jsx'
import { Footer } from '../../Layouts/Footer/Footer.jsx'

export const Studies = () => {
  return (
    <>
      <Header2 estilos={"header2"} estilos2={"container-header2"} />

      <div className='container-studies'>

        <h2>Estudios</h2>

        <div className='container-study'>
          <ItemLista estilos2={"study-name"} contenido={"Técnico en programación de software "}>
            <i class="bi bi-code-slash"></i>
            <p className='state'>・Terminado</p>
            <p className='years'>2023-2024</p>
          </ItemLista>
        </div>

        <div className='container-study'>
          <ItemLista estilos2={"study-name"} contenido={"Técnologo en Ánalisis y Desarrollo de Software "}>
            <i class="bi bi-code-slash"></i>
            <p className='state2'>・En formación</p>
            <p className='years'>2024-2025</p>
          </ItemLista>
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
