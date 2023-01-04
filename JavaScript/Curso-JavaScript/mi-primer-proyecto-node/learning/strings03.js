//Metodos de cadenas de texto 
// Para ahondar más en expresiones regulares: https://regexr.com 

let texto_largo = "Muchos años despues frente al peloton de fusilamiento el coronel Aureliano Buendia habia de recordar aquella tarde remota en la que su padre lo llevó a conocer el hielo "
// Cuantas veces aparece la palabra el 
console.log(texto_largo.match(/el/g)); 

//Ver si el texto contiene una palabra 

console.log(texto_largo.includes("Aureliano")); // Como existe la palabra Aureliano en el texto, arroja true 

//Saber si un texto empieza con una palabra  
console.log(texto_largo.startsWith("Muchos")); //true porque sí empieza con esa palabra :v 

//Saber si un texto termina con otra palabra 
console.log(texto_largo.endsWith("amanecer")); //false porque no termina así :v  










