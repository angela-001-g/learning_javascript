// 1. Determine how long it takes to mix a juice
function timeToMixJuice(name){
    switch(name){
        case "Pure Strawberry Joy": 
            return 0.5; 
            break; 
        case "Energizer": 
            return 1.5; 
            break; 
        case "Green Garden":
            return 1.5;
            break; 
        case "Tropical Island": 
            return 3;
            break; 
        case "All or Nothing":
            return 5;
            break;
        default: 
            return 2.5;
            break;    
    }
}
// timeToMixJuice('Pure Strawberry Joy')

// 2. Replenish the lime wedge supply
function limesToCut(wedgesNeeded, limes){
    let contador = 0;
    let i = 0; 
    let arrayRest= 0; 
    while(wedgesNeeded > 0 && i < limes.length){
        if(limes[i] === "small"){
            arrayRest = 6
        } else if(limes[i] === "medium"){
            arrayRest = 8
        } else if (limes[i] === "large"){
            arrayRest = 10
        }
    wedgesNeeded = wedgesNeeded - arrayRest;
    i++;
    contador++;
    }
    return contador;
}

// console.log(limesToCut(80, ['small',
// 'large',
// 'large',
// 'medium',
// 'small',
// 'large',
// 'large']))

// Finish up the shift

// function remainingOrders(timeLeft, orders){
//     let contador = 0; 
//     let newArray = []; 
//     let i = 0;
//     let timeJuice = 0; 
//     while(timeLeft >= 0){
//         if(orders[i] === "Pure Strawberry Joy"){
//             timeJuice = 0.5
//         } else if(orders[i] === "Energizer" || orders[i] === "Green Garden"){
//             timeJuice = 1.5
//         } else if(orders[i] === "Tropical Island"){
//             timeJuice = 3
//         } else if(orders[i] === "All or Nothing"){
//             timeJuice = 5
//         } else {
//             timeJuice = 2.5
//         }
//         timeLeft = timeLeft - timeJuice; 
//         i++; 
//         contador++; 
        
//     }
//     return newArray; 
// }

// console.log(remainingOrders(7, [
//     'Tropical Island',
//     'Energizer',
//     'Limetime',
//     'All or Nothing',
//     'Pure Strawberry Joy',
//   ]))

function remainingOrders(timeLeft, orders){
    let contador = 0; 
    let i = 0; 
}