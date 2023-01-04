//Casos muy especificos - break / continue : Hay que utilizarlo en casos muy excepcionales :) No haría falta haccerlo si estuviera bien desarrollado 

let lista = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

for (let i = 0; i < lista.length; i++){
    if (lista[i] === 3){ //Cuando la condición se cumpla, encuentra la palabra continue y en lugar de seguir con el bucle
        continue;        //vuelve a ejecutar con el siguiente valor y no imprime el 3.
    }
    console.log(lista[i]);
    if (lista[i] > 5){ //Cuando la lista llegue a i>5, el break indicará que deje de hacer el bucle. 
        break; 
    }

}
   


// Cuál es el ambito de un bucle : Se refiere al alcance que tienen las variables declaradas dentro de un bucle. 

//La variable i solo está definida dentro del bucle for, fuera de este no puedo hacer console.log(i); 
 console.log(lista[i]); // Lo imprime con el bucle for. 
 console.log(i); // No lo imprime porque i solo existe en el bucle. 

 //Si quiero que la variable tenga alcance fuera del bucle, no uso let sino var. 