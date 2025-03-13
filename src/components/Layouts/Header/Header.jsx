import { BtnSection } from "../../Ui/BtnSection/BtnSection.jsx"
import { ImgPersonal } from "../../Ui/ImgPersonal/ImgPersonal"
import { BtnDownload } from "../../Ui/BtnDownload/BtnDownload.jsx"

export const Header = () => {
    return (
        <header>

            <h2>Hola! soy,</h2>
            <h1>Ronald Patiño Guevara</h1>
            <h3>Apasionado sobre el desarrollo frontend</h3>

            <BtnDownload estilos={"buttonDownload"} contenido={"Descarga mi cv"}/>

        </header>
    )
}

