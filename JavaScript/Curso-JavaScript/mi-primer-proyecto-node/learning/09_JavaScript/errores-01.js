//Tratar de gestionar el surgimiento de errores 

const miFuncion = val => { 
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número") 
}
// console.log(miFuncion(8))

//Para preveeer que val puede ser un error, existe try y catch 

try { //Codigo que puede fallar 
    console.log("Está ejecutandose de manera correcta")
    const doble = miFuncion("Hola")
    console.log(doble)
} catch(e) {        
    //En caso de fallar quiero que ejecutes 
    console.error("ERROR!!") //Los errores es mejor pasarlos en console.error()
    console.log(e)
} finally { 
    //Se va a ejecutar tanto si se produce algún error como si no 
    console.log("Todo bien, todo bonito")
}







