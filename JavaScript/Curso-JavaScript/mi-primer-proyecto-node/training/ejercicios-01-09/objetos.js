// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const persona = { 
    nombre: "Angela", 
    apellido: "Marroquin", 
    edad: 21, 
    altura: 1.63, 
    isDeveloper: false
}

// - Una variable que obtenga tu edad a partir del objeto anterior
const age = persona.edad
console.log(age)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigas =  [
    {nombre: "Camila", apellido: "Mendoza", edad: 20, altura: 1.63, isDeveloper: false},
    {nombre: "Angie", apellido: "Hernandez", edad: 21, altura: 1.65, isDeveloper: false} 
] 
const todas = [...amigas, {...persona}] 
// const todasCopy = [...amigas, persona] 

//  todas[2].nombre = "Cambio" 
 // todasCopy[2].nombre = "Cambios"
//  console.log(todasCopy);
//  console.log(todas); 
//  console.log(persona);
 
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

 todas.sort((a, b) => {
    if (a.edad > b.edad){
        return -1
    } else if (a.edad < b.edad){
        return 1
    } else {
        return 0
    }
 })  
 console.log(todas); 
