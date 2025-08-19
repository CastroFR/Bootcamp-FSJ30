// rafc -> snippet para crear el componente funcional con flecha
import { useEffect, useState } from "react";

/*
1- https://rickandmortyapi.com/api/character
2- https://thesimpsonsapi.com/api/characters
*/


export const ListCharacters = () => {
  // Siempre que yo necesite una CAJA para guardar ALGO voy hacer un ESTADO
  const [listPjs, setListPjs] = useState( [] )


// Para declarar una segunda funcion dentro, evitamos "function" y lo declarmos como una const y funcion flecha.
  const peticionApi = () => { // declarar funciones siempre nomenclatura camelCase.
    //Peticion a una API
    //fetch('URL') // peticiones de traer datos son asi de siemples, solo con la URL
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      console.log(data); // con los datos los envie dentro la caja
      // Si necesito sacar esos datos de aca adentro usamos
      setListPjs(data.results)
      setListPjs(data.results); // agarre los datos y los meta dentro la caja
    })
    .catch(error => console.error(error))
  }

  //async function peticionApiAA(){}
  const peticionApiAA = async () => {
    // Bloque de manejo de errores
    try{
      // Remplazo al primer .then
      let response = await fetch('https://rickandmortyapi.com/api/character');
      //console.log(response);
      // Remplazo para el segundo .then
      let data = await response.json();
      console.log(data);
    }catch(error) {
      console.error(error);
    }
  }

  //useEffect -> Cuando necesito cargar datos apenas se vaya montar el componente

  useEffect( () => {
    peticionApi()

  },[]) // -> Colocamos [] como array de dependencia, sino nos consumirá más ram de la que debería

  return (
    <div>
    ListCharacters
    </div>
  )
}
