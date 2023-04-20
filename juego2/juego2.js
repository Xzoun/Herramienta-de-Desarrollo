let racha = 0;
let puntaje = 0;
let puntajeIA = 0;
const bienvenidainicial = document.getElementById("bienvenida");
bienvenidainicial.addEventListener("submit", function funcion(event) {
    event.preventDefault();
    let puntaje = 0;
    let puntajeIA = 0;
    var nombre = document.getElementById("ingresonombre").value || "JUGADOR";
    let cont = 0;
    ocultarinterfaz(cont);
    cargartablero(puntaje, puntajeIA, cont, nombre);
    iniciar();
}, { once: true })
function iniciar() {
    const Botoninicial = document.getElementById("Botoninicial");
    Botoninicial.addEventListener("click", function funcion(event) {
        document.getElementById("rachaactual").textContent = 0;
        let puntaje = 0;
        let puntajeIA = 0;
        let cont = 1;
        cargartablero(puntaje, puntajeIA, cont);
        ocultarinterfaz(cont);
    }, { once: true })
}
let KOactivado = false;
let fireactivado = false;
const idbotones = document.getElementById("idbotones");
idbotones.childNodes.forEach((eleccion) => {
    eleccion.addEventListener("click", (e) => {
        document.getElementById("mensaje").textContent = e.target.value;
        let cont = 2;
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("elegiste").style.display = "block";
        ocultarinterfaz(cont);
        let contadorpantalla = 0;
        let { maquina } = eleccionmaquina();
        document.getElementById("mensajeIA").innerText = maquina;
        let player = document.getElementById("mensaje").innerText;
        let nombre = document.getElementById("celdanombre").innerText;
        let { marcador, marcadorIA } = punto(player, maquina);
        let puntousuario = document.getElementById("puntousuario").innerText = nombre + " sumas " + marcador;
        document.getElementById("puntoIA").innerText = "I.A. suma " + marcadorIA;
        let puntoactualstr = document.getElementById("infoguardada").textContent;
        let puntoactual = Math.floor(puntoactualstr);

        if (puntoactual == 0) {
            puntajeIA = (puntajeIA + 1);
            puntaje = (puntaje + 1);
        } else if (puntoactual == 1) {
            puntaje = (puntaje + 1);
        } else {
            puntajeIA = (puntajeIA + 1);
        }
        cont = 1;
        aparecerboost();
        let empate = "Suman los dos";
        let contadorprueba = 0;
        const firebutton = document.getElementById("fire");
        firebutton.addEventListener("click", function (event) {
            console.log("estoy on fire");
            fireactivado = true
            document.getElementById("mensaje").innerText = "Fire in the hole!";
            document.getElementById("mensaje").style.display = "block";
        }, { once: true });
        if (fireactivado == true) {
            document.getElementById("mensaje").textContent = e.target.value;
            let ganadorpuntoStr = document.getElementById("infoguardada").innerText;
            ganadorpunto = Math.floor(ganadorpuntoStr);
            if (ganadorpunto < 0) {
                document.getElementById("puntoIA").innerText = "Fallaste, restas 2!";
                fireactivado = false;
                puntaje = puntaje - 2;
            } else if (ganadorpunto == 0) {
                empate = "Empate, sumas 3";
                fireactivado = false;
                puntaje = puntaje + 2;
                puntajeIA = puntajeIA - 1;
            } else if (ganadorpunto > 0) {
                document.getElementById("puntousuario").innerText = "Excelente, sumas 3";
                fireactivado = false;
                puntaje = puntaje + 2;
            }
        }
        const KObutton = document.getElementById("KO");
        KObutton.addEventListener("click", function (event) {
            document.getElementById("mensaje").innerText = " Victoria por Knock Out!";
            document.getElementById("mensaje").style.display = "block";
            setTimeout(() => {
                findeljuego()
            }, 300);
        }, { once: true });

        if (puntaje >= 10 && puntajeIA >= 10) {
            setTimeout(() => {
                findeljuego(),
                    document.getElementById("mensaje").innerText = nombre + ", fue un empate..."
            }, 1550);
        } else if (puntaje >= 10 && puntajeIA >= 10) {
            setTimeout(() => {
                findeljuego(),
                    document.getElementById("mensaje").innerText = nombre + ", fue un empate..."
            }, 1550);
        } else if (puntaje < 10 && puntajeIA >= 10) {
            setTimeout(() => {
                findeljuego(),
                    document.getElementById("mensaje").innerText = nombre + ", Perdiste :("
            }, 1550);
        } else if (puntaje >= 10 && puntajeIA < 10) {
            setTimeout(() => {
                findeljuego(),
                    document.getElementById("mensaje").innerText = nombre + ", Ganaste! :D"
            }, 1550);
        }

        var buclepantalla = function pantalla() {
            document.getElementById("mensajeIA").style.display = "none";
            document.getElementById("eligioIA").style.display = "none";
            document.getElementById("puntoIA").style.display = "none";
            document.getElementById("puntousuario").style.display = "none";
            contadorpantalla++;
            if (contadorpantalla == 1) {
                document.getElementById("mensaje").style.display = "none";
                document.getElementById("elegiste").style.display = "none";
                document.getElementById("mensajeIA").style.display = "block";
                document.getElementById("eligioIA").style.display = "block";
            } else if (contadorpantalla == 2) {
                let punto = document.getElementById("infoguardada").innerText;
                if (punto == 1) {
                    document.getElementById("puntousuario").style.display = "block";
                } else if (punto == 0) {
                    document.getElementById("puntoIA").innerText = empate;
                    document.getElementById("puntoIA").style.display = "block";
                } else if (punto == -1) {
                    document.getElementById("puntoIA").style.display = "block";
                }
            }
            if (contadorpantalla == 3) {
                clearInterval(intervalo);
            }
        }
        setTimeout(() => {
            cont = 2;
            cargartablero(puntaje, puntajeIA, cont)
        }, 1000);
        var intervalo = setInterval(buclepantalla, 500);
    })
})
function ocultarinterfaz(cont) {
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
function aparecerboost() {
    let condicionalracha = document.getElementById("infoguardada").textContent;
    if (condicionalracha == "-1") {
        racha = 0;
        setTimeout(() => {                        
            document.getElementById("fire").style.display = "none";
        }, 1000);
    } else if (condicionalracha == "0" || condicionalracha == "1"){
        racha = racha + 1;  
       
    }
    setTimeout(() => {
        document.getElementById("rachaactual").textContent = racha;                         
    }, 1000);
   
    if (racha > "2") {
        let cont = 3;
        ocultarinterfaz(cont);
    }
    if (racha > "6") {
        let cont = 4;
        ocultarinterfaz(cont);
    }
}
function cargartablero(puntaje, puntajeIA, cont, nombre) {
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
function eleccionmaquina() {
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
function punto(player, maquina) {
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
function findeljuego() {
    const reinicio = document.getElementById("sino");
    reinicio.childNodes.forEach((eleccion) => {
        let cont = 5;
        ocultarinterfaz(cont);
        eleccion.addEventListener("click", (e) => {
            let respuesta = e.target.value;
            if (respuesta == "si") {
                puntaje = 0;
                puntajeIA = 0;
                cont = 0;
                ocultarinterfaz(cont);
                iniciar();
            } else if (respuesta == "no") {
                cont = 6;
                ocultarinterfaz(cont);
            }
        }, { once: true })
    })
} 
