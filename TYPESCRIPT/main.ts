// Typescript Tipado - Clase 28/7/25
// Diferencias entre JS y TS

/* JS
- Flexible
- Facil de programar sea a traves de funciones
- (INTERPRETADO) Web -> Navegador (Interpretado)
*/

/* TS
- Tipado duro -> YA NO ES TAN FLEXIBLE
- POO -> Forma de programar -> Los pilares estan COMPLETOS
- Un poco mas dificil de aprender
- COMPILADO (TSC) -> TRADUCIR EL CODIGO DE TS A JS
*/

// Declaracion de variables
let numerito = "Kevin jeje saludos"; // JS

// Dtaos primitivos
let numero:number = 1; // TS
let nombre:string = "Kevin"; // TS
let activo:boolean = true; // TS
let vacio:null = null;

// TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JUGAR Y PROMETER NO USAR
let nose:any = "PUEDO SER CUALQUIER COSA"; //
let noDefinido:undefined = undefined; // 

console.log(numerito);
console.log(numero);

function saludar(nombreParam:string):string {
    return `Hola, ${nombreParam}`;
}

console.log(saludar("Castro"));


// Estructuras de datos
// Arreglos -> Array
let arraycito = [1, 2, 3, 4, 5]; // JS
let arraycitoTS:number[]|string[] = [1, 2, 3, 4]; // TS
arraycitoTS = ["as"];
//arraycito.push("asdad"); // NO FUNCIONA

// Vamos a guardar dentro de EL ARRAY, numeros a strings
let arraycitoDobleDato: (number|string)[] = [123,"numero de la suerte",2555]

// Tupla
let arrayEspecifico:[number, string, string] = [27,"Francisco","otro string"];

// Podemos llegar a tener 2 tipos de datos
// VARIABLE : 1 TIPO | 2 TIPO
let dosTiposDeDatos:null|string = null;

dosTiposDeDatos = "";

// Tipo de dato personalizado
type Persona = {
    name: string,
    age: number
}

let programador: Persona = {name: "Jairo", age: 21};

let fsj30: Persona[] = [{name: "Jairo", age: 21}, {name: "Jorge", age: 30}];



/*
Este codig retorna el error: ""ts-node" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable."

lo ejecutamos con:
node main.ts
*/



