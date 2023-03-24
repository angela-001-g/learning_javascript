function sparseArrays(strings, queries){
    let instances = []
    for(let i = 0; i < queries.length; i++){
        let contador = 0; 
        for(let j = 0; j < strings.length; j++){
            if(queries[i] === strings[j]){
                contador ++
            }
        }
        instances.push(contador)
    }
    return instances
}

console.log(sparseArrays(['ab', 'ab', 'abc'],['ab', 'abc', 'bc']))
// [2, 1, 0]