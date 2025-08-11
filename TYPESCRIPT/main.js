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
var numerito = "Kevin jeje saludos"; // JS
// Dtaos primitivos
var numero = 1; // TS
var nombre = "Kevin"; // TS
var activo = true; // TS
var vacio = null;
// TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JUGAR Y PROMETER NO USAR
var nose = "PUEDO SER CUALQUIER COSA"; //
var noDefinido = undefined; // 
console.log(numerito);
console.log(numero);
function saludar(nombreParam) {
    return "Hola, ".concat(nombreParam);
}
console.log(saludar("Castro"));
// Estructuras de datos
// Arreglos -> Array
var arraycito = [1, 2, 3, 4, 5]; // JS
var arraycitoTS = [1, 2, 3, 4]; // TS
arraycitoTS = ["as"];
//arraycito.push("asdad"); // NO FUNCIONA
// Vamos a guardar dentro de EL ARRAY, numeros a strings
var arraycitoDobleDato = [123, "numero de la suerte", 2555];
// Tupla
var arrayEspecifico = [27, "Francisco", "otro string"];
// Podemos llegar a tener 2 tipos de datos
// VARIABLE : 1 TIPO | 2 TIPO
var dosTiposDeDatos = null;
dosTiposDeDatos = "";
var programador = { name: "Jairo", age: 21 };
var fsj30 = [{ name: "Jairo", age: 21 }, { name: "Jorge", age: 30 }];
/*
Este codig retorna el error: ""ts-node" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable."

lo ejecutamos con:
node main.ts
*/
