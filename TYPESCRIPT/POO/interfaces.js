/* Ejemplo de uso de Interface en POO */
// Ejemplo simple -> No es una estructura que usariamos en un proyecto
var Animal = /** @class */ (function () {
    function Animal(nombreParam, especieParam) {
        this.nombre = nombreParam;
        this.especie = especieParam;
    }
    Animal.prototype.comer = function () {
        return "Estoy comiendo";
    };
    Animal.prototype.getAnimal = function () {
        return this;
    };
    return Animal;
}());
var d10s = new Animal("m", "chucho");
console.log(d10s.getAnimal());
