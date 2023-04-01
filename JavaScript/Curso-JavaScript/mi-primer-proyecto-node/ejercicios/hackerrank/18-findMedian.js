function findMedian(arr){
    arr.sort(function(a, b) {
        return a - b;
      });
    
      var middleIndex = Math.floor(arr.length / 2);
    
      if (arr.length % 2 === 0) {
        return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
      } else {
        return arr[middleIndex];
      }
}

findMedian([0, 1, 2, 3, 4, 5, 6])