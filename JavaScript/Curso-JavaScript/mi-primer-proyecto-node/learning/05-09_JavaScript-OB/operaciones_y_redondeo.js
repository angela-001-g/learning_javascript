let a = 3.5; 
let b = 4.8; 

console.log(a + b); 

//Representacion de numeros en caddenas de texto 

let a_str = a.toString();
console.log(a_str); //Convieerte la variable numerica a String 
console.log(typeof a_str);

//Redondeo de numeros decimales 

let c = 3.3; 
let d = c * 3; 

console.log(d);
// .toFixed(): Convierte el numero en un string y limita el numero de decimales  

console.log(d.toFixed(3)); //Da un numero de decimales, 3 en este caso  

// .toPrecision(): Limita el numero de  cifras significativas del numero. También devuelve un String 

let x =123.33333
console.log(x.toPrecision(5));



