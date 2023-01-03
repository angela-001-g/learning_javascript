// Las etiquetas nos da mas control sobre los bucles que los break-continue
// Labels nos permiten nombrar los bucles For o While y asi se puede usar break o continue de una manera mas controlada


let unidades = 0; 
let decenas = 0; 

bucledecenas: while (true){ // con una etiqueta le puse nombre al bucle 
    bucleunidades: while(true){
        console.log("El número actual es: " + decenas + unidades);
        unidades ++; 
        if (unidades === 10){
            unidades = 0;
            break bucleunidades;  //Le decimos qué bucle romper exactamente 
        }
        if (decenas === 2){
        
            break bucledecenas; //Le decimos qué bucle romper exactamente
        }
    }
    decenas++; 
    
}

//Con las labels, dentro deun mismo bucle podemos afectar a bucles externos 










