import { Background } from "./components/Background"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
function App() {

  return (
    <>
      <Background/>
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </>
  )
}

export default App
