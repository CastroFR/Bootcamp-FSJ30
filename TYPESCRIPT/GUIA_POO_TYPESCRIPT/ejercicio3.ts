/*
EJERCICIO 3.
Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción
*/

class Canción {
    titulo: string;
    genero: string;
    private autor: string;

    constructor(tituloParam: string, generoParam: string) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = "";
    }

    // Método get para obtener el autor
    getAutor(): string {
        return this.autor;
    }

    // Método set para establecer el autor
    setAutor(autorParam: string): void {
        this.autor = autorParam;
    }

    // Metodo para mostrar datos de la canción
    mostrarDatos(): string {
        return `Título: ${this.titulo}, \nGénero: ${this.genero}, \nAutor: ${this.autor}`;
    }

}

// instanciamos la clase canción
const cancion1 = new Canción("Tren al Sur", "Rock/pop");
// establecemos el autor
cancion1.setAutor("Los Prisioneros");
// mostramos los datos de la canción
console.log("Canción 1:");
console.log(cancion1.mostrarDatos());

const cancion2 = new Canción("Smells Like Teen Spirit", "Rock - grunge");
cancion2.setAutor("Nirvana");
console.log("\nCanción 2:");
console.log(cancion2.mostrarDatos());

const cancion3 = new Canción("November Rain", "Power ballad");
cancion3.setAutor("Guns N' Roses");
console.log("\nCanción 3:");
console.log(cancion3.mostrarDatos());