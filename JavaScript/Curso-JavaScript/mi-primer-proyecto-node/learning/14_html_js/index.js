const a = 4; 
const b = 8; 

console.log(4*8)
console.log("hola")
const p = document.getElementById("parrafo") //Para acceder desde este documento al parrafo que está en el html
console.log(p) // No se va a ejecutar por que se guarda el caché, y el orden en el que puse el script en html afecta esto
                // Si en la consola de la web p = null es porque no se ha definido en el scrípt html, debe estar en el head
                // Si se ejecuta en la consola es porque pusiste el script luego de definir la etiqueta "parrafo"




