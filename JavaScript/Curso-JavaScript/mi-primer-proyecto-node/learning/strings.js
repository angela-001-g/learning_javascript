let str = "Hola, soy un texto"; 
let str_comillas = "Ella me dijo literalmente \"ven a casa\" "


console.log(str);
console.log(str_comillas);


//Metodos mas utilizados con cadenas de caracteres 
// Cómo obtener la longitud de un String 

let string = "Hola, soy un string "; 
console.log(string.length);

//Obtener partes de cadenas de caracteres 
// slice() substring()

let slice_string = string.slice(0, 8);
console.log(slice_string);

let sub_string = string.substring(7, 15);
console.log(sub_string);


//Reeemplazar parte del contenido de una cadena de texto 

let cadena = "Hola mi nombre es Angela" 
console.log(cadena);

console.log(cadena.replace("Angela", "Nicolas")); //Remplaza el primer valor por el segundo 

let texto_largo = "Muchos años despues frente al peloton de fusilamiento el coronel Aureliano Buendia habia de recordar aquella tarde remota en la que su padre lo llevó a conocer el hielo "

//Quiero reemplazar los articulo el del anterior mensaje 

console.log(texto_largo.replace("el", "cinco")); //Solo reemplaza el primer el 

//Para cambiar todas las instancias hay que empezar a utilizar las expreciones regulares 
// con la expresion regular /g (global), reemplaza todas las instancias


console.log(texto_largo.replace(/el/g, "cinco"));






