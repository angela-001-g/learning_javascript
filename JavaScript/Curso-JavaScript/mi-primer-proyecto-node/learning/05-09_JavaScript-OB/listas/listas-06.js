//.sort() Para ordenar arreglos. Este metodo MODIFICA el array 

const numeros = [100, 2, 50, 4, 25, 6, 30, 5]; 
// return -1 pasa la lista al reves
// return +1 deja la lista igual 
numeros.sort((a, b) => {
    if(a < b){
        return -1;
    } else {
        return +1;
    } // Los ordena 
})

console.log(numeros);

//Ordenar unicamente arrays numericos 

const arrayNumerico = [2, 1, 10, 8, 7, 3, 5, 9, 4, 6, 1, 4, 5, 3, 8, 10]

arrayNumerico.sort((a, b) => a - b ); 
console.log(arrayNumerico); 


const arrayObj = [
    {nombre: "Angela", edad: 21}, 
    {nombre: "Nicolas", edad: 23},
    {nombre: "Daniel", edad: 7},
    {nombre: "Gabriela", edad: 17},
    {nombre: "Hilda", edad: 60},
]

arrayObj.sort((a, b) => a.edad - b.edad) //Ordena de menor a mayor 
console.log(arrayObj);















