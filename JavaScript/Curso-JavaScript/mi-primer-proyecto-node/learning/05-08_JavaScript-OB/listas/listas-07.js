// Para comparar listas 
// .every()  Ver si todos los elementos dde una lista cumplen una condicion 

const array = [ 100, -400, 20, 50, -4, 8, 12, -67]; 

// const resultado = array.every(valor => {
//     if(typeof valor === 'number'){
//         return true; 
//     } else {
//         return false;
//     }
// }) //true porque todos son de tipo number 

const resultado = array.every(val => val > 0); //false porque hay valores negativos 
 console.log(resultado);

 //Comparacion de listas 

 const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))