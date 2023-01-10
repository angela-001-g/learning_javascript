//Cómo iterar los valores de una lista (acceder a cada uno de los valores)
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Forma ES6 (Mas eficiente )
// El forEach no retorna nada 
let suma = 0; 
const lista = [1, 2, 3, 4, 5, 6, 7, 8]; 
array.forEach(valor => {
    suma += valor; 
    console.log(valor);
})
console.log(suma);

//Busqueda de un valor dentro de una lista .find()
const variable = lista.find(valor =>{
    if (valor === 5){
        return true;
    }
})

console.log(variable);


const listaObjetos = [
    {nombre: "Angela", edad: 21},
    {nombre: "Daniel", edad: 7},
    {nombre: "Fredy", edad: 50}, 
    {nombre: "Samantha", edad: 6}, 
    {nombre: "Kelly", edad: 28}
]

//Acceder de varias formas con .find 

const objeto = listaObjetos.find(o => {
    if (o.nombre === "Fredy"){
        return true; 
    }
})
console.log(objeto);

const objeto2 = listaObjetos.find(o => o.nombre === "Angela")
console.log(objeto2.edad);

const {edad} = listaObjetos.find(o => o.nombre === "Daniel");
console.log(edad);






