import './App.css'
import Saludo from './components/Saludo'


function App() {

  return (
    <> {/* Este es el fragment -> NO DIBUJA UN CONTENEDOR EN EL HTML */}
      <h1>Holiwis</h1>

      {/* Esto es el primer componente jaja saludos */}
      <Saludo nombre='Kevin'/>
      <Saludo nombre='Linett'/>
      <Saludo nombre='Kiko'/>
    </>
  )
}

export default App

// Crear nuestro primer componente

/* COMPONENTES DE CLASE*/
// No se utilizan más hoy en día

/*class Saludo {
  render(
    <div> </div>
  )
}
*/

/*
function Saludo() {

  return (
  <>
    <h1>Holiwis</h1>

  </>)
}
*/
