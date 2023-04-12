import './App.css'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Planes from './components/Planes'
import Recomendaciones from './components/Recomendaciones'
import Servicios from './components/Servicios'

function App() {


  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Servicios/>
      <Planes/>
      <Recomendaciones/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
