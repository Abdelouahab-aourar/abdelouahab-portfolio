import { Background } from "./components/Background"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
function App() {

  return (
    <>
    <Background>
      <NavBar/>
      <Home/>
    </Background>
    </>
  )
}

export default App
