//INRODUCCIÓN 

const persona = {
    nombre: 'Angela', 
    edad: 21, 
    isDeveloper: false, 
    saludo: function(){
        console.log('Hola')
    }
}

// console.log(persona);
// persona.saludo();

//Factory function: 
const creaPersona = (nombre, edad, isDeveloper) => { 
    return{
        nombre,  //Esto es nombre = nombre
        edad,  //edad = edad
        isDeveloper, //isDeveloper = isDeveloper 
        saludar: function(){
        console.log( `Hola` )
        }
    }   
}

const nueva_persona = creaPersona('Angela', 21, false)
console.log(nueva_persona)



