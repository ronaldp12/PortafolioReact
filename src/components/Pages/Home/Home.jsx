import { Footer } from "../../Layouts/Footer/Footer.jsx"
import { Header } from "../../Layouts/Header/Header.jsx"
import { SectionAboutMe } from "../../Layouts/SectionAboutMe/SectionAboutMe.jsx"
import { SectionBtns } from "../../Layouts/SectionBtns/SectionBtns.jsx"

export const Home = () => {
  return (
    <>
        <Header estilos={"header-home"}/>
        <SectionAboutMe/>
        <SectionBtns/>
        <Footer/>
    </>
  )
}
