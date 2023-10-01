const pantalla = document.getElementById("pantalla"),
    reglamento = document.getElementById("reglamento"),
    opciones = document.getElementById("opciones"),
    indicacionInicial = document.getElementById("indicacionInicial"),
    visuales = document.getElementById("interfazGeneral"),
    atrasButton = document.getElementById("atras");
let ganador;

export function interfazFc(cont, nombre) {
    switch (cont) {

        case 0:  //Reglamento
            atrasButton.style.display = "none";
            reglamento.style.display = "block";
            document.getElementById("bienvenida").style.display = "none";
            document.getElementById("finDelJuego").style.display = "none";
            break;

        case 1:  //Interfaz General - Inicio     
            reglamento.style.display = "none";
            opciones.style.display = "flex";
            indicacionInicial.style.display = "block";
            atrasButton.style.display = "block";
            break;

        case 2:    //Pantalla - Racha
            indicacionInicial.style.display = "none";

            document.getElementById("racha").style.display = "flex";
            visuales.style.display = "grid";
            break;

        case 5:   //Jugar de nuevo?
            document.getElementById("tablero").style.display = "none";
            document.getElementById("racha").style.display = "none";
            document.getElementById("pantalla").style.display = "block";
            document.getElementById("fire").style.display = "none";
            document.getElementById("KO").style.display = "none";
            document.getElementById("finDelJuego").style.display = "flex";
            opciones.style.display = "none";
            break;

        case 6:   //Fin del juego.
            document.getElementById("finDelJuego").style.display = "none";
            document.getElementById("elegiste").innerText = "Gracias por jugar " + nombre + ", hasta pronto";
            break;
        case 7:
            document.getElementById("finDelJuego").style.display = "none";
            document.getElementById("tablero").style.display = "block";
            document.getElementById("racha").style.display = "block";
            document.getElementById("fire").style.display = "block";
            document.getElementById("KO").style.display = "block";
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

