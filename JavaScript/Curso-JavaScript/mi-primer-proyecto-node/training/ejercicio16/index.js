const piezas = document.querySelector("#cuadricula-piezas")

piezas.forEach(pieza => {
    pieza.addEventListener("dragstart", () => {
        console.log("esto arrastrando una ficha")
    })
})




