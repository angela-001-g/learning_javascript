// 1. Determine how long it takes to mix a juice
function timeToMixJuice(name) {
    switch (name) {
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
function limesToCut(wedgesNeeded, limes) {
    let contador = 0;
    let i = 0;
    let arrayRest = 0;
    while (wedgesNeeded > 0 && i < limes.length) {
        if (limes[i] === "small") {
            arrayRest = 6
        } else if (limes[i] === "medium") {
            arrayRest = 8
        } else if (limes[i] === "large") {
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
//     let i = 0;
//     while(timeLeft >= 0 || i < orders.length){
//         switch(orders[i]){
//             case "Pure Strawberry Joy": 
//                 timeLeft = timeLeft - 0.5;
//                 break;
//             case "Energizer": 
//                  timeLeft = timeLeft - 1.5; 
//                  break; 
//             case "Green Garden":
//                  timeLeft = timeLeft - 1.5;
//                  break; 
//             case "Tropical Island": 
//                  timeLeft = timeLeft - 3;
//                  break;
//             case "All or Nothing":
//                  timeLeft = timeLeft - 5;
//                  break;
//             default: 
//                  timeLeft = timeLeft - 2.5; 
//                  break;
//              }
//              i++ 
//     }
//     return timeLeft;
// }




function remainingOrders(timeLeft, orders) {
    let i = 0;
    while (timeLeft > 0 && i < orders.length) {
        if (orders[i] === "Pure Strawberry Joy") {
            timeLeft = timeLeft - 0.5;
        } else if (orders[i] === "Energizer") {
            timeLeft = timeLeft - 1.5;
        } else if (orders[i] === "Green Garden") {
            timeLeft = timeLeft - 1.5;
        } else if (orders[i] === "Tropical Island") {
            timeLeft = timeLeft - 3;
        } else if (orders[i] === "All or Nothing") {
            timeLeft = timeLeft - 5;
        } else {
            timeLeft = timeLeft - 2.5;
        }
        orders.shift();
        
    }
    return orders;
}
//  console.log(remainingOrders(7, ['Tropical Island', "Tropical Island", "All or Nothing", "Tropical Island", "Green Garden" ] ))

console.log(remainingOrders(13, ['Pure Strawberry Joy',
'Pure Strawberry Joy',
'Vitality',
'Tropical Island',
'All or Nothing',
'All or Nothing',
'All or Nothing',
'Green Garden',
'Limetime',]))
