//Cómo unir dos listas .concat()

const lista1 = [1, 2, 3, 4, 5 ]; 
const lista2 = [6, 7, 8, 9, 10]; 
//No muta los valores de las listas 
const lista3 = lista1.concat(lista2);
console.log(lista3); // Nueva lista con los valores de las listas anteriores, concatenados 

//Cómo unir dos listas con el factor de propagacion 

console.log(...lista3); //loggea por separado los valores de la lista 3

const lista4 = [...lista1, ...lista3]; 
console.log(...lista4); //Hace una lista con los valores anteriores, no una lista de las listas anteriores 





