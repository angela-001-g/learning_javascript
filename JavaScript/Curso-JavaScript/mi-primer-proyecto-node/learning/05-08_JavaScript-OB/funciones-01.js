//Qué son, cómo se declaran y cómo se utilizan las funciones 
 //Las funciones son bloques de codigo que se ejecutan con un fin especifico 

 const nom = "Angela"

 function saludar (nombre){
    console.log(`Hola, ${nombre}`)
 }

 saludar(nom)

 let nombre_2 = "Camila"
 despedir(nombre_2) //No va a despedir a Camila porque tiene mas importancia la variable dentro de la funcion 

 function despedir (nombre){
     nombre = "Angie"
     console.log(`Adios ${nombre}`)
 }


 //Funciones con objetos 
 let persona = {nombre: "Nicolas", apellido: "Gomez"}

 function saludarPersona(objeto){
     objeto.apellido = "Tellez"
     console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
 }
 saludarPersona(persona)

 console.log(persona) //La funcion cambió el objeto original 

 //Quiero que siempre tenga un valor por defecto, tenga o no parametro

 imprimeNumero()

 function imprimeNumero(numero = 0){ //Si no le paso ningun numero, no va a imprimir undefined, sino 0, se les llaman parametros opcionales
    console.log(numero)
 }

 //Definir funciones con parametros indeterminados utilizando el factor de propagacion como parametros 

 imprimir(1, 3, 9, 2, "Hola", {id: 10})
 function imprimir (...parametros){
    console.log(parametros)
}


function suma(...nums){ 
    return nums.reduce((a,b) => a + b) //Sumó todo 
    console.log(nums[2]) //Accede a la posicion 
    console.log(...nums) //Accede a todo el arreglo y lo pasa de string a number
}

const s = suma(1, 2, 3, 4)
console.log(s)







































