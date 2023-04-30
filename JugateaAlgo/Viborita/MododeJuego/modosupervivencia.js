import { cuerpoPropiedades, zona } from "../Funciones/de juego.js"
import { crearObstaculo } from "../Funciones/de modo supervivencia.js"
import { findeljuego } from "../Funciones/de interfaz.js"

const juegocanvas = document.getElementById("juegoCanvas"),
    ctx = juegocanvas.getContext("2d");

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


let ponerObstaculos = function obstaculos() {
    segundero++;
    let cont = 0;
    const j = Snake[0]
    const o = bonus
    if (j.cabezaposX < o.x1 + o.n1 && j.cabezaposX + 10 > o.x1 && j.cabezaposY < o.y1 + o.m1 && j.cabezaposY + 10 > o.y1) {
        puntuacion += 50;
        auxiliar +=50;
        document.getElementById("bonus").innerText = "+ " + auxiliar + " puntos"
    } else {
        cont = 2; bonus.crearBonus(cont);
        document.getElementById("bonus").innerText = " "
        auxiliar = 0;
    }

    document.getElementById("rachaactual").innerText = (segundero + puntuacion);
    switch (segundero) {
        case 7:
            Obstaculo[0].moverObstaculos()
            cont = 1; bonus.crearBonus(cont);
            break;
        case 12:
            Obstaculo[1] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].moverObstaculos() }
            cont = 2; bonus.crearBonus(cont);
            break;
        case 45:
            Obstaculo[2] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { cont = 1; Obstaculo[i].moverObstaculos(cont); }
            cont = 1; bonus.crearBonus(cont);
            break;
        case 60:
            cont = 2; bonus.crearBonus(cont);
            break;
        case 120:
            Obstaculo[3] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { cont = 2; Obstaculo[i].moverObstaculos(cont) }
            cont = 3; bonus.crearBonus(cont);
            break;
        case 145:
            cont = 4; bonus.crearBonus(cont);
            break;
        case 300: Obstaculo[4] = new crearObstaculo()
            for (let i = 0; i < Obstaculo.length; i++) { cont = 2; Obstaculo[i].moverObstaculos(cont) }
            break;
        default:
            if (segundero > 10 && segundero < 30 && segundero % 6 == 0) {
                for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].moverObstaculos() }
                puntuacion ++;
            } else if (segundero >= 30 && segundero < 70 && segundero % 5 == 0) {
                cont = 1;
                puntuacion +=2;
                for (let i = 0; i < Obstaculo.length; i++) { cont = 1; Obstaculo[i].moverObstaculos(cont) }
            } else if (segundero > 70 && segundero % 3 == 0) {
                cont = 2;
                puntuacion+=3;

                for (let i = 0; i < Obstaculo.length; i++) { cont = 2; Obstaculo[i].moverObstaculos(cont) }
            }
    }
}

var intervalo = setInterval(ponerObstaculos, 1000)
function juego() {
    mover()
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

    if (Snake[0].cabezaposX >= juegocanvas.width - 1) { Snake[0].cabezaposX = 0 }
    else if (Snake[0].cabezaposX < 0) { Snake[0].cabezaposX = juegocanvas.width - 10 }
    else if (Snake[0].cabezaposY >= juegocanvas.height - 1) { Snake[0].cabezaposY = 0 }
    else if (Snake[0].cabezaposY < 0) { Snake[0].cabezaposY = juegocanvas.width - 10 }
    for (let i in Obstaculo) {
        const o = Obstaculo[i]
        const j = Snake[0]
        if (j.cabezaposX < o.x + o.n && j.cabezaposX + 10 > o.x && j.cabezaposY < o.y + o.m && j.cabezaposY + 10 > o.y) {
            {
                vidas--;
                Snake.pop();
                Obstaculo.splice(i, 1);
                Obstaculo[i] = new crearObstaculo()
                document.getElementById("vidas").innerText = vidas;
            }
        }
    }
    for (let i in Obstaculo) {
        const o = bonus
        const j = Obstaculo[i]
        if (j.x < o.x1 + o.n1 && j.x + 10 > o.x1 && j.y < o.y1 + o.m1 && j.y + 10 > o.y1) {
            Obstaculo.splice(i, 1);
            Obstaculo[i] = new crearObstaculo()
        }
    }
    if (vidas === 0) {
        findeljuego();
        clearInterval(intervalodejuego)
        clearInterval(intervalo)
    }

}
// for (let i in Obstaculo) {
//    const {hit} = colisiones(Obstaculo[i], Snake[0])
//     if(hit==true){
//     vidas--;
//     Snake.pop();
//     Obstaculo.splice(i,1);
//     Obstaculo[i] = new crearObstaculo()
//     document.getElementById("vidas").innerText = vidas;
//     }
// }
//          function colisiones(a, b) {
//             var hit = false
//             if (b.x + b.width >= a.x && b.x < a.x + a.width) {
//                 if (b.y + b.height >= a.y && b.y < a.y + a.height) {
//                     hit = true;
//                 }
//             }
//             if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
//                 if (b.y <= a.y && b.y + b.width >= a.y + a.height) {
//                     hit = true
//                 }
//             }
//             if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
//                 if (a.y <= b.y && a.y + a.width >= b.y + b.height) {
//                     hit = true
//                 }
//             }
//             return hit;
//         }










function unircuerpo() {
    for (let i = 0; i < Snake.length - 1; i++) {
        Snake[Snake.length - i - 1].cabezaposX = Snake[Snake.length - i - 2].cabezaposX;
        Snake[Snake.length - i - 1].cabezaposY = Snake[Snake.length - i - 2].cabezaposY;
    }
}


