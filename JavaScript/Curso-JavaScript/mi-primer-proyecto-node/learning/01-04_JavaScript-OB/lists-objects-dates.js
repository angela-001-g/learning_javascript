//Lista, array o arreglo: Conjunto de variables puestas en orden 

const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);

lista2[0] = "Soy el primer elemento"; // Cambia el dato de la posición de la lista
console.log(lista2)

// Puedo poner listas dentro de una lista 

const lista3 = [lista, lista2];
console.log(lista3)

// objects
const caja = { //El const slo altera caja, no sus atributos
    alto: 2,
    ancho: 6,
    color: "roja",
    isGreen: true,
    guardar: ["manzana", "pera", "banano"],
    tarjeta: { //Este es un objeto dentro de un objeto 
        marca: "frutas",
        almacenamiento: 3,
    },
    "altura-tarjeta": 5, //Se utilizan las comillas por el simbolo especial - 
}
//Por fuera del objeto tambien se pueden añadir propiedades
caja.tapa = 1; //Añade propiedad tapa al objeto caja 
caja.alto = 5; //Cambia propiedad alto
console.log(caja.tapa); //Con el . se accede a los atributos o metodos de los objetos 


// dates (Hay librerias de apoyo para trabajar con fechas como moment.js)

const ahora = new Date(); //Pone la fecha del momento exacto que tiene el servidor cuando se corra la variable 
console.log(ahora) 


const fecha_milis = new Date (); //Puedo crear una nueva fecha basandome en los milisegundos desde el 1 enero de 1970 (considerada fecha 0)
console.log(fecha_milis);

const fecha_cadena = new Date ("december 29 2022"); //Tiene que ser en ingles
console.log(fecha_cadena); 

const fecha_valor = new Date (2022, 11, 29); //Los meses toman a enero desde la posición 0 
console.log(fecha_valor);

const dia = ahora.getDate(); 
const mes = ahora.getMonth() + 1;//Mas 1 porque inicia en Enero = 0 
const anyo = ahora.getFullYear(); 

console.log(dia, mes, anyo);