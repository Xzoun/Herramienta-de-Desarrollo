import { bienvenidaFc, interfazFc, } from "./Funciones/de interfaz.js";
import { cuerpoPropiedades } from "./Funciones/de juego.js";
import { crearComida, puntuacion } from "./Modo de Juego/modo clasico.js";
import { crearObstaculo } from "./Modo de Juego/modo supervivencia.js"

bienvenidaFc();
iniciarmodoFc();

function iniciarmodoFc() {
    const idbotones = document.getElementById("mododejuegobotones");
    idbotones.childNodes.forEach((eleccion) => {
        eleccion.addEventListener("click", (e) => {
            let modojuego = document.getElementById("eleccion").innerText = e.target.value;
            let cont = 1;
            interfazFc(cont);
            if (modojuego == "modo niveles") {

            } else if (modojuego == "modo clasico") {
                modoclasico()
            } else if (modojuego == "modo supervivencia") {
                modosupervivencia()
            }
        })
    })
}

function findeljuego() {
    let cont = 3;
    interfazFc(cont);
    const reinicio = document.getElementById("sino");
    reinicio.childNodes.forEach((eleccion) => {
        eleccion.addEventListener("click", (e) => {
            let respuesta = e.target.value;
            if (respuesta == "si") {
                let modojuego = document.getElementById("eleccion").innerText;
                let cont = 1;
                interfazFc(cont);
                if (modojuego == "modo niveles") {

                } else if (modojuego == "modo clasico") {
                    modoclasico()
                } else if (modojuego == "modo supervivencia") {
                    modosupervivencia()
                }

            } else if (respuesta == "no") {
                let cont = 4
                interfazFc(cont)
            } else if (respuesta == "cambiarmodo") {
                let cont = 0
                interfazFc(cont)
            }
        })
    })
}

function modoclasico() {
    const juegocanvas = document.getElementById("juegoCanvas"),
        ctx = juegocanvas.getContext("2d");
    let Snake = [],
        Comida = new crearComida(),
        fps = 1000 / 15;
   
    Snake[0] = new cuerpoPropiedades()
    Snake[0].direccion = 2;
    document.getElementById("rachaactual").innerText = 0;

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
}

function modosupervivencia() {

    document.getElementById("rachaactual").innerText = 0;

    const juegocanvas = document.getElementById("juegoCanvas"),
        ctx = juegocanvas.getContext("2d");

    let Snake = [],
        Obstaculo = [],
        segundero = 0;
    Obstaculo[0] = new crearObstaculo()
    Snake[0] = new cuerpoPropiedades()
    Snake[0].direccion = 2;
    for (let i = 1; i < 4; i++) {
        Snake[i] = new cuerpoPropiedades()
    }


    let fps = 1000 / 15,
        intervalodejuego = setInterval(juego, fps)

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
        else if (e.key === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
        else if (e.key === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
        else if (e.key === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
    })

    let ponerObstaculos = function pantalla() {
        segundero++;
        let cont = 0;
        document.getElementById("rachaactual").innerText = segundero
        if (segundero == 7) { Obstaculo[0].nuevoObstaculo() }
        else if (segundero == 14) {
            Obstaculo[1] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].nuevoObstaculo() }
        }
        else if (segundero > 10 && segundero < 30 && segundero % 7 == 0) {
            for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].nuevoObstaculo() }
        }
        else if (segundero == 45) {
            Obstaculo[2] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { cont = 1; Obstaculo[i].nuevoObstaculo(cont);; }
        }
        else if (segundero >= 30 && segundero < 70 && segundero % 5 == 0) {
            cont = 1;
            for (let i = 0; i < Obstaculo.length; i++) { cont = 1; Obstaculo[i].nuevoObstaculo(cont) }
        }
        else if (segundero == 120) {
            Obstaculo[3] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { cont = 2; Obstaculo[i].nuevoObstaculo(cont) }
        }
        else if (segundero > 70 && segundero % 3 == 0) {
            cont = 2;
            for (let i = 0; i < Obstaculo.length; i++) { cont = 2; Obstaculo[i].nuevoObstaculo(cont) }
        }
    }
    
    


    function juego() {
        mover()
        limpiarcanvas(ctx)
        Snake[0].rendercabeza(ctx)
        for (let i = 1; i < Snake.length; i++) { Snake[i].render(ctx) }
        for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].render(ctx); Obstaculo[i].mover() }
    }

    function limpiarcanvas(ctx) {
        ctx.clearRect(0, 0, 300, 300);
    }

    function mover() {
        unircuerpo();
        Snake[0].mover();
        if (Snake[0].cabezaposX >= juegocanvas.width + 1) { Snake[0].cabezaposX = 0 }
        else if (Snake[0].cabezaposX < 0) { Snake[0].cabezaposX = juegocanvas.width }
        else if (Snake[0].cabezaposY >= juegocanvas.height + 1) { Snake[0].cabezaposY = 0 }
        else if (Snake[0].cabezaposY < 0) { Snake[0].cabezaposY = juegocanvas.width }
        for (let i = 0; i < Obstaculo.length; i++) {
            if (Snake[0].cabezaposY == Obstaculo[i].y && Snake[0].cabezaposX == Obstaculo[i].x) {
                findeljuego();
                game0ver(intervalo, intervalodejuego);
            }
        }

    }

    function unircuerpo() {
        for (let i = 0; i < Snake.length - 1; i++) {
            Snake[Snake.length - i - 1].cabezaposX = Snake[Snake.length - i - 2].cabezaposX;
            Snake[Snake.length - i - 1].cabezaposY = Snake[Snake.length - i - 2].cabezaposY;
        }
    }
    function game0ver(intervalodejuego, intervalo) {
        clearInterval(intervalodejuego)
        clearInterval(intervalo)
    }

    var intervalo = setInterval(ponerObstaculos, 1000);
}
