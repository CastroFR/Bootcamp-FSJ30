// Crear nuestro primer componente
// Este componente se le llama componente DOM, que no contine lógica como tal.

// Props -> Propiedades = seria la forma que de un componente padre a un componente hijo envíe información.
function Saludo({nombre}) {

  return (
  <>
    <h1>Holiwis, {nombre}</h1>
  </>)
}

export default Saludo;