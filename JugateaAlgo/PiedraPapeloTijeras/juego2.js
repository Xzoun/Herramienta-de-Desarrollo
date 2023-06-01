// ----------------------- Import || Funciones -----------------------

import {
    interfazFc,
    maquinaFc,
    puntoFc
} from "./Funciones/Funciones.js";

let cambiarInterfaz = interfazFc,
    eleccionMaquina = maquinaFc,
    punto = puntoFc;

// ----------------------- Variables -----------------------
//html
var nombre = document.getElementById("celdanombre").innerText,
    puntoActual = document.getElementById("punto"),
    elegiste = document.getElementById("elegiste"),
    eligioIA = document.getElementById("eligioIA");

// juego
var eleccion,
    ganadorPunto;

// boost
var racha = 0,
    contadorPantalla,
    fireActive = false

// Marcador
var puntaje = 0,
    puntajeIA = 0,
    cont;

const opciones = document.getElementById("opciones");

// ----------------------- Interfaz Inicial -----------------------

document.getElementById("bienvenida").addEventListener("submit", (e) => {
    e.preventDefault();

    var nombre = document.getElementById("ingresonombre").value || "Player 1";
    document.getElementById("celdanombre").textContent = nombre;

    cont = 0;
    cambiarInterfaz(cont);

}, { once: true })

document.getElementById("botonInicial").addEventListener("click", () => {

    let cont = 1;
    cambiarInterfaz(cont);

}, { once: true })

// ----------------------- Juego -----------------------

opciones.addEventListener("click", (e) => {

    // ----------------------- Juego || Boost -----------------------   

    document.getElementById("fire").addEventListener("click", function (event) {
        fireActive = true;
        puntoActual.innerText = "Fire in the hole!";
        puntoActual.style.display = "block";
    }, { once: true });


    document.getElementById("KO").addEventListener("click", function (event) {
        puntoActual.innerText = " Victoria por Knock Out!";
        puntoActual.style.display = "block";
        setTimeout(() => {
            findeljuego()
        }, 300);
    }, { once: true });

    // ----------------------- Juego -----------------------

    contadorPantalla = 0;

    cont = 2;
    cambiarInterfaz(cont);
    eleccion = e.target.innerText;

    let { maquina } = eleccionMaquina();
    console.log(eleccion)
    document.getElementById("eleccionIAPantalla").innerText = maquina;
    document.getElementById("eleccionPantalla").innerText = eleccion;

    ganadorPunto = punto(eleccion, maquina);

    if (racha >= 3 && fireActive) {
        switch (ganadorPunto) {
            case -1:
                racha = 0;
                puntaje -= 2;
                puntajeIA++;

                puntoActual.innerText = " Fallaste. Restas 2 puntos.\n I.A. Suma 1 punto."
                break;
            case 0:
                racha++;
                puntaje += 3;
                puntoActual.innerText = " Empate. Sumas 3 puntos."
                break;
            case 1:
                racha++;
                puntaje += 3;
                puntoActual.innerText = " Acertaste! Sumas 3 puntos."
                break;
        }
    } else {
        switch (ganadorPunto) {
            case -1:
                racha = 0;
                puntajeIA++;
                puntoActual.innerText = " I.A. Suma 1 punto."
                break;
            case 0:
                racha++;
                puntaje++;
                puntajeIA++;
                puntoActual.innerText = " Empate. Sumas 1 punto."
                break;
            case 1:
                racha++;
                puntaje++;
                puntoActual.innerText = "Sumas 1 punto."
                break;
        }

        if (racha >= 3) {
            cont = 3;
            if (racha >= 7) {
                cont = 4;
            }
        } else {
            cont = 2
            fireActive = false;
        }

        cambiarInterfaz(cont);
    }

    // ----------------------- Tablero -----------------------

    setTimeout(() => {
        document.getElementById("celdaMarcador").innerText = puntaje;
        document.getElementById("celdaMarcadorIA").innerText = puntajeIA;
    }, 1500);

    // ----------------------- Pantalla -----------------------

    puntoActual.style.display = "none";
    elegiste.style.display = "block";

    var buclepantalla = function pantalla() {
        elegiste.style.display = "none";
        eligioIA.style.display = "none";

        contadorPantalla++;
        if (contadorPantalla == 1) {
            elegiste.style.display = "none";
            eligioIA.style.display = "block";
        } else if (contadorPantalla == 2) {
            puntoActual.style.display = "block";
        } else if (contadorPantalla == 3) {
            puntoActual.style.display = "none";
            clearInterval(intervalo);
        }
    }
    var intervalo = setInterval(buclepantalla, 1000);

    // ----------------------- Ganador -----------------------

    if (puntaje >= 10 && puntajeIA >= 10) {
        setTimeout(() => {
            findeljuego(),
                eleccionPantalla.innerText = nombre + ", fue un empate..."
        }, 1550);
    } else if (puntaje >= 10 && puntajeIA >= 10) {
        setTimeout(() => {
            findeljuego(),
                eleccionPantalla.innerText = nombre + ", fue un empate..."
        }, 1550);
    } else if (puntaje < 10 && puntajeIA >= 10) {
        setTimeout(() => {
            findeljuego(),
                eleccionPantalla.innerText = nombre + ", Perdiste :("
        }, 1550);
    } else if (puntaje >= 10 && puntajeIA < 10) {
        setTimeout(() => {
            findeljuego(),
                eleccionPantalla.innerText = nombre + ", Ganaste! :D"
        }, 1550);
    }

    setTimeout(() => {
        cont = 2;
        // cargartablero(puntaje, puntajeIA, cont)
        document.getElementById("rachaactual").innerText = racha;
    }, 1000);
})

function findeljuego() {
    const reinicio = document.getElementById("sino");
    reinicio.childNodes.forEach((eleccion) => {
        let cont = 5;
        cambiarInterfaz(cont);
        eleccion.addEventListener("click", (e) => {
            let respuesta = e.target.value;
            if (respuesta == "si") {
                puntaje = 0;
                puntajeIA = 0;
                cont = 0;
                cambiarInterfaz(cont);
            } else if (respuesta == "no") {
                cont = 6;
                cambiarInterfaz(cont);
            }
        }, { once: true })
    })
}
