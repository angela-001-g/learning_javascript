const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando el parrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging") //Le añade a la etiqueta, cuando sucede el ebento, la class ="dragging"
        event.dataTransfer.setData("id", parrafo.id)
        const elementoFantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elementoFantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging") //Quita la clase que se le puso en el add y quita la opacidad puesta en el css
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener("dragover", event =>{
        event.preventDefault()
        console.log("Drag Over")
        event.dataTransfer.dropEffect = "link"
    })
    seccion.addEventListener("drop", event =>{
        console.log("drop")
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("parrafo_id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})