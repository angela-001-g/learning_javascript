// - La fecha de hoy
const hoy = new Date()
console.log(hoy);

// - La fecha de tu nacimiento
const nacimiento = new Date("June 30, 2001 14:30:00")
console.log(nacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let tarde = hoy.getTime() > nacimiento.getTime()
console.log(tarde);

// - Una variable que contenga el día de tu nacimiento
let dia = nacimiento.getDate()
console.log(dia);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let mes = nacimiento.getMonth() + 1 
console.log(mes)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let anyo = nacimiento.getFullYear()
console.log(anyo)