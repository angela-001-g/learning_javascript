// const boton = document.getElementById("btn")
// La linea anterior y la siguiente permiten acceder de la misma manera al botón 
const boton = document.querySelector("#btn")
const boton2 = document.querySelector("#btn-2")
const botonInfo = document.querySelector("#info")
console.log(boton)

boton.addEventListener("click", () => {
    alert("Has hecho click :))")
})
boton2.addEventListener("click", () => {
    confirm("¿Estás de acuerdo?") ? console.log("OK") : console.log("NOPITI")
})

botonInfo.addEventListener("click", ()=>{
    const nombre = prompt("¿Cuál es tu nombre?")
    if(nombre){
        console.log("tu nombre es " + nombre)
    } else {
        console.log("No has introducido nada")
    }
})

const lista = [{
    nombre: "Angela", 
    edad: 22
},{
    nombre: "Nicolas", 
    edad: 23
},{
    nombre: "Daniel",
    edad: 8
}]

console.table(lista)
