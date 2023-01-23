//Declarar una clase, con la palabra reservada class 

class persona { 
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre;  //Con el this. se declaran los atributos dentro de la clase 
        this.edad = edad; 
        this.isDeveloper = isDeveloper;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años` )
    }
}

const nuevaPersona = new persona('Angela', 21, false); 
console.log(nuevaPersona)
nuevaPersona.saludo();

console.log(nuevaPersona instanceof persona); //True porque sí es instancia ded persona 