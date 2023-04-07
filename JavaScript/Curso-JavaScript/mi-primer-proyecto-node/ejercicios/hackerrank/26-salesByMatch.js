function sockMerchant(n, ar){
let numeros = {}

for(let i = 0; i<ar.length; i++){
    !numeros[ar[i]] ? numeros[ar[i]] = 1 : numeros[ar[i]] += 1
}
let objectValues = Object.values(numeros)
let sum = 0
objectValues.forEach(value => sum += value%2 === 0 ?  value : (value-1))
let pairs = sum/2
return pairs
}
sockMerchant(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5])