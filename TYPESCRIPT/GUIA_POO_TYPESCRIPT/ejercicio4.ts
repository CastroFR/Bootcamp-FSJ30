/*
EJERCICIO 4. 
Crea una clase llamada Cuenta y va contener lo siguiente:
-Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
-Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos.
*/

class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombreParam: string, cantidadParam: number, tipoCuentaParam: string, numeroCuentaParam: string) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numeroCuenta = numeroCuentaParam;
    }
    // metodo depositar
    depositar(): void {
        console.log("***********************************");
        console.log("*  Bienvenid@ a Banco TypeScript  *");
        console.log("***********************************");
        console.log("Transacciones registradas:");
        if (this.cantidad < 5) {
            console.log("\nEl valor a depositar debe ser mayor a $5.00");
        } else {
            console.log(`\nSe ha depositado correctamente la cantidad de: $${this.cantidad.toFixed(2)}`);            
        }
    }
    // metodo retirar
    retirar(valor: number): void {
        if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo en la cuenta");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado: $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`);
        }

    }
    // metodo mostrar los datos
    mostrarDatos(): string {
        return `Nombre: ${this.nombre}, \nTipo de Cuenta: ${this.tipoCuenta}, \nNúmero de Cuenta: ${this.numeroCuenta}`;
    }
    
}

// Definimos objeto instanciado de la clase cuenta
const demoCuenta = new Cuenta("Anacleto Escoba", 4, "Ahorro", "1234567890");
demoCuenta.depositar();
demoCuenta.retirar(20);
console.log(demoCuenta.mostrarDatos());