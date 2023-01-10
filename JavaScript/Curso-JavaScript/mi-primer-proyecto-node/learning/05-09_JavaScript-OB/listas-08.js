//Si solo algunos elementos de la lista cumplen una condicion 
// .some()

const array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = array.some(valor => valor > 0 );
console.log(res);

const val = array.some(valor => valor == 90); // false porque 90 no existe 
console.log(val);

const arrayObj = [
    {nombre: "Angela", edad: 21}, 
    {nombre: "Nicolas", edad: 23},
    {nombre: "Daniel", edad: 7},
    {nombre: "Gabriela", edad: 17},
    {nombre: "Hilda", edad: 60},
]

const existe = arrayObj.some(valor => valor.nombre === "Daniel");
console.log(existe);

//Obtener una lista a partir de un objeto iterable (string es un objeto iterable)

const str = "Hola soy Angela"; //Es iterable porque puedo acceder a cada posicion del string 
console.log(str[2]);

const ar_str = Array.from(str) 
console.log(ar_str); // Lo obtiene como si fuera un array 

//Obtener un iterable de todos los indices del array 

const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys); //Crea un array con cada uno de los indices del array original 














