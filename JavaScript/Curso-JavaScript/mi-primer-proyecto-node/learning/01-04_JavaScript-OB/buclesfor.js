//Bucles for 
// for (inicializacion; condicion; actualizacion)
// for (let i =0; i<10; i++){
//     console.log(i);
// }


let lista = [1,3,6,7,8,12,15,22,33,44]; 
// Para recorrer cada elemento de la lista 
 for (let i = 0; i < lista.length; i++){
     console.log(lista[i] * 2);
}

// // Estructura For of 
// for (let valor of lista){ // Es mas especifico, va a pasar los valores de la lista 
//     console.log(valor); 
// }

// // Estructura forEach
// lista.forEach(valor => { //Haraá lo mismo que el for of, aquí puedes pone una función por ejemplo, que operará a cada entrada de la lista
//     console.log(valor);
// })
// // => Funcion flecha 

// // for in. Para evaluar cada uno de los parametros de un objeto 

// let persona = {
//     nombre: "Angela",
//     apellido: "Marroquin",
//     edad: 21, 
//     isStudent: true,
// }

// for (let propiedad in persona){
//     console.log(propiedad);//Con esto solo accedes a la propiedad
//     console.log(persona[propiedad]); // Con esto accedes al valor de la propiedad
// }