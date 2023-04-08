function migratoryBirds(arr){
   let final = []
   let typesCounter = {}
 for(let i = 0; i<arr.length; i++){
    !typesCounter[arr[i]] ? typesCounter[arr[i]] = 1 : typesCounter[arr[i]] += 1
 }
 let llaves = Object.keys(typesCounter)
 let valores = Object.values(typesCounter)
 let mayor = Math.max(...valores) 
 for(let i = 0; i<llaves.length; i++){
   if(typesCounter[llaves[i]] === mayor){
      final.push(llaves[i])
   }
 }
return final[0]
}

console.log(migratoryBirds([1, 1, 2, 2, 3]))