import { cuerpoPropiedades } from "../Funciones/de juego.js"
import { crearComida,puntuacion } from "../Funciones/de modo clasico.js";
import {findeljuego} from "../Funciones/de interfaz.js"

    const juegocanvas = document.getElementById("juegoCanvas"),
        ctx = juegocanvas.getContext("2d");
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

    function limpiarcanvas(ctx) {
        ctx.clearRect(0, 0, 300, 300);
    }

    function mover() {
        unircuerpo();
        Snake[0].mover();
        if (Snake[0].cabezaposX >= juegocanvas.width) { findeljuego(); game0ver(intervalodejuego); }
        else if (Snake[0].cabezaposX < 0) { findeljuego(); game0ver(intervalodejuego); }
        else if (Snake[0].cabezaposY >= juegocanvas.height) { findeljuego(); game0ver(intervalodejuego); }
        else if (Snake[0].cabezaposY < 0) { findeljuego(); game0ver(intervalodejuego); }
        for (let i = 1; i < Snake.length - 1; i++) {
            if (Snake.length > 1) {
                if (Snake[0].cabezaposX == Snake[i].cabezaposX && Snake[0].cabezaposY == Snake[i].cabezaposY) {
                    findeljuego()
                    game0ver(intervalodejuego);
                    Snake = null;
                    Comida = null;
                }
            }
        }
        if (Snake[0].cabezaposY == Comida.y && Snake[0].cabezaposX == Comida.x) {
            Comida.nuevacomida()
            Snake[Snake.length] = new cuerpoPropiedades();
            unircuerpo();
            puntuacion();
        }
    }

    function unircuerpo() {
        if (Snake.length > 1) {
            for (let i = 0; i < Snake.length - 1; i++) {
                Snake[Snake.length - i - 1].cabezaposX = Snake[Snake.length - i - 2].cabezaposX;
                Snake[Snake.length - i - 1].cabezaposY = Snake[Snake.length - i - 2].cabezaposY;
            }
        }
    }

    function game0ver(intervalodejuego) {
        clearInterval(intervalodejuego)
    }
