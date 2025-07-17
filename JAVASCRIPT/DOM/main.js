console.log("Hey holaa")


// Sintaxis usada 
// 2 sintaxis para obtener elementos

// Para la manipulacion del DOM siempre tenemos que obtener un elemento del frontend
// vamos a llamar el holiwis del html (document)

// Obtenemos un elmento del frontend (HTML)
// usamos getElement
let elementoDOM = document.getElementById('textoSaludo')
console.log(elementoDOM);

// queryselector solo va seleccionar el primr elemento
// pero si queremos llamar mas de uno usamos queryselectorall
let contenidoDOM = document.querySelector('#contenido');
console.log(contenidoDOM);

// manipular el botn del html
const btnApretable = document.querySelector('#botonMagico');

// manipular el boton btn arraycito
const btnArraycito = document.getElementById('btnArraycito');



// Propiedades de los elementos
// innerHTML => Obtiene todo el contenido html del elemento (Mas usada)
// innerText => Obtiene solo el texto del elemento

console.log(elementoDOM.innerHTML); // Se encarga de traer solo lo que tiene como referencia html
console.log(elementoDOM.innerText); // Se encarga de traer solo lo que tiene como referencia texto

// Con esta propiedad pintamos, llenamos datos en el frontend
elementoDOM.innerHTML = "<h2>Chauchis</h2>" // aui cambiamos el contenido del h2, de holiwis a chauchis

contenidoDOM.innerHTML = "<h3>Este texto esta inyectado con JS</H3>"

// Metodos de los elementos
// addEventListener => 
btnApretable.addEventListener('click',() => {
    alert('Avada Kedavra'); // alert detiene el codigo, hasta no aceptarlo no sigue normal
    console.log("Funciono el Alert");
    let dato = prompt("Ingresa tu nombre, no preguntes para que")
    console.log(dato);

    elementoDOM.style.color = "red"

})


// Metodo de JS
// Cada lenguaje tiene su manera de almacenar datos en local para el usuario
let arraycito =[1,2,3];
console.log(arraycito);

// localStorage => Almacenamiento local en el navegador del usuario
// setItem => guardar un elemento
// localStorage => Esta diseñada para guardar OBJETOS
// JSON.stringify => agarra el obeto que nososotros le damos y este lo va a guardar en el navegador

// Si validamos esta parte, podemos lograr que no me cambie los datos, es decir si inicialmente
// el arreglo debe estar vacío, y luego debe en base a los datos ya presentes, mantenerlos.

localStorage.setItem('arraycito',JSON.stringify(arraycito)); // esto guarda arraycito en el localstorage
let datita = localStorage.getItem('arraycito')
// Mostramos los datos del localstorage  QUE SON UN STRING
console.log(datita);
// Devolver la data a su tipo original
let datitaArray = JSON.parse(datita);
console.log(datitaArray)


btnArraycito.addEventListener('click', () => {
    console.log("Estoy andando");
    arraycito.push(4);
    console.log(arraycito);

    localStorage.setItem('arraycito',JSON.stringify(arraycito));
    console.log(localStorage.getItem('arraycito'));
})