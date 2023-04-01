function lonelyinteger(a){
    a.sort(function(a, b){
        return a - b
    })
    for(let i = 0; i<a.length; i++){
        if(a[i] !== a[i + 1] && a[i] !== a[i -1] ){
            return a[i]
        }
    }

}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])