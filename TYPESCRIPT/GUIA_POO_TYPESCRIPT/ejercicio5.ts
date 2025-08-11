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

abstract class Persona {
    // Atributos tienen que ser protected y no private, esto para permitir acceso en la subclase Empleado
    // de lo contrario nos arrojaría error
    public nombre: string;
    public apellido: string
    protected direccion: string;
    protected telefono: number;
    protected edad: number;
    // Recibimos lo datos mediante el constructor
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
    }
    // Validamos si es mayor de edad o no
    mayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log("\nTú eres mayor de edad");
        } else {
            console.log("\nTú eres menor de edad");
        }
    }
    // método abstracto para mostrar datos personales, vacío puesto que despúes lo implementaremos
    abstract mostrarDatos(): void; 
}
// Subclase heredada de Persona
class Empleado extends Persona {
    // Atributo de Empleado
    private sueldo: number;

    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number, sueldoParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam)
        this.sueldo = sueldoParam;
    }
    // Metodo para cargar el sueldo
    cargarSueldo(nuevoSueldo: number):void {
        this.sueldo = nuevoSueldo;
    }
    // Metodo para mostrar el sueldo
    imprimirSueldo():void {
        console.log(`Sueldo disponibe: $${this.sueldo}`);
    }
    // Llamamos el metodo abstracto "mostrarDatos" esta vez lo implementamos
    mostrarDatos(): void {
        console.log("Datos Personales:\n");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }

}
// Definimos un objeto de la clase Empleado y mostramos los datos del empleado y el sueldo
const empleado1 = new Empleado("Anacleto","Escoba", "San Salvador Norte - calle la ronda", 12345678, 19, 100);
empleado1.mostrarDatos();      // Muestra datos personales
empleado1.cargarSueldo(130);   // Carga el sueldo
empleado1.imprimirSueldo();    // Muestra nuevo sueldo
empleado1.mayorDeEdad();       // Verifica mayoría de edad