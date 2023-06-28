// localStorage.setItem("Nombre", "Angela")
// localStorage.setItem("Nombre", "Nicolás") //Si le pongo la misma llave me pone el ultimo valor que esté en el código, pondrá Nicolás en este caso

// console.log(localStorage.getItem("Nombre"))

// localStorage.setItem("persona",JSON.stringify({nombre: "Angela", edad: 22}))

// console.log(JSON.parse(localStorage.getItem("persona")))

// localStorage.removeItem("Nombre")

//Cookies: 
document.cookie = "nombreCookie=AngelaCookie"
document.cookie = "nombreCaducidad=Nombre;expires" + new Date(2024, 0, 1).toUTCString()
console.log(document.cookie)