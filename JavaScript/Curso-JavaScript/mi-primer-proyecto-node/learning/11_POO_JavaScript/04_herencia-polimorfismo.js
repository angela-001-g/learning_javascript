//inheretance -> Herencia 
class persona{
    constructor(nom, edad) {
        this.nombre = nom
        this.edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

class Desarrollador extends persona {
    constructor(nombre, edad, lenguaje){
        super(nombre, edad) // Este metodo nos permite utilizar el constructor de la clase padre 
        this.lenguaje = lenguaje; 
    }
    saludo() {
        super.saludo(); //Acceder al saludo de la clase padre 
        console.log(`soy desarrolladora de ${this.lenguaje} `);
    }
}

const nuevoDev = new Desarrollador("Angela", 21, "JavaScript");
console.log(nuevoDev);
nuevoDev.saludo();

//Polimorfismo -> Varias formas  