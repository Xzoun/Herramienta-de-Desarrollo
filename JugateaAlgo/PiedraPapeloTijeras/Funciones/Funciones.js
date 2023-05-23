export function interfazFc(cont) {
    //Reglamento
    switch(cont){
    case 0:
        document.getElementById("atras").style.display = "none";
        document.querySelector(".pantalla").style.visibility = "hidden";
        document.getElementById("reglamento").style.display = "block";
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("findeljuego").style.display = "none";
        break;
        //Interfaz General - Inicio        
    case 1:
        document.getElementById("reglamento").style.display = "none";
        
        
        document.getElementById("idbotones").style.display = "block";
        document.getElementById("indicacioninicial").style.display = "block";
        document.getElementById("atras").style.display = "block";
        break;
        //Pantalla - Racha
    case 2:
        document.getElementById("tablero").style.display = "block";
        document.getElementById("tablero").style.visibility = "visible";
        document.querySelector(".pantalla").style.visibility = "visible";
        document.getElementById("racha").style.display = "block";
        document.getElementById("indicacioninicial").style.display = "none";
        document.getElementById("fire").style.display = "none";
        document.getElementById("KO").style.display = "none";
        break;
        //Boost fire
    case 3:
        document.getElementById("fire").style.visibility = "visible";
        document.getElementById("fire").style.display = "block";
        break;
        //Boost KO
    case 4:
        document.getElementById("KO").style.display = "block";
        break;
        //Jugar de nuevo?
    case 5:
        document.getElementById("tablero").style.visibility = "hidden";
        document.getElementById("idbotones").style.display = "none";
        document.getElementById("racha").style.display = "none";
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("fire").style.display = "none";
        document.getElementById("KO").style.display = "none";
        document.getElementById("findeljuego").style.display = "block";
        break;
        //Fin del juego.
    case 6:
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

export function tableroFc(puntaje, puntajeIA, cont, nombre) {
    let celdanombre = document.getElementById("celdanombre");
    let celdamarcador = document.getElementById("celdamarcador");
    let celdamarcadorIA = document.getElementById("celdamarcadorIA");
    if (cont == 0) {
        celdanombre.textContent = nombre;
        celdamarcador.textContent = puntaje;
        celdamarcadorIA.textContent = puntajeIA;
    } else {
        celdamarcador.textContent = puntaje;
        celdamarcadorIA.textContent = puntajeIA;
    }
}

export function puntoFc(player, maquina) {
    let marcador = 0;
    let marcadorIA = 0;
    if (player == maquina) {
        marcador += 1;
        marcadorIA += 1;
    } else if (player == "Piedra" && maquina == "Tijera") {
        marcador += 1;
    } else if (player == "Tijera" && maquina == "Papel") {
        marcador += 1;
    } else if (player == "Papel" && maquina == "Piedra") {
        marcador += 1;
    } else {
        marcadorIA += 1;
    }
    document.getElementById("infoguardada").innerText = marcador - marcadorIA;
    return {
        marcador,
        marcadorIA
    }
}

export function bienvenidaFc(){
    const bienvenidainicial = document.getElementById("bienvenida");
    bienvenidainicial.addEventListener("submit", function funcion(event) {
        event.preventDefault();
        let puntaje = 0,
            puntajeIA = 0,
            cont = 0;
        var nombre = document.getElementById("ingresonombre").value || "Player 1";
    
        interfazFc(cont);
        tableroFc(puntaje, puntajeIA, cont, nombre);
        iniciarFc();
    }, { once: true })
}

export function iniciarFc() {
    const Botoninicial = document.getElementById("Botoninicial");
    Botoninicial.addEventListener("click", function funcion(event) {
        document.getElementById("rachaactual").textContent = 0;
        let puntaje = 0,
            puntajeIA = 0,
            cont = 1;
        tableroFc(puntaje, puntajeIA, cont);
        interfazFc(cont);
    }, { once: true })
}
