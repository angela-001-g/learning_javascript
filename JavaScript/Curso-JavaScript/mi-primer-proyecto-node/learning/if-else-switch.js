// Bifurcaciones  
// if... else
if (true){
    console.log("Es verdadero")
}

if (false){
    console.log("Es verdadero")
} else {
    console.log("Es falso")
}

//if else + if else, porque se pueden concatenar

let nota = 5; 

if(nota == 5){
    console.log("enhorabuena, eres sobresaliente")
} else if (nota == 4) {
    console.log("Muy buen trabajo")
} else if (nota == 3){
    console.log("No apruebas por poco")
} else if (nota == 2){
    console.log("Trabaja más")
} else if (nota == 1){
    console.log("Estudia")
} else {
    console.log("Error, introduce nota valida ")
}

//Switch existe para evitar la concatenacion anterior 

let nueva_nota = 5; 

switch (nueva_nota) {
    case 5: 
        console.log("enhorabuena, eres sobresaliente");
        break;
    case 4: 
        console.log("Muy buen trabajo");
        break;
    case 3: 
        console.log("No apruebas por poco");
        break;
    case 2: 
        console.log("Trabaja más");
        break;
    case 1: 
        console.log("Estudia");
        break;
    default: 
        console.log("Error");
        break;     
} 
