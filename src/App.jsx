import { Background } from "./components/Background"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { SkillsIcons } from "./pages/SkillsIcons"
import { SkillsCards } from "./pages/SkillsCards"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Footer } from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <>
      <Background/>
      <NavBar/>
      <Home/>
      <About/>
      <SkillsIcons/>
      <SkillsCards/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </>
  )
}

export default App
