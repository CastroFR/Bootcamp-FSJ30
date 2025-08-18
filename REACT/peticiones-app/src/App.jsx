import './App.css'

// Asincronismo -> Manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {
// Para declarar una segunda funcion dentro, evitamos "function" y lo declarmos como una const y funcion flecha.
  const peticionApi = () => { // declarar funciones siempre nomenclatura camelCase.
    //Peticion a una API
    //fetch('URL') // peticiones de traer datos son asi de siemples, solo con la URL
    fetch('https://thesimpsonsapi.com/api/characters')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

  //async function peticionApiAA(){}
  const peticionApiAA = async () => {
    // Bloque de manejo de errores
    try{
      // Remplazo al primer .then
      let response = await fectch('https://rickandmortyapi.com/api/character');
      //console.log(response);
      // Remplazo para el segundo .then
      let data = await response.json();
      console.log(data);
    }catch(error) {
      console.error(error);
    }

  }
  return (
    <>
      <h1>Holiwis</h1>
      <h2>Chauchis</h2>
      <button onClick={peticionApi}>Apretame, traigo datos pá!</button>
      <button onClick={peticionApiAA}>Apretame, traigo datos de otra manera</button>
    </>
  )
}

export default App
