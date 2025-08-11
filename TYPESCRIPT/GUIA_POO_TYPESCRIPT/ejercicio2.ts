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

class Calculadora {

    // Metodo Sumar
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Metodo Restar
    restar(a: number, b: number): number {
        return a - b;
    }

    // Metodo Multiplicar
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Metodo Dividir
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero");
        }
        return a / b;
    }

    // Metodo Potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
        // Math.pow => Función para calcular la potencia, eleva 'base' a 'exponente'
    }

    // Metodo Factorial
    factorial(n: number): number {
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
        let resultado = 1;

        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

}

// Instanciamos la clase Calculadora
const calculadoraPlus = new Calculadora();
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