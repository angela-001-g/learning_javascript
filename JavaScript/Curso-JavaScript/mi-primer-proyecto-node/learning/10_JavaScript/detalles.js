//Si quiero usar las funciones que están en el index en este archivo 
const moduloIndex = require("./index.js")
console.log(moduloIndex)

const factorial = moduloIndex.factorial 
const fact = factorial(5)
console.log(fact)
//Se puede hacer ambas maneras
const sum = moduloIndex.suma(20, 30) //Para usar las funciones, se las llama como metodos
console.log(sum)

const{ multiplica, suma } = require("./index"); //Esta manera hace que el codigo sea mas limpio  

