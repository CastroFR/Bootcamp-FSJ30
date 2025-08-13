// Crear nuestro primer componente
// Este componente se le llama componente DOM, que no contine lógica como tal.
import { useState } from "react";
import { Chauchis } from "./Chauchis";

// Props -> Propiedades = seria la forma que de un componente padre a un componente hijo envíe información.
// Props -> Propiedades = Son un objeto en realidad

/* function Saludo({nombre}) {

  return (
  <>
    <h1>Holiwis, {nombre}</h1>
  </>)
}

export default Saludo; */

function Saludo({nombre, apellido}) {
//function Saludo({props}) {
//  console.log(props);
  
  /* Destructuring object
  props = {
  nombre: "Kevin",
  apellido: "Castro"
  } 
  */

  //const {nombre, apellido, edad} = props
  //let curso = "FSJ30";

  // El remplazo de las variables para manipular datos en REACT
  // El estado -> Hook -> Son funciones PREHECHAS que ya vienen con React
//  const [nombreEstado, setNombreEstado] = useState();
  const [nombreCurso, setNombreCurso] = useState("FSJ30");

  //console.log(nombreCurso);
  
// ESTA FUNCION CAMBIA EL ESTADO DE EL COMPONENTE Saludo
  return (
  <>
    <h1>Holiwis, {nombre} {apellido}</h1>
    <h2>Curso: {nombreCurso}</h2>
    <button onClick={ () => setNombreCurso("Java30")}>Magia</button>
    <button onClick={ () => setNombreCurso("FSJ30")}>Regresar</button>
    <br />
    <Chauchis nombre={nombre} curso={nombreCurso}/> 
  </>)
}

export default Saludo;