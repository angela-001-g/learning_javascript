function pageCount(n, p) {
    let flipPages = []
    let normalFlips = 0; 
    let reverseFlips = 0; 
    na = []
    for(let i = 1; i<= n; i++){
        na.push(i)
    }
    
    na.shift()
    for(let i = 0; i<na.length; i+=2){
        let twoPages = na.slice(i, i + 2)
        flipPages.push(twoPages)
    }
    
    let flipPagesReverse = [...flipPages].reverse()

    let objNormalPages = {};
    for (let i = 0; i < flipPages.length; i++) {
      objNormalPages[i+1] = flipPages[i];
    }
    let claves = Object.keys(objNormalPages)
    for(let i = 0; i< claves.length; i++){
        let clave = claves[i]
        let valor = objNormalPages[clave]
        for(let j = 0; j< valor.length; j++){
            if(valor[j] === p){
                normalFlips = clave 
            }
        }
    }

    let objFlipPagesReverse = {}
    for(let i = 0; i<flipPagesReverse.length; i++){
        objFlipPagesReverse[i+1] = flipPagesReverse[i]
    }
    let keysReverse = Object.keys(objFlipPagesReverse)
    for(let i = 0; i<keysReverse.length;i++){
        let keyU = keysReverse[i]
        let value = objFlipPagesReverse[keyU]
        for (let j = 0; j<value.length; j++){
            if(value[j] === p){
                reverseFlips = keyU - 1
            }
        }
    }
   
    if(normalFlips < reverseFlips){
        return normalFlips
    } else if( reverseFlips < normalFlips){
        return reverseFlips
    } else{
        return normalFlips
    } 
}

console.log(  (pageCount(6,2)))