function miniMaxSum(arr){
   let suma = 0;
   let finalSum = [];
   arr.forEach(item => {
    suma = suma + item
   })
   for(let i = 0; i<arr.length; i++){
    finalSum[i] = suma - arr[i]
   }
   let minNum = Math.min(...finalSum)
   let maxNum =  Math.max(...finalSum)
   console.log(`${minNum} ${maxNum}`)
}

miniMaxSum([1, 2, 3, 4, 5])