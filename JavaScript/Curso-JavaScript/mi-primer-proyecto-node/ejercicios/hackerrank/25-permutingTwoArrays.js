function twoArrays (k, A, B){
let sumas = []
A.sort(function(a, b){
    return a - b
})
B.sort(function(a, b){
    return b - a 
})
for(let i = 0; i<A.length; i++){
    let sum = A[i] + B[i]
    sumas.push(sum)
}
const resultado = sumas.every((element) => element >= k)
if(resultado === true){
    return "YES"
} else {
    return "NO"
}
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])) //YES