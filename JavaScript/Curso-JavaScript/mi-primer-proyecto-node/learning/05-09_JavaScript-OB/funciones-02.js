//Funciones tipo flecha - funciones anónimas 

const array = [1, 2, 30, 45, 13, 12]
//Usar las funciones tipo flecha con un metodo
const array2 = array.map((valor) => valor * 2)
console.log(array2)

//Otro tipo de declaracion de funciones tipo flecha 

const dobleDelValor = valor => valor * 2 //Hay que declararla primero para que corra
console.log(dobleDelValor(6)) //Corre porque ya está inicializada en la linea anterior(basta con eso)