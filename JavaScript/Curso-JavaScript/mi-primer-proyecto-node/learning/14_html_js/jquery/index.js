//Este doc lo usaremos para crear con la pagina 
//$(selector).accion()
// $("li").hide()
// $("#el-1").hide() El # para hacer referencia al id de una etiqueta 

//La siguiente es la forma encapsulada
// $(()=>{
//     $("h1").hide()
// })

//Es lo mismo encapsular como arriba o como sigue: 
// $(document).ready(()=>{

// })
// Lo siguiente me parece que se ve más bonito con fadeOut y fadeIn
$(()=>{
    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        console.log("Mostrando...")
        // $("h1").show()
        $("h1").fadeIn()
    })
    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })
})