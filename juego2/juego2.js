import { interfazFc, maquinaFc, tableroFc, puntoFc } from "./Funciones/Funciones.js";
let ocultarinterfaz = interfazFc,
    eleccionmaquina = maquinaFc,
    cargartablero = tableroFc,
    punto = puntoFc;
let racha = 0,
    puntaje = 0,
    puntajeIA = 0;

const bienvenidainicial = document.getElementById("bienvenida");
bienvenidainicial.addEventListener("submit", function funcion(event) {
    event.preventDefault();
    let puntaje = 0,
        puntajeIA = 0,
        cont = 0;
    var nombre = document.getElementById("ingresonombre").value || "Player 1";

    ocultarinterfaz(cont);
    cargartablero(puntaje, puntajeIA, cont, nombre);
    iniciar();
}, { once: true })

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
        document.getElementById("puntousuario").innerText = nombre + " sumas " + marcador;
        document.getElementById("puntoIA").innerText = "I.A. suma " + marcadorIA;
        let puntoactualstr = document.getElementById("infoguardada").textContent;
        let puntoactual = Math.floor(puntoactualstr);

        if (puntoactual == 0) {
            racha += 1;
            puntajeIA = (puntajeIA + 1);
            puntaje = (puntaje + 1);
        } else if (puntoactual == 1) {
            puntaje = (puntaje + 1);
            racha +=1;
        } else {
            racha = 0;
            puntajeIA = (puntajeIA + 1);
        }
        if(racha>=3){
            cont = 3;
            ocultarinterfaz(cont);
        }else if(racha>=7){
            cont = 4;
            ocultarinterfaz(cont);
        }
        let empate = "Suman los dos";
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
            let ganadorpunto = Math.floor(ganadorpuntoStr);
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
            }else if (contadorpantalla == 3) {
                clearInterval(intervalo);
            }
        }
        setTimeout(() => {
            cont = 2;
            cargartablero(puntaje, puntajeIA, cont)
            document.getElementById("rachaactual").innerText = racha;
        }, 1000);
        var intervalo = setInterval(buclepantalla, 500);
    })
})

function iniciar() {
    const Botoninicial = document.getElementById("Botoninicial");
    Botoninicial.addEventListener("click", function funcion(event) {
        document.getElementById("rachaactual").textContent = 0;
        let puntaje = 0,
            puntajeIA = 0,
            cont = 1;
        cargartablero(puntaje, puntajeIA, cont);
        ocultarinterfaz(cont);
    }, { once: true })
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
