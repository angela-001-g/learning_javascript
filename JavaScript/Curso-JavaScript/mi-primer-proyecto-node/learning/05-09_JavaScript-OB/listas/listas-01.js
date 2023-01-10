let array = [1, "Hola", undefined, null, 5, 6, false ];
console.log(array);

// Metodos para introducir nuevos valores en los arrays .push() .unshift() mutan el valor de los arrays 

array.push("final", 30, 22, false); 
console.log(array); //Muta el array introduciendo valores al final 

//.unshift() Añade valores al principio 

array.unshift("Principio", 0, false); 
console.log(array); 

//Metodos para eliminar valores de los arrays (tambien mutan el valor del array)
 const array2 = [ 1, 2, 3, 4, 5]
//Valores al final .pop()
array2.pop();
console.log(array2);
array2.pop();// Elimina el ultimo valor 
console.log(array2);

//valores al principio .shift()

array2.shift();
console.log(array2); //Elimina el primer valor 

//Metodo para modificar, añadir o eliminar valores de nuestro array .splice()

const array4 = [10, 20, 30, 40, 50, 60 ,70 ,80]; 
console.log(array4); 
//Eliminar valores 

array4.splice(2, 4); //(Desde la posicion que quiero, la cantidad que quiero eliminar)
console.log(array4); 

//Añadir valores 

array4.splice(2, 0, "Hola", 8, 7); //(Desde la posicion que quiero, cantidad que quiero eliminar, lo que quiero añadir )
console.log(array4);

//Modificar valores 

array4.splice(2, 1, 3); //Posicion dos, elimina uno, pone el valor 3
console.log(array4); 




