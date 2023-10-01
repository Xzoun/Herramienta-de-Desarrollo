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
const puntoActual = document.getElementById("punto"),
    elegiste = document.getElementById("elegiste"),
    eligioIA = document.getElementById("eligioIA"),
    fireButton = document.getElementById("fire"),
    KOButton = document.getElementById("KO"),
    opciones = document.getElementById("opciones");

// juego

let eleccion,
    ganadorPunto;

// boost
let racha = 0,
    contadorPantalla,
    fireActive = false

// Marcador
let puntaje = 0,
    puntajeIA = 0,
    nombre,
    cont;

// ----------------------- Interfaz Inicial -----------------------

document.getElementById("bienvenida").addEventListener("submit", (e) => {
    e.preventDefault();

    nombre = document.getElementById("ingresoNombre").value || "Player 1";
    document.getElementById("celdaNombre").textContent = nombre;

    cambiarInterfaz(0);

}, { once: true })

document.getElementById("botonInicial").addEventListener("click", () => {

    cambiarInterfaz(1);

})

// ----------------------- Juego -----------------------

opciones.addEventListener("click", (e) => {

    // ----------------------- Juego || Boost -----------------------   

    fireButton.addEventListener("click", function (event) {
        fireActive = true;
        puntoActual.innerText = "Fire in the hole!";
        puntoActual.style.display = "block";

    });


    KOButton.addEventListener("click", function (event) {
        puntoActual.innerText = " Victoria por Knock Out!";
        puntoActual.style.display = "block";
        setTimeout(() => {
            findeljuego()
        }, 300);
    });

    // ----------------------- Juego -----------------------

    contadorPantalla = 0;

    cambiarInterfaz(2);
    eleccion = e.target.innerText;

    let { maquina } = eleccionMaquina();

    document.getElementById("eleccionIAPantalla").innerText = maquina;
    document.getElementById("eleccionPantalla").innerText = eleccion;

    ganadorPunto = punto(eleccion, maquina);

    if (racha >= 3 && fireActive) {
        switch (ganadorPunto) {
            case -1:
                racha = 0;
                puntaje -= 2;
                puntajeIA++;
                fireButton.classList.remove("fireActivate");
                KOButton.classList.remove("fireActivate");
                fireButton.disabled = true;
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
                fireButton.classList.remove("fireActivate");
                KOButton.classList.remove("fireActivate");
                fireButton.disabled = true;
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
            fireButton.disabled = false;
            fireButton.classList.add("fireActivate");
            if (racha >= 7) {
                cont = 4;
                KOButton.disabled = false;
                fireButton.classList.add("KOActivate");
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

    // ----------------------- Ganador -----------------------


    if (puntaje >= 10 || puntajeIA >= 10) {

        setTimeout(() => {
            clearInterval(intervalo);
            puntoActual.innerText = "";
            if (puntaje >= 10 && puntajeIA >= 10) {
                puntoActual.innerText = nombre + ", fue un empate...";
            } else if (puntaje < 10 && puntajeIA >= 10) {
                puntoActual.innerText = nombre + ", Perdiste :(";
            } else if (puntaje >= 10 && puntajeIA < 10) {
                puntoActual.innerText = nombre + ", Ganaste! :D";
            }

            puntoActual.style.display = "block";
            document.getElementById("eleccionPantalla").style.display = "block"
            findeljuego();

        }, 4500);
    }


    setTimeout(() => {
        cont = 2;
        // cargartablero(puntaje, puntajeIA, cont)
        document.getElementById("rachaActual").innerText = racha;
    }, 1000);

    var intervalo = setInterval(buclepantalla, 1500);
})

function findeljuego() {
    const reinicio = document.getElementById("sino");
    cambiarInterfaz(5);

    reinicio.childNodes.forEach((eleccion) => {

        eleccion.addEventListener("click", (e) => {
            let respuesta = e.target.value;
            if (respuesta == "si") {
                puntoActual.innerText = nombre + "";
                puntaje = 0;
                puntajeIA = 0;
                racha = 0;
                document.getElementById("rachaActual").innerText = 0;
                document.getElementById("celdaMarcador").innerText = 0;
                document.getElementById("celdaMarcadorIA").innerText = 0;
                cambiarInterfaz(7);
                cambiarInterfaz(1);
            } else if (respuesta == "no") {
                cambiarInterfaz(6, nombre);
            }
        });
    })
}

