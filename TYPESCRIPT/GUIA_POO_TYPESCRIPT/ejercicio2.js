/*
EJERCICIO 2:
Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
*/
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Metodo Sumar
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Metodo Restar
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Metodo Multiplicar
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Metodo Dividir
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    };
    // Metodo Potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
        // Math.pow => Función para calcular la potencia, eleva 'base' a 'exponente'
    };
    // Metodo Factorial
    Calculadora.prototype.factorial = function (n) {
        // Validación para números negativos
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
        }
        // Caso base para 0! y 1!
        if (n === 0 || n === 1) {
            return 1;
        }
        // Cálculo del factorial
        // Utilizamos un bucle para multiplicar todos los números desde 2 hasta n
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Instanciamos la clase Calculadora
var calculadoraPlus = new Calculadora();
// Probamos los métodos de la clase Calculadora
console.log("Resultados de la Calculadora:\n");
console.log("*Suma:");
console.log(calculadoraPlus.sumar(5, 3));
console.log("*Resta:");
console.log(calculadoraPlus.restar(10, 4));
console.log("*Multiplicación:");
console.log(calculadoraPlus.multiplicar(2, 6));
console.log("*División:");
console.log(calculadoraPlus.dividir(8, 2));
console.log("*Potenciación:");
console.log(calculadoraPlus.potencia(2, 3));
console.log("*Factorial:");
console.log(calculadoraPlus.factorial(4));
