// - Una función sin parámetros que devuelva siempre "true"
function noParametros(){
    return true; 
}
console.log(noParametros());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function resolverCincoSecs (){
    return new Promise(resolver =>{
        setTimeout(() =>{
            resolver("Hola soy una promesa");
        }, 5000)
    } )
}

async function asyncCall(){
    const result = await resolverCincoSecs();
    console.log(result);
}

asyncCall()
// - Una función generadora de índices pares automáticos

function* IndicesPares(){
    let id = 0;  
    while(true){
        id = id + 2;
        yield id;
        if (id === 10){
            return id;
        }
    }
}

const par = IndicesPares();
console.log(par.next().value)
console.log(par.next().value)
console.log(par.next().value)
console.log(par.next().value)
console.log(par.next().value)









