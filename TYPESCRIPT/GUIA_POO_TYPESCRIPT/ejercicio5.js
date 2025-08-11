/*
EJERCICIO 5.
Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    // Recibimos lo datos mediante el constructor
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    // Validamos si es mayor de edad o no
    Persona.prototype.mayorDeEdad = function () {
        if (this.edad >= 18) {
            console.log("\nTú eres mayor de edad");
        }
        else {
            console.log("\nTú eres menor de edad");
        }
    };
    return Persona;
}());
// Subclase heredada de Persona
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    // Metodo para cargar el sueldo
    Empleado.prototype.cargarSueldo = function (nuevoSueldo) {
        this.sueldo = nuevoSueldo;
    };
    // Metodo para mostrar el sueldo
    Empleado.prototype.imprimirSueldo = function () {
        console.log("Sueldo disponibe: $".concat(this.sueldo));
    };
    // Llamamos el metodo abstracto "mostrarDatos" esta vez lo implementamos
    Empleado.prototype.mostrarDatos = function () {
        console.log("Datos Personales:\n");
        console.log("Nombre: ".concat(this.nombre));
        console.log("Apellido: ".concat(this.apellido));
        console.log("Direcci\u00F3n: ".concat(this.direccion));
        console.log("Tel\u00E9fono: ".concat(this.telefono));
        console.log("Edad: ".concat(this.edad));
    };
    return Empleado;
}(Persona));
// Definimos un objeto de la clase Empleado y mostramos los datos del empleado y el sueldo
var empleado1 = new Empleado("Anacleto", "Escoba", "San Salvador Norte - calle la ronda", 12345678, 19, 100);
empleado1.mostrarDatos(); // Muestra datos personales
empleado1.cargarSueldo(130); // Carga el sueldo
empleado1.imprimirSueldo(); // Muestra nuevo sueldo
empleado1.mayorDeEdad(); // Verifica mayoría de edad
