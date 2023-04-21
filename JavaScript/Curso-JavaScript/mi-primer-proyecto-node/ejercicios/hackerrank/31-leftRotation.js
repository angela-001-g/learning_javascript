function rotateLeft(d, arr){
    let tajada = arr.slice(0, d)
    arr.splice(0, d)
    for(let i = 0; i<tajada.length; i++){
        arr.push(tajada[i])
    }
    return arr
}

console.log(rotateLeft(3, [1, 2, 3, 4, 5]))