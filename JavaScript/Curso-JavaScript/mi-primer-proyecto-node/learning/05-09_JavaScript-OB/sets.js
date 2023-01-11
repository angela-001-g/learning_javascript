// sets = conjuntos en español. Son como listas pero se comportan diferente 
// Set = Conjunto no ordenado de elementos unicos 

const array = [1, 2, 3, 2, 10];
// Crear un nuevo set 

const miSet = new Set(array); 

console.log(array);
console.log(miSet); //Los sets no permiten almacenar valores duplicados, como el 2 en este caso

//Los sets tambien tienen una serie de metodos para añadir o quitar valores 

// .add(añade)

miSet.add(1000); //Añade al final del set 
console.log(miSet); 

// .delete(elimina) 

miSet.delete(1000);
console.log(miSet);

// .clear(elimina todos los valores del set)

// miSet.clear(); 
// console.log(miSet);

// .has()
console.log(miSet.has(10)); //true porque 10 está en el set

// Propiedad .size para saber el tamaño del set 

console.log(miSet.size);

//iteracion con el forEach 
miSet.forEach(valor => {
    console.log(valor);
})

const it_set = miSet.values()
console.log(it_set); //obtenemos un iterator 

const ar_miSet = [...miSet]; //Obtener valores con factor de propagacion 
console.log(ar_miSet);









































