//modulo: Es una parte de codigo que se puede utilizar en diferentes partes del programa 
// Formas de importar y exportar modulos 
// 1. Common JS - require 
// 2. Import ES6
function suma (a, b){
    return a + b;
}

function multiplica (a, b){
    return a*b;
}

function eleva (a,b){
    return a**b; 
}


function factorial (a){
    let factorial = 1; 
    for (let i = 1; i <= a; i++ ){
        factorial *= i;
    }
    return factorial; 
}


module.exports = { //De esta manera hago publicas estas funciones 
    suma,
    multiplica,
    eleva, 
    factorial
}