/*
EJERCICIO 1.
Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
*/

class CabeceraPagina {
    public titulo: string;
    public color: string;
    private fuente: string;

    constructor(tituloParam: string, colorParam: string, fuenteParam: string) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }

    //metodo 1
    obtenerTituloColorFuente(): string {
        console.log("*Usando el método 1:");
        return `Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }

    //metodo 2
    AlineacionDelTitulo(alineacion: 'centrado' | 'derecha' | 'izquierda'): string {
        console.log("\n*Usando el método 2:");
        return `Alineación del título: ${alineacion}`;
    }

    //metodo 3
    imprimirTodasLasPropiedades(): string {
        console.log("\n*Usando el método 3:");
        return `Propiedades => Título: ${this.titulo}, Color: ${this.color}, Fuente: ${this.fuente}`;
    }
}

// Accedemos a las propiedades de la clase, instanciandola
const cabeceraPag = new CabeceraPagina("Bienvenido", "Rojo", "Roboto");
console.log(cabeceraPag.obtenerTituloColorFuente());
console.log(cabeceraPag.AlineacionDelTitulo('centrado'));
console.log(cabeceraPag.imprimirTodasLasPropiedades());