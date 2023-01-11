//Trabajando con fechas 
const fecha = new Date() //Imprime la fecha actual  
console.log(fecha);

const fecha2 = new Date(2023, 0, 10, 18, 20, 30) //Defino fecha y hora exacta 
console.log(fecha2);

const fecha3 = new Date(0) //0 milisegundos 
console.log(fecha3); //1970-01-01-00:00:00.000z 

//Definir fechas a traves de strings

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4);

//Comparar dos fechas 
//Si una fecha es posterior a otra 
console.log(fecha > fecha2)

//Comparar igualdad entre fechas
console.log(fecha2.getTime() === fecha3.getTime()) //.getTime() pasa la fecha a milisegundos

//Obtener el dia, el mes y el año de una fecha 
// Obtener el día .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocaleDateString() 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-US"));
 

















































