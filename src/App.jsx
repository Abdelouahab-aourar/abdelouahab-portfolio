import { Background } from "./components/Background"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { SkillsIcons } from "./pages/SkillsIcons"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
function App() {

  return (
    <>
      <Background/>
      <NavBar/>
      <Home/>
      <About/>
      <SkillsIcons/>
      <Projects/>
      <Contact/>
      
    </>
  )
}

export default App
