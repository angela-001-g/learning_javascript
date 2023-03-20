function processData(input){
    const arraySplitedByNewLine = input.split('\n')
    let newArray = []
    for(let i = 0; i < arraySplitedByNewLine.length; i++){
     let especial = []
    if(arraySplitedByNewLine[i][0] === "S" && arraySplitedByNewLine[i][2] === "M"){
        newArray = arraySplitedByNewLine[i].split('').slice(4)
        newArray.splice(-2,2)
        let newString = newArray.join('').replace(/([A-Z])/g, ' $1');
        let final = newString.toLowerCase()
        console.log(final)
    } else if(arraySplitedByNewLine[i][0] === "S" && (arraySplitedByNewLine[i][2] === "C" || arraySplitedByNewLine[i][2] === "V" )){
        newArray = arraySplitedByNewLine[i].split('').slice(4)
        let newString = newArray.join('').replace(/([A-Z])/g, ' $1');
        let final = newString.toLowerCase().trim()
        console.log(`${final}`)
    } else if(arraySplitedByNewLine[i][0] === "C" && arraySplitedByNewLine[i][2] === "M"){
        newArray = arraySplitedByNewLine[i].split(' ')
        for(let i = 0; i < newArray.length; i++){
            let palabra = newArray[i]
            let mayuscula = palabra[0].toUpperCase()
            const result = palabra.replace(palabra[0], mayuscula)
            especial.push(result)
        }
        let sinEspacios = especial.join('')
        let camelCase = sinEspacios.slice(4)
        let final = `${camelCase}()`
        console.log(final)
        
    } else if (arraySplitedByNewLine[i][0] === "C" && arraySplitedByNewLine[i][2] === "C"){
        newArray = arraySplitedByNewLine[i].slice(4).split(' ')
        for(let i = 0; i < newArray.length; i++){
            let palabra = newArray[i]
            let mayuscula = palabra[0].toUpperCase()
            const result = palabra.replace(palabra[0], mayuscula)
            especial.push(result)
        }
        let final = especial.join('')
        console.log(final)
    } else if (arraySplitedByNewLine[i][0] === "C" && arraySplitedByNewLine[i][2] === "V"){
        newArray = arraySplitedByNewLine[i].split(' ')
        for(let i = 0; i < newArray.length; i++){
            let palabra = newArray[i]
            let mayuscula = palabra[0].toUpperCase()
            const result = palabra.replace(palabra[0], mayuscula)
            especial.push(result)
        }
        let final = especial.join('').slice(4)
        console.log(final)
    }
 }
}

processData(`C;V;can of coke
S;M;sweatTea()
S;V;epsonPrinter
C;M;santa claus
C;C;mirror`)