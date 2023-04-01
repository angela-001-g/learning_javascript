function pangrams(s){       
    const alphabet = {a: 0, b: 0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0, k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0, w:0, x:0, y:0, z:0}
    const sinEspacios = s.replaceAll(' ', '')
    const arrayOfString = sinEspacios.toLowerCase().split('')
    for(let i = 0; i < arrayOfString.length; i++){
        alphabet[arrayOfString[i]] += 1
    }
    let values = Object.values(alphabet)

    const result = values.every((element) => element !== 0 )
    if(result === false){
        return "not pangram"
    } else {
        return "pangram"
    }
}
console.log(pangrams("We promptly judged antique ivory buckles for the prize"))