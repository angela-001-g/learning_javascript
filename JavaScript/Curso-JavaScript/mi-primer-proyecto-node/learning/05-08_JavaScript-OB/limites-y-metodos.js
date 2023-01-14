//Operador .valueOf() - Obtener valores numericos a partir de literales
let a = 2 
let b = new Number(3); //Se llama casting, castear un numero para darle number, se sigue comportando como un numero
console.log(b);
console.log(b.valueOf()); //Obtiene los valores primitivos de una variable declarada

let str = new String("Hola soy un string"); 
console.log(Object.values(str));

//NaN (Not a Number) - Infinity
let n = new Number("Hola"); 
console.log(n); // Me lanzará un NaN, para indicar que le dije que pasaba un numero pero no pasé un numero :v 
console.log(isNaN(n)); // Devuelve true porque, en efecto, es un not a number 

let numerador = 19;  
let divisor = 0; 
console.log(numerador/divisor); //Devuelve infinito, por limites, entre más pequeño sea el valor, tiende a infinito
                                //así lo trata JS 

//Cómo convertir los String a valores numericos con Number, parseInt y parseFloat(parse significa extruir, pegar o convertir un valor a un entero y a un numero de comaflotante)
let numero = "5.89"; 
console.log(numero);//String
console.log(Number(numero));//Conviertte String a Number

console.log(parseInt(numero)); // Tipo number int 

console.log(parseFloat(numero)); //Tipo number float

//Números hexadecimales: Son numeros en base 16 Se utilizan mucho porque al estar en base 16 por los bytes, 2 bytes por cada numero, y para convertirlos a numeros en JS se utiliza la base 16 (No hay decimales en los hexadecimales)

let numHex = "0x3a5b7";
console.log(parseInt(numHex)); //239031, Hexadecimal en decimal 

//Cómo obtener los valores maximo y minimo en js por el numero de bites que nos ocupa 

let min_precision = Number.EPSILON; //Epsilon es la minima distancia que puede haber entre un numero y el otro, pro eso trabajamos con precisiones

let min_valorjs = Number.MIN_VALUE; 
let max_valorjs = Number.MAX_VALUE;

console.log(min_precision); //Minimo valor con el que se puede trabajar dentro de JS 
console.log(min_valorjs); //Valor más pequeño que se puede obtener en JS 
console.log(max_valorjs); //Valor más grande que se puede obtener en JS;





