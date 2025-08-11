/*
EJERCICIO 3.
Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción
*/
var Canción = /** @class */ (function () {
    function Canción(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = "";
    }
    // Método get para obtener el autor
    Canción.prototype.getAutor = function () {
        return this.autor;
    };
    // Método set para establecer el autor
    Canción.prototype.setAutor = function (autorParam) {
        this.autor = autorParam;
    };
    // Metodo para mostrar datos de la canción
    Canción.prototype.mostrarDatos = function () {
        return "T\u00EDtulo: ".concat(this.titulo, ", \nG\u00E9nero: ").concat(this.genero, ", \nAutor: ").concat(this.autor);
    };
    return Canción;
}());
// instanciamos la clase canción
var cancion1 = new Canción("Tren al Sur", "Rock/pop");
// establecemos el autor
cancion1.setAutor("Los Prisioneros");
// mostramos los datos de la canción
console.log("Canción 1:");
console.log(cancion1.mostrarDatos());
var cancion2 = new Canción("Smells Like Teen Spirit", "Rock - grunge");
cancion2.setAutor("Nirvana");
console.log("\nCanción 2:");
console.log(cancion2.mostrarDatos());
var cancion3 = new Canción("November Rain", "Power ballad");
cancion3.setAutor("Guns N' Roses");
console.log("\nCanción 3:");
console.log(cancion3.mostrarDatos());
