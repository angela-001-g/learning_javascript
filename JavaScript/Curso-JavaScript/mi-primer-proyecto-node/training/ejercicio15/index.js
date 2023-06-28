let nombre = "Angela";
let apellido = "Marroquin"; 

const nombreCompleto = {
    nombre,
    apellido
}

localStorage.setItem("persona", JSON.stringify(nombreCompleto)) //Guardado en el localStorage
sessionStorage.setItem("persona",JSON.stringify(nombreCompleto)) //Guardado en el sessionStorage

document.cookie = "caducidad=nombreColmpleto;expires" + new Date(2023, 5, 28, 4, 50)



