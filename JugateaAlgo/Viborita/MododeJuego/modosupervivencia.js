import { cuerpoPropiedades, zona } from "../Funciones/de juego.js"
import { crearObstaculo } from "../Funciones/de modo supervivencia.js"
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
            botonera.style.opacity = "0"
            break;
        case 1:
            limpiarcanvas(ctx)
            botonera.style.opacity = "0.8"
            break;
        case 2:
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.font = "bold 24px verdana"
            ctx.textAlign = "start"
            ctx.fillText("2", 140, 150)
            ctx.stroke();
            botonera.style.opacity = "0.5"
            break;
        case 3:
            limpiarcanvas(ctx)
            botonera.style.opacity = "0"
            break;
        case 4:
            ctx.beginPath();
            ctx.fillStyle = "black"
            ctx.font = "bold 24px verdana"
            ctx.textAlign = "start"
            ctx.fillText("1", 140, 150)
            ctx.stroke();
            botonera.style.opacity = "0.2"
            break;
        case 5:
            botonera.style.opacity = "0"
            limpiarcanvas(ctx)
            clearInterval(intervaloinicio)
    }
}

let intervaloinicio = setInterval(inicio, 500)

setTimeout(() => {

    document.getElementById("rachaactual").innerText = 0;
    document.getElementById("nombre").innerText = window.name || "jugador 1";
    document.getElementById("vidas").innerText = 3;

    let Snake = [],
        Obstaculo = [],
        segundero = 0,
        puntuacion = 0,
        auxiliar = 0,
        fps = 1000 / 15,
        vidas = 3,
        bonus;

    Obstaculo[0] = new crearObstaculo()
    Snake[0] = new cuerpoPropiedades()
    bonus = new zona()
    Snake[0].direccion = 2;

    for (let i = 1; i < 4; i++) { Snake[i] = new cuerpoPropiedades() }

    var intervalodejuego = setInterval(juego, fps)

    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
        else if (e.key === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
        else if (e.key === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
        else if (e.key === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
    })

    botonera.addEventListener("click", (e) => {
        let boton = e.target.closest("button");
        if (boton) {
            let direccion = boton.getAttribute("data-direccion");

            if (direccion === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
            else if (direccion === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
            else if (direccion === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
            else if (direccion === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
        }
    })

    let ponerObstaculos = function obstaculos() {
        segundero++;
        let cont = 0;
        const j = Snake[0]
        const b = bonus
        bonuspuntos(j, b);

        document.getElementById("rachaactual").innerText = (segundero + puntuacion);
        switch (segundero) {
            case 7:
                Obstaculo[0].moverObstaculos()
                cont = 1; bonus.crearBonus(cont);
                console.log(Obstaculo)
                break;
            case 12:
                cont = 0; for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                Obstaculo[1] = new crearObstaculo()
                cont = 2; bonus.crearBonus(cont);
                setTimeout(() => {
                    console.log(Obstaculo)
                }, 1000);

                break;
            case 37:
                for (let i in Obstaculo) { Obstaculo[i].moverObstaculos() }
                Obstaculo[2] = new crearObstaculo()
                break;
            case 45:
                cont = 1; for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                bonus.crearBonus(cont);
                break;
            case 60:
                cont = 2; bonus.crearBonus(cont);
                break;
            case 120:
                Obstaculo[3] = new crearObstaculo()
                cont = 1; for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                cont = 3; bonus.crearBonus(cont);
                break;
            case 145:
                cont = 4; bonus.crearBonus(cont);
                break;
            case 300: Obstaculo[4] = new crearObstaculo()
                cont = 1; for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                break;
            default:
                if (segundero > 10 && segundero < 45 && segundero % 6 == 0) {
                    for (let i in Obstaculo) { Obstaculo[i].moverObstaculos() }
                    puntuacion++;
                } else if (segundero >= 45 && segundero < 120 && segundero % 5 == 0) {
                    cont = 1;
                    puntuacion += 2;
                    for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                } else if (segundero > 120 && segundero < 300 && segundero % 4 == 0) {
                    cont = 1;
                    puntuacion += 3;
                    for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                } else if (segundero > 300 && segundero % 3 == 0) {
                    cont = 1;
                    puntuacion += 5;
                    for (let i in Obstaculo) { Obstaculo[i].moverObstaculos(cont) }
                }
        }
    }

    var intervalo = setInterval(ponerObstaculos, 1000)
    function juego() {
        mover()
        colisiones()
        limpiarcanvas(ctx)
        Snake[0].rendercabeza(ctx)
        for (let i = 1; i < Snake.length; i++) { Snake[i].render(ctx) }
        for (let i in Obstaculo) { Obstaculo[i].render(ctx); Obstaculo[i].mover() }
        bonus.render(ctx)
    }

    function limpiarcanvas(ctx) {
        ctx.clearRect(0, 0, 300, 300);
    }

    function mover() {
        unircuerpo();
        Snake[0].mover();

        if (Snake[0].x >= juegocanvas.width - 1) { Snake[0].x = 0 }
        else if (Snake[0].x < 0) { Snake[0].x = juegocanvas.width - 10 }
        else if (Snake[0].y >= juegocanvas.height - 1) { Snake[0].y = 0 }
        else if (Snake[0].y < 0) { Snake[0].y = juegocanvas.width - 10 }
    }

    function bonuspuntos(j, b) {

        if (j.x < b.xz + b.nz && j.x + 10 > b.xz && j.y < b.yz + b.mz && j.y + 10 > b.yz) {
            puntuacion += 50;
            auxiliar += 50;
            document.getElementById("mensaje").innerText = "+ " + auxiliar + " puntos"
        } else {
            let cont = 2; bonus.crearBonus(cont);
            setTimeout(() => {
                document.getElementById("mensaje").innerText = " "
                auxiliar = 0;
            }, 1000);
        }
    }

    function colisiones() {
        //(𝑥1 + ancho1) > 𝑥2 && 𝑥1 < (𝑥2 + ancho2) && (𝑦1 + alto1) > 𝑦2 && 𝑦1 < (𝑦2 + alto2)
        for (let i in Obstaculo) {
            const o = Obstaculo[i];
            const b = bonus;
            const j = Snake[0]
            if (o.x < j.x + 10 && o.x + o.w > j.x && o.y < j.y + 10 && o.y + o.h > j.y) {
                vidas--;
                Snake.pop();
                Obstaculo.splice(i, 1, new crearObstaculo());
                document.getElementById("mensaje").innerText = "Te alcanzo un asteroide"
                document.getElementById("vidas").innerText = vidas;
            }
            if (o.x < b.xz + b.nz && o.x + o.w > b.xz && o.y < b.yz + b.mz && o.y + o.h > b.yz) {
                Obstaculo.splice(i, 1, new crearObstaculo());
                console.log("colision Bunker")
                document.getElementById("mensaje").innerText = "Golpearon el Bunker"
            }
        }
        if (vidas === 0) {
            findeljuego();
            clearInterval(intervalodejuego)
            clearInterval(intervalo)
        }
    }

    function unircuerpo() {
        for (let i = 0; i < Snake.length - 1; i++) {
            Snake[Snake.length - i - 1].x = Snake[Snake.length - i - 2].x;
            Snake[Snake.length - i - 1].y = Snake[Snake.length - i - 2].y;
        }
    }

}, 3500)









