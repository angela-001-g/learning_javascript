function kangaroo(x1, v1, x2, v2){
    const a = (x2 - x1)
    const b = (v1 - v2)

    console.log(a,b, a/b)
    let t = (x2 - x1) / (v1 - v2)
    if (v1-v2 === 0 || t < 0 || a%b !== 0 ){
       return "NO"
    } else {
        return 'YES'
    }
   }
console.log(kangaroo(21,6,47,3))
