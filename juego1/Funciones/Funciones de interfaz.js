function interfazFc(cont) {
    //Reglamento
    if (cont == 0) {
        document.querySelector(".pantalla").style.visibility = "hidden";
        document.getElementById("reglamento").style.display = "block";
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("findeljuego").style.display = "none";
        //Interfaz General - Inicio        
    } else if (cont == 1) {
        document.getElementById("reglamento").style.display = "none";
        document.getElementById("tablero").style.display = "block";
        document.getElementById("tablero").style.visibility = "visible";
        document.getElementById("idbotones").style.display = "block";
        document.getElementById("indicacioninicial").style.display = "block";
        //Pantalla - Racha
    } else if (cont == 2) {
        document.querySelector(".pantalla").style.visibility = "visible";
        document.getElementById("rachaactual").style.display = "block";
        document.getElementById("racha1").style.display = "block";
        document.getElementById("indicacioninicial").style.display = "none";
        //Boost fire
    } else if (cont == 3) {
        document.getElementById("fire").style.visibility = "visible";
        document.getElementById("fire").style.display = "block";
        //Boost KO
    } else if (cont == 4) {
        document.getElementById("KO").style.display = "block";
        //Jugar de nuevo?
    } else if (cont == 5) {
        document.getElementById("tablero").style.visibility = "hidden";
        document.getElementById("idbotones").style.display = "none";
        document.getElementById("rachaactual").style.display = "none";
        document.getElementById("racha1").style.display = "none";
        document.getElementById("mensaje").style.display = "block";
        //document.getElementById("fire").style.visibility = "hidden";
        document.getElementById("fire").style.display = "none";
        document.getElementById("KO").style.display = "none";
        document.getElementById("findeljuego").style.display = "block";
        //Fin del juego.
    } else if (cont == 6) {
        document.getElementById("mensaje").style.display = "none";
        let nombre = document.getElementById("celdanombre").textContent;
        document.getElementById("findeljuego").style.display = "none";
        document.getElementById("elegiste").style.display = "block";
        document.getElementById("elegiste").textContent = "Gracias por jugar " + nombre + ", hasta pronto";
    }
}
export{interfazFc}
