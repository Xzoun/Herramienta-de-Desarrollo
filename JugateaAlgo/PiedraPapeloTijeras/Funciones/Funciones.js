var pantalla = document.getElementById("pantalla"),
    reglamento = document.getElementById("reglamento"),
    opciones = document.getElementById("opciones"),
    indicacionInicial =  document.getElementById("indicacionInicial"),
    ganador;

export function interfazFc(cont) {
    switch (cont) {

        case 0:  //Reglamento
            document.getElementById("atras").style.display = "none";
            reglamento.style.display = "block";
            document.getElementById("bienvenida").style.display = "none";
            document.getElementById("findeljuego").style.display = "none";
            break;

        case 1:  //Interfaz General - Inicio     
            reglamento.style.display = "none";
            opciones.style.display = "flex";
            indicacionInicial.style.display = "block";
            document.getElementById("atras").style.display = "block";
            break;

        case 2:    //Pantalla - Racha
            pantalla.style.display = "block";
            indicacionInicial.style.display = "none";
            document.getElementById("tablero").style.display = "block";
            document.getElementById("tablero").style.visibility = "visible";
            document.getElementById("racha").style.display = "block";
            
            document.getElementById("fire").style.display = "none";
            document.getElementById("KO").style.display = "none";
            break;

        case 3:    //Boost fire
            document.getElementById("fire").style.display = "block";
            break;

        case 4:   //Boost KO
            document.getElementById("KO").style.display = "block";
            break;

        case 5:   //Jugar de nuevo?
            document.getElementById("tablero").style.display = "none";            
            document.getElementById("racha").style.display = "none";
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("fire").style.display = "none";
            document.getElementById("KO").style.display = "none";
            document.getElementById("findeljuego").style.display = "block";
            pantalla.style.display = "none";
            opciones.style.display = "none";
            break;

        case 6:   //Fin del juego.
            document.getElementById("mensaje").style.display = "none";
            let nombre = document.getElementById("celdanombre").textContent;
            document.getElementById("findeljuego").style.display = "none";
            document.getElementById("elegiste").style.display = "block";
            document.getElementById("elegiste").textContent = "Gracias por jugar " + nombre + ", hasta pronto";
            break;
    }
}

export function maquinaFc() {
    let IA = Math.round(Math.random() * 2);
    let maquina = "";
    if (IA == 0) {
        maquina = "Piedra";
    } else if (IA == 1) {
        maquina = "Papel";
    } else if (IA == 2) {
        maquina = "Tijera";
    }
    return {
        maquina
    }
}

export function puntoFc(player, maquina) {

    if (player == maquina) {
        ganador = 0;
    } else if (player == "Piedra" && maquina == "Tijera") {
        ganador = 1;
    } else if (player == "Tijera" && maquina == "Papel") {
        ganador = 1;
    } else if (player == "Papel" && maquina == "Piedra") {
        ganador = 1;
    } else {
        ganador = -1;
    }

    return ganador

}

