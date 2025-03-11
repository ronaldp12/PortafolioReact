import { ItemLista } from "../../Ui/ItemLista/ItemLista"


export const Footer = () => {
  return (
    <div className="footer">
            <ItemLista contenido={"Facebook"}>
                 <i class='bx bxl-facebook'></i> 
            </ItemLista>
            <ItemLista contenido={"Telefono"}>
                <i class="bi bi-telephone-fill"></i>
            </ItemLista>

            <ItemLista contenido={"Email"}>
                <i class="bi bi-envelope-at-fill"></i>
            </ItemLista>

            <ItemLista contenido={"Github"}>
                <i class="bi bi-github"></i>
            </ItemLista>

            <ItemLista contenido={"LinkedIn"}>
                <i class="bi bi-envelope-at-fill"></i>
            </ItemLista>
    </div>
  )
}

