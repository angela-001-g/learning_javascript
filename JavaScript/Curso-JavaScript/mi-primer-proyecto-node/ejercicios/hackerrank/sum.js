function simpleArraySum(ar){
   let suma = 0
   ar.forEach(element => {
        suma += element
   }) 
   return suma
}


console.log(simpleArraySum([ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]))