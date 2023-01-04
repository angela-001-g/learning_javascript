// let input = "Cancer"; 
// let db = "cancer"; 

// console.log(input === db); //Da falso por las mayusculas y minusculas (c != C)

 // Para que sean iguales: toLowerCase() - toUpperCase()
// console.log(input.toLowerCase === db.toLowerCase); //Da true porque las pasa a minuscular 
// console.log(input.toUpperCase === db.toUpperCase); //Da true porque pasa todo el texto a mayuscula
// console.log(input.toLocaleUpperCase === db.toLocaleUpperCase); //Para idiomas como el turco que tienen un comportamiento diferente en el codigo ASCII

// Formas de concatenaar dos cadenas de caracteres 


// let str1 = "Hola soy la primera cadena"; 
// let str2 = "Hola soy la segunda cadena"; 

// console.log(str1.concat(" ", str2, " Mas cosas")); //Mejor utilizar esto si no hay sumas aritmeticas 

// console.log(str1 + " " + str2); 

//Eliminar espacios al inicio y al final 

let str3 = "    Hola soy un string con espacios al final.    ";
console.log(str3.length); 
// trim()
console.log(str3.trim().length); //Elimina los espacios que hay al principio y al final 
console.log(str3.trimStart().length); //Elimina solo los espacios del inicio 
console.log(str3.trimEnd().length); //Elimina solo los espacios del final 


// Obtener el caracter que hay en cierta posicion 

let str4 = "Hola, soy el maldito string numero cuatro "; 
console.log(str4.charAt(4)); // Imprime la posicion 4 (,)
console.log(str4[3]); //Acceder a la posición tomando el String como una lista  c: 

// Obtener la posicion de una palabra dentro de una cadena de caracteres 

let str5 = "Hola soy Angela y me gusta patinar. Angela Mi nombre es Angela y mi apellido Marroquin "; 
console.log(str5.indexOf("Angela")); //Me dice en qué posicion inicia la palabra que quiero buscar (9 en este caso) 
console.log(str5.lastIndexOf("Angela")); //Me va a pasar la posicion de la ultima instancia que encuentre  