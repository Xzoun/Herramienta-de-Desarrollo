export function interfazFc(cont=0) {
    //Elegir modo de juego
   
        document.getElementById("indicacionInicial").style.display = "block"
        document.getElementById("bienvenida").style.display = "none"
        //Interfaz General - Inicio        
    // if (cont == 1) {
    //     document.getElementById("juegoCanvas").style.display = "block"
    //     document.getElementById("racha").style.display = "block"
    //     document.getElementById("mododejuegobotones").style.display = "none"
    //     document.getElementById("findeljuego").style.display = "none"
    //     //reglamento
    // } else if (cont == 2) {



    //     //Fin del juego
    // } else if (cont == 3) {
    //     document.getElementById("racha").style.display = "block"
    //     document.getElementById("findeljuego").style.display = "block"
    //     document.getElementById("juegoCanvas").style.display = "none"
    //     document.getElementById("pantalla").style.display = "none"
    //     document.getElementById("vida").style.display = "none"
        
    // } else if (cont == 4) {
    //     let nombre = document.getElementById("nombre").innerText || "Player 1";
    //     document.getElementById("despedida").style.display = "block"
    //     document.getElementById("despedida").innerText = "Gracias por jugar " + nombre + ", hasta pronto!"
    //     document.getElementById("findeljuego").style.display = "none"
    //     document.getElementById("juegoCanvas").style.display = "none"
    //}
}

export function findeljuego() {
    let cont = 3;
    interfazFc(cont);
    let no = document.getElementById("no");
           no.addEventListener("click",()=>{
            cont = 4;
            interfazFc(cont);           
},{once: true})
}

