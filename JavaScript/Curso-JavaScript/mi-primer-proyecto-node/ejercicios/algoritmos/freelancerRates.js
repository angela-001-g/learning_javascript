// 1. Calculate the day rate given an hourly rate 


function dayRate(ratePerHour){
    return ratePerHour * 8;
}
// console.log(dayRate(89))

// 2. Calculate the number of workdays given a fixed budget
function daysInBudget(budget, ratePerHour){
    const workdays = Math.floor(budget/(dayRate(ratePerHour))); 
    return workdays; 
}

// console.log(daysInBudget(20000, 89))

// 3. Calculate the discounted rate for large projects
function priceWithMonthlyDiscount(ratePerHour, numDays, discount){ 
    const restDays = numDays%22
    const restDaysValues = restDays * dayRate(ratePerHour)
    const daysMonths = numDays - restDays
    const monthsValue = (dayRate(ratePerHour) * daysMonths) * (1 - discount)

    return Math.ceil(restDaysValues + monthsValue)     
}

//  console.log(priceWithMonthlyDiscount(16, 70, 0)) // 8960
//  console.log(priceWithMonthlyDiscount(16, 130, 0.15)) //14528
//  console.log(priceWithMonthlyDiscount(29.654321, 220, 0.112)) //46347
 console.log(priceWithMonthlyDiscount(89, 230, 0.42)) //27467


