//Funciones genneradoras 
function* generarId (){
    let id = 0; 
    while (true){
        id++
        yield id //Se queda aqui esperando hasta que se vuelva a llamar la funcion 
        if (id === 10){
            return id;
        }
    }
}

const gen = generarId();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())






























