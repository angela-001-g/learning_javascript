//Cómo obtener una lista a partir de otra .slice()

const lista1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; 
//Slice no modifica el valor del array original 

const lista3 = lista1.slice(2, 7); //Desde la posicion 2 hasta la 7 
console.log(lista3); 

const lista4 = lista1.slice(2, -2); //El -2 indica la posicion 2 moviendose de atras a adelante en la lista1 
console.log(lista4); 


