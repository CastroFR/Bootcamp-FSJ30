// Interfaces TS - Clase 30/7/25

/* Ejemplo de uso de Interface en POO */

// Ejemplo simple -> No es una estructura que usariamos en un proyecto


class Animal{
    // Encasulamiento -> Limitamos el acceso a los atributos de la clase nombre
    private nombre:string;
    private especie:string;

    constructor(nombreParam:string, especieParam:string){
        this.nombre = nombreParam;
        this.especie = especieParam;
    }

    comer():string{
        return "Estoy comiendo";
    }

    getAnimal():Animal{
        return this;
    }
}

let d10s:Animal = new Animal("m","chucho");
console.log(d10s.getAnimal());

// El extends nos avusa que esta usando el pilar de Herencia
class Gato extends Animal implements IAnimal {
    // Tenemos 2 atributos publicos, NO HAY ENCAPSULAMIENTO
    raza:string;
    color:string;

    constructor(nombreParam:string, especieParam:string,razaParam:string, colorParam:string){
        super(nombreParam, especieParam);
        this.raza = razaParam;
        this.color = colorParam;
    }

    hacerRuido():string{
        return "Miau miauuuuu"
    }
}

// Implements le avisa a JS y TS que la clase Perro OBLIGATORIAMENTE tiene que tener lo que declara
// IAnimal
class Vaca extends Animal implements IAnimal {
    raza:string;
    color:string;

    hacerRuido():string{
        return "Muuu muuuuu";
    }
}

// se utilizan como una especie de extendidi a una clase como algo que despues se va estar repitiendo
interface IAnimal{
    // LOS ATRIBUTOS TIENEN QUE QUEDAR PUBLICOS
    raza:string;
    color:string;

    // LOS METODOS TIENEN QUE QUEDAR PUBLICOS
    hacerRuido():string;
}
