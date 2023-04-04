function marsExploration(s){
let newString = []
let primero = []
let segundo = []
let tercero = []
let contador = 0;
for(let i = 0; i<s.length; i+=3){
    let subArray = s.slice(i, i+3)
    newString.push(subArray)
}
for(let i = 0; i<newString.length; i++){
   let separado = newString[i].split('')
    primero.push(separado[0])
    segundo.push(separado[1])
    tercero.push(separado[2])
}
for(let i = 0; i<primero.length; i++){
    if(primero[i] !== "S"){
        contador +=1
    }
}
for(let i = 0; i<segundo.length; i++){
    if(segundo[i] !== "O" ){
        contador+=1
    }
}
for(let i = 0; i<tercero.length; i++){
    if(tercero[i] !== "S"){
        contador += 1
    }
}
return contador
}
console.log(marsExploration("OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS")) //20