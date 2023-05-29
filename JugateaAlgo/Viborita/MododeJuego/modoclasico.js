import { cuerpoPropiedades } from "../Funciones/de juego.js"
import { crearComida, puntuacion } from "../Funciones/de modo clasico.js";
import { findeljuego } from "../Funciones/de interfaz.js"

const juegocanvas = document.getElementById("juegoCanvas"),
    ctx = juegocanvas.getContext("2d");
const botonera = document.getElementById("botonera");
let contador = -1;

function limpiarcanvas(ctx) {
    ctx.clearRect(0, 0, 300, 300);
}

function inicio() {

    contador++;
    switch (contador) {
        case 0:
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.font = "bold 24px verdana"
            ctx.textAlign = "start"
            ctx.fillText("3", 140, 150)
            ctx.stroke();
            botonera.style.opacity="0.8"
            break;
        case 1:
            limpiarcanvas(ctx)
            botonera.style.opacity="0"
            break;
        case 2:
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.font = "bold 24px verdana"
            ctx.textAlign = "start"
            ctx.fillText("2", 140, 150)
            ctx.stroke();
            botonera.style.opacity="0.5"
            break;
        case 3:
            limpiarcanvas(ctx)
            botonera.style.opacity="0"
            break;
        case 4:
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.font = "bold 24px verdana"
            ctx.textAlign = "start"
            ctx.fillText("1", 140, 150)
            ctx.stroke();
            botonera.style.opacity="0.2"
            break;
        case 5:
            botonera.style.opacity="0"
            limpiarcanvas(ctx)
            clearInterval(intervaloinicio)
    }
}

let intervaloinicio = setInterval(inicio, 500)

setTimeout(() => {

    let Snake = [],
        Comida = new crearComida(),
        fps = 1000 / 15;

    Snake[0] = new cuerpoPropiedades()
    Snake[0].direccion = 2;

    document.getElementById("rachaactual").innerText = 0;
    document.getElementById("nombre").innerText = window.name;

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
        else if (e.key === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
        else if (e.key === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
        else if (e.key === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
    })


    botonera.addEventListener("touchstart", (e) => {
        let boton = e.target.closest("button");
        if (boton) {
            let direccion = boton.getAttribute("data-direccion");       

            if (direccion === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
            else if (direccion === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
            else if (direccion === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
            else if (direccion === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
        }
    })

    let intervalodejuego = setInterval(juego, fps)

    function juego() {

        mover()
        limpiarcanvas(ctx)
        Comida.render(ctx)
        Snake[0].rendercabeza(ctx)
        for (let i = 1; i < Snake.length; i++) {
            Snake[i].render(ctx)
        }
    }

    function mover() {
        
        unircuerpo();
        Snake[0].mover();
        if (Snake[0].x >= juegocanvas.width) { findeljuego(); game0ver(intervalodejuego); }
        else if (Snake[0].x < 0) { findeljuego(); game0ver(intervalodejuego); }
        else if (Snake[0].y >= juegocanvas.height) { findeljuego(); game0ver(intervalodejuego); }
        else if (Snake[0].y < 0) { findeljuego(); game0ver(intervalodejuego); }
        for (let i = 1; i < Snake.length - 1; i++) {
            if (Snake.length > 1) {
                if (Snake[0].x == Snake[i].x && Snake[0].y == Snake[i].y) {
                    findeljuego()
                    game0ver(intervalodejuego);
                    Snake = null;
                    Comida = null;
                }
            }
        }
        if (Snake[0].y == Comida.y && Snake[0].x == Comida.x) {
            Comida.nuevacomida()
            Snake[Snake.length] = new cuerpoPropiedades();
            unircuerpo();
            puntuacion();
        }
    }

    function unircuerpo() {
        if (Snake.length > 1) {
            for (let i = 0; i < Snake.length - 1; i++) {
                Snake[Snake.length - i - 1].x = Snake[Snake.length - i - 2].x;
                Snake[Snake.length - i - 1].y = Snake[Snake.length - i - 2].y;
            }
        }
    }

    function game0ver(intervalodejuego) {
        clearInterval(intervalodejuego)
    }

}, 3500)
