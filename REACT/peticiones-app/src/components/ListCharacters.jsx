// rafc -> snippet para crear el componente funcional con flecha
import { useEffect, useState } from "react";
import { CardCharacter } from "./CardCharacter";

/*
1- https://rickandmortyapi.com/api/character
2- https://thesimpsonsapi.com/api/characters
*/


export const ListCharacters = () => {
  // Siempre que yo necesite una CAJA para guardar ALGO voy hacer un ESTADO
  const [listPjs, setListPjs] = useState([])


  // Para declarar una segunda funcion dentro, evitamos "function" y lo declarmos como una const y funcion flecha.
  const peticionApi = () => { // declarar funciones siempre nomenclatura camelCase.
    //Peticion a una API
    //fetch('URL') // peticiones de traer datos son asi de siemples, solo con la URL
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json()) // se asegura que haya una respuesta, y si es asi nos devuelve como .jsn el cuerpo de la info
      .then(data => {
        console.log(data); // con los datos los envie dentro la caja
        // Si necesito sacar esos datos de aca adentro usamos
        //setListPjs(data.results)
        setListPjs(data.results); // agarre los datos y los meta dentro la caja
      })
      .catch(error => console.error(error))
  }

  console.log(listPjs);


  //async function peticionApiAA(){}
  const peticionApiAA = async () => {
    // Bloque de manejo de errores
    try {
      // Remplazo al primer .then
      let response = await fetch('https://rickandmortyapi.com/api/character');
      //console.log(response);
      // Remplazo para el segundo .then
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  //useEffect -> Cuando necesito cargar datos apenas se vaya montar el componente

  useEffect(() => {
    peticionApi()

  }, []) // -> Colocamos [] como array de dependencia, sino nos consumirá más ram de la que debería

  return (
    <div className="row">
      ListCharacters
      {/* Recorrer el array para mostrar los datos -> Mapear los datos para pintarlos */}

      {listPjs.map((character) => {
        return <section key={character.id} className="col-md-3 col-sm-6">
          <CardCharacter
            name={character.name}
            image={character.image}
            status={character.status}
          />
        </section>

      })}
    </div>
  )
}
