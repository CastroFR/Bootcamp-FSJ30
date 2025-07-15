// Peticiones Asincronas o promesas las vemos en el navegador


// Asincronismo (busqueda o envio de datos): actividades en simultaneo mientras JS ejecuta otra accion.
// de aqui nacen las promesas.

// Fetch, ejemplo dado
// Es uuna iinterfaz, un metodo para hacer peticiones HTTP

// Pueden pasar 3 cosas, es decir 3 estados de las promesas, las promesas tienen 3 estados:

/*
1 - PENDING => Todavia no hay una respuesta
2 - RESPONSE => (Resolve) => Si la promesa se cumplió, retorna una respuesta
3 - REJECT => Rechaza la promesa, no se cumplió

*/

console.log("Hola jajeja");

// Formas de escribir una peticion
// para generar una promesa va tomar un tiempo, aunque para nosotros sera muy rapido

// Simular una peticion a una API, literal hay que usar una promesa
// este tipo de promesas solo tienen 2 estados: resolve y reject

// Promessa en estado PENDING:
function getCoach(id){
    return new Promise( (resolve, reject) => {
    setTimeout(() => {
        if ( id === 1){
        resolve({id: 1, name: "Kevin"})
        } else {
            reject("No se encontró ese coach");
        }
    },2000 )

    })
}
//console.log(getCoach(1)); // aca muestra estado PENDING

// Manejo de asincronismo
//
// Vamos a aprender a esperar, en codigo. JS lee el codigo y l compila asi como llega, 
// es decir la promesa se ejecuta en modo asincrono y esto no se resuleve rapido. 
// Por tanto hay que decirle a JS que no se ejecutara rapido.


// Decirle a Javascript que espere
// 
// El asincronismo se puede representar de 2 maneras:
// 1 - then y 2 - catch
// then => recibe las noticias buenas (data), (el valor) y lo muestra
// catch => recibe los errores (error) y los muestra

// Manejo de asincronismo o promesas
function traerDatos(){

    getCoach(1)
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.error(error);
    });
}
//traerDatos();

// Funcion asincrona para que javascript espere a que la promesa se resuelva

// Async y await
// aqui nacen 2 hermanos de igual manera que son:
// 1 - try y 2 - catch
async function obtenerDatos(){
    try{

    let coach = await getCoach(1);
    console.log(coach);

    } catch (error) {
        console.error(error);
    }
}

//obtenerDatos();


// Fetch => Es uuna interfaz, un metodo para hacer peticiones HTTP
// HTTTP = Protocolo para hacer peticiones

// como manjarias errores?
// con try catch, o con excepciones hechas.

async function getDittoAwait(){
    let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    console.log(respuesta)
}
//getDittoAwait();

function getDittoThen(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((data)=>{
        console.log(data);
    } )
}
//getDittoThen();

// Este mismo codigo, pero ahora con manejo de errores

async function getDittoAwait(){
    try {   // MANEJO DE ERRORES
    let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto') // ESPERA A TRAER LA RESPUESTA
    console.log(respuesta) // Esto se borra, pero se pone para probar la respuesta que nos da la API
        let cuerpo = respuesta.json(); // Obtenemos el cuerpo 
    console.log(cuerpo);
    } catch(error) {   // MANEJO DE ERRORES
        console.error(error);
    }
}
//getDittoAwait();

function getDittoThen(){
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') // Buscar los datos en la API
    .then((data)=>{   // Decimos que JS espere a que vuelva con la respuesta
        console.log(data);  // Nos va a dar meta datos
        return data.json(); // Retornar la data para usarla despues, SOLO EL BODY TIPO JSON
    } )
    .then( (data) => {     // Voy a utilizar el body que retorne antes 
        console.log(data); // MUESTRO EL CUERPO, AHI ESTAN LOS DATOS
    })
    .catch( (error) => {
        console.log(error);
    })
}
//getDittoThen();

// URL
// MANDAR A TRAER INFORMACION DE UN ENDPOINT
// por medio del metodo .json


// DOM
// la manipulacin de DOM se basa en la ineraccion con e usuario/cliente
// HAY eventos:
// onclick, focus, onchanges, entre otros...

// Eventos => acciones que puede hacer el usuario.

// Funcion saludo como ejemplo del DOM

function saludar(){
    console.log("Holiwis");
}
