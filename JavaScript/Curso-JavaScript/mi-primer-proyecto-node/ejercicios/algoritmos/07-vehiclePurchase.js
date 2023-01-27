// 1. Determine if you will need a drivers licence
function needsLicense(vehicle){
    if (vehicle === "car" || vehicle === "truck"){
        return true;
    } else{
        return false; 
    }
}

// console.log(needsLicense("bike"))

// 2. Choose between two potential vehicles to buy 
function chooseVehicle(option1, option2){
    const cars = [option1, option2]
    cars.sort()
    return `${cars[0]} is clearly the better choice.` 
}

// console.log(chooseVehicle('Volkswagen Beetle', 'volkswagen beetle'))

// 3. Calculate an estimation for the price of a used vehicle
function calculateResellPrice(originalPrice, age){
    if(age < 3){
        return originalPrice * 0.8
    } else if (age > 10){
        return originalPrice * 0.5
    } else {
        return originalPrice * 0.7
    }
}

console.log(calculateResellPrice(1000, 15))
