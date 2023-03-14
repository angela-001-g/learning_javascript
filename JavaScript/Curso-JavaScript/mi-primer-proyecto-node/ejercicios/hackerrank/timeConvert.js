function timeConversion(s) {
    let horario = s.split(':')
    let hora = horario[0]
    let minutos = horario[1]
    let segundos = horario[2]
    let newSegundos = segundos.slice(0, 2)
    let amPm = segundos.slice(2, 4)
    let newFormat = 0

    if (amPm === "AM" && hora != "12") {
        newFormat = s.slice(0, 8)
        return newFormat
    } else if (hora === "12" && amPm === "AM") {
        hora = "00"
        newFormat = (`${hora}:${minutos}:${newSegundos}`)
        return newFormat
    } else if(hora === "12" && amPm === "PM" ) {
        hora = "12"
        newFormat = (`${hora}:${minutos}:${newSegundos}`)
        return newFormat
    } else if (amPm === 'PM') {
        hora = parseInt(hora)
        let newFormatHora = hora + 12;
        newFormat = (`${newFormatHora}:${minutos}:${newSegundos}`)
        return newFormat
    }

}
console.log(timeConversion("12:45:54PM"))