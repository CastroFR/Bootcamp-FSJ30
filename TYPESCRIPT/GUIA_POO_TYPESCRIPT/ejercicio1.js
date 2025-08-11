/*
EJERCICIO 1.
Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades.
*/
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
    }
    //metodo 1
    CabeceraPagina.prototype.obtenerTituloColorFuente = function () {
        console.log("*Usando el método 1:");
        return "T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    //metodo 2
    CabeceraPagina.prototype.AlineacionDelTitulo = function (alineacion) {
        console.log("\n*Usando el método 2:");
        return "Alineaci\u00F3n del t\u00EDtulo: ".concat(alineacion);
    };
    //metodo 3
    CabeceraPagina.prototype.imprimirTodasLasPropiedades = function () {
        console.log("\n*Usando el método 3:");
        return "Propiedades => T\u00EDtulo: ".concat(this.titulo, ", Color: ").concat(this.color, ", Fuente: ").concat(this.fuente);
    };
    return CabeceraPagina;
}());
var cabeceraPag = new CabeceraPagina("Bienvenido", "Rojo", "Roboto");
console.log(cabeceraPag.obtenerTituloColorFuente());
console.log(cabeceraPag.AlineacionDelTitulo('centrado'));
console.log(cabeceraPag.imprimirTodasLasPropiedades());
