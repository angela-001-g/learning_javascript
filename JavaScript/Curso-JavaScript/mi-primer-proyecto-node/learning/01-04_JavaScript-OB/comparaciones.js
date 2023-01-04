//Comparaciones 

//Igualdad 

if (5==5){
    console.log("5 es igual a 5");
}

let a = 5 
let b = 5 

if (a==b){ // == Solo compara el valor 
    console.log("Esta es una igualdad debil")
}

if (a===b){ // === Compara el valor y el tipo 
    console.log ("Esta es una iguldad fuerte")
}

//Desigualdad 
let c = 8 
let d = 5 

if ( c !== d ){
    console.log("c y d son diferentes")
}

if (c < d){
    console.log("c es menor que d")
} else if (c > d){
    console.log("c es mayor que d")
} else {
    console.log ("c y d son iguales")
}