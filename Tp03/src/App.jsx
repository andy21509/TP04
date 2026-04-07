import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ComponenteCrearCita from "./CrearCita";
import Listado from './Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <ComponenteCrearCita />
          <Listado />
        </div>
      </div>

      </div>





    </>
  )
}

export default App
