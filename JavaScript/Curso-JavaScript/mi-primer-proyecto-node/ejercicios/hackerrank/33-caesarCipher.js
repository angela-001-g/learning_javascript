function caesarCipher(s, k) {
    let nonModAlphabet =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let alphabet =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let objAlphabet = {} 
    let sModif = [];

    let minusculas = s.toLowerCase()
    while(k>26){
        k -= 26
       }
    let tajada = alphabet.slice(0, k)
    alphabet.splice(0, k)

    for(let i = 0; i<tajada.length; i++){
        alphabet.push(tajada[i])
    }
    let newAlphabet = alphabet
  
    for(let i = 0; i<newAlphabet.length; i++){
        objAlphabet[nonModAlphabet[i]] = newAlphabet[i]
    }
   minusculas.split('')
   for(let i = 0; i<minusculas.length; i++){
    if(objAlphabet[minusculas[i]] === undefined){
        sModif.push(minusculas[i])
    } else {
        sModif.push(objAlphabet[minusculas[i]])
    }
   }
   let spliteado = s.split('')
   for (let i = 0; i < spliteado.length; i++) {
    if (spliteado[i] === spliteado[i].toUpperCase()) {
      sModif = sModif.substring(0, i) + sModif[i].toUpperCase() + sModif.substring(i + 1);
    }
  }
  console.log(sModif)
}
caesarCipher("There's-a-starman-waiting-in-the-sky", 3)