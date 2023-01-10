//Trabajar con metodos mas avanzados 
// .map() .filter() .reduce()

// .map()

const array = ["Bogota", "Medellin", "Barranquilla", "Pasto"];

// Para recorrer el array y modificarlo 

const newArray = array.map((valor, indice) =>`${indice + 1} - ${valor}`)
console.log(newArray); 

// .filter() Para obtener objetos que cumplan con una serie de condiciones 

const arrayObj = [
    {nombre: "Angela", edad: 21}, 
    {nombre: "Nicolas", edad: 23},
    {nombre: "Daniel", edad: 7},
    {nombre: "Gabriela", edad: 17},
    {nombre: "Hilda", edad: 60},
]

// const personasMayores = arrayObj.filter(obj => { 
//     if (obj.edad > 20){
//         return true
//     } else {
//         return false
//     }
// })

// Tambien se puede hacer asi: 
const personasMayores = arrayObj.filter(obj => obj.edad >20);
console.log(personasMayores)

const nuevaLista = arrayObj.filter(obj => obj.nombre !== "Angela"); 
console.log(nuevaLista);

// .reduce() Sirve para obtener un valor/objeto, a partir de una lista 

const valores = [3, 14, 26, 33, 45, 57, 62, 79]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) =>{
    console.log(acumulado); 
    console.log(cur); 
    console.log(i); 
    console.log(arrayOriginal); 
    return acumulado + cur; 
})

console.log(suma);








