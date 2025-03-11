import { Home } from "./components/Pages/Home/Home"
import { Routes,Route } from "react-router-dom"
import { Container } from "./components/Container/Container"
import { TechnicalSkills } from "./components/Pages/TechnicalSkills/TechnicalSkills"

export function App() {

  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technicalSkills" element={<TechnicalSkills />} />
        </Routes>
      </Container>
    </>
  )
}
