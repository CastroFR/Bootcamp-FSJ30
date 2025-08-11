// Paradigma -> modelo de programar
// Que programamos bajo unas reglas en especifico
// Codigo reutilizable
// Se basa en el uso de objetos y clases para organizar y estructurar el codigo
// Es un paradigma que esta orientado a clases y objetos
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
/*
    POO -> Es una forma de ver y pensar el codigo y las soluciones de implementaciones de oftware
    vamos a imaginar moldes para poder etandarizar las cosas -> Clases
    Utilizar los moldes para crear funcionalidad en nuestra app -> Objetos
*/
/* PILARES DE POO o OPP
- Herencia
- Polimorfismo

- Encapsulamiento -> Limitar el acceso a la información
* nacen los modificadores de acceso: Public, Protected, Private, Default=Public
- Abstraccion -> Nos da herramientas(metodos) para acceder a informacion limitada
*/
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(especieParam, edadParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    // Metodos -> Acciones que puede realizar el objeto
    // Metodos -> Funciones que van a pertenecer a una clase -> Comportamiento del objeto
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    // Getters y Setters -> Determinan si hubo encapsulamiento
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edadParam) {
        this.edad = edadParam;
    };
    // Abstracción
    Animal.prototype.aumentarEdad = function () {
        this.edad += 1;
        //this.incrementarEdad(1);
    };
    return Animal;
}());
var animalito = new Animal("Chucho", 18, "Masculino", "Blanco");
// Accedemos a un atributo del objeto instanciado(creado en base) de una clase
// creado en base |se puede decir también| -> instanciado
//console.log(animalito.especie);
//console.log(animalito.edad);
console.log(animalito.getEdad());
// Herencia
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(especieParam, edadParam, generoParam, colorParam, razaParam, nombreParam) {
        // Traemos la funcionalidad del constructor del padre
        var _this = _super.call(this, especieParam, edadParam, generoParam, colorParam) || this;
        _this.raza = razaParam;
        _this.nombre = nombreParam;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        return "Wof gua wof gua";
    };
    return Perro;
}(Animal));
var perrito = new Perro("Perro", 5, "Masculino", "Marron", "Labrador", "Firulais");
// Ejemplo de clase mas real a un caso de un login
var Usuario = /** @class */ (function () {
    function Usuario(emailParam, passwordParam) {
        this.email = emailParam;
        this.password = passwordParam;
    }
    Usuario.prototype.changePassword = function (newPassword) {
        this.password = newPassword;
    };
    Usuario.prototype.showCredentials = function () {
        return this;
    };
    return Usuario;
}());
var usuarito = new Usuario("kevin@meduermo.com", "12345678");
usuarito.changePassword("87654321");
console.log(usuarito.showCredentials());
