import { Home } from "./components/Pages/Home/Home.jsx"
import { Routes,Route } from "react-router-dom"
import { Container } from "./components/Container/Container.jsx"
import { TechnicalSkills } from "./components/Pages/TechnicalSkills/TechnicalSkills.jsx"
import { SocialSkills } from "./components/Pages/SocialSkills/SocialSkills.jsx"
import { Studies } from "./components/Pages/Studies/Studies.jsx"

export function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicalSkills" element={<TechnicalSkills />} />
          <Route path="/socialSkills" element={<SocialSkills />} />
          <Route path="/experience" element={<SocialSkills />} />
          <Route path="/studies" element={<Studies />} />
        </Routes>
      </Container>
    </>
  )
}
