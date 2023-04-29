import { cuerpoPropiedades } from "../Funciones/de juego.js"
import { crearObstaculo,Bonus } from "../Funciones/de modo supervivencia.js"
import {findeljuego} from "../Funciones/de interfaz.js"

const juegocanvas = document.getElementById("juegoCanvas"),
    ctx = juegocanvas.getContext("2d");

document.getElementById("rachaactual").innerText = 0;
document.getElementById("nombre").innerText = window.name || "jugador 1";
document.getElementById("vidas").innerText=3;

let Snake = [],
    Obstaculo = [],
    segundero = 0,
    puntuacion = 0,
    fps = 1000 / 15,
    vidas = 3;
let boost = new Bonus();
    
Obstaculo[0] = new crearObstaculo()
Snake[0] = new cuerpoPropiedades()
Snake[0].direccion = 2;

for (let i = 1; i < 4; i++) {
    Snake[i] = new cuerpoPropiedades()
}

   let intervalodejuego = setInterval(juego, fps)

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
    else if (e.key === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
    else if (e.key === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
    else if (e.key === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
})

let ponerObstaculos = function obstaculos() {
    segundero++;
    let cont = 0;
    
    document.getElementById("rachaactual").innerText = (segundero + puntuacion);
    if (segundero == 7) { Obstaculo[0].nuevoObstaculo() }
    else if (segundero == 12) {
        Obstaculo[1] = new crearObstaculo()
        for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].nuevoObstaculo() }
    }
    else if (segundero > 10 && segundero < 30 && segundero % 6 == 0) {
        for (let i = 0; i < Obstaculo.length; i++) { Obstaculo[i].nuevoObstaculo() }

    }
    else if (segundero == 45) {
        Obstaculo[2] = new crearObstaculo()
        for (let i = 0; i < Obstaculo.length; i++) { cont = 1; Obstaculo[i].nuevoObstaculo(cont); }
    }
    else if (segundero >= 30 && segundero < 70 && segundero % 5 == 0) {
        cont = 1;
        for (let i = 0; i < Obstaculo.length; i++) { cont = 1; Obstaculo[i].nuevoObstaculo(cont) }
    }
    else if (segundero == 120) {
        Obstaculo[3] = new crearObstaculo()
        for (let i = 0; i < Obstaculo.length; i++) { cont = 3; Obstaculo[i].nuevoObstaculo(cont) }
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
    if (Snake[0].cabezaposX >= juegocanvas.width-1) { Snake[0].cabezaposX = 0 }
    else if (Snake[0].cabezaposX < 0) { Snake[0].cabezaposX = juegocanvas.width-10 }
    else if (Snake[0].cabezaposY >= juegocanvas.height-1) { Snake[0].cabezaposY = 0 }
    else if (Snake[0].cabezaposY < 0) { Snake[0].cabezaposY = juegocanvas.width-10} 
    for (let i = 0; i < Obstaculo.length; i++) {
        if (Snake[0].cabezaposY == Obstaculo[i].y && Snake[0].cabezaposX == Obstaculo[i].x){
            vidas--;
            Snake.pop();
            document.getElementById("vidas").innerText=vidas;
        }
        if (vidas == 0){
            findeljuego();
            clearInterval(intervalodejuego)
            clearInterval(intervalo)
        }
    }  
}

function unircuerpo() {
    for (let i = 0; i < Snake.length - 1; i++) {
        Snake[Snake.length - i - 1].cabezaposX = Snake[Snake.length - i - 2].cabezaposX;
        Snake[Snake.length - i - 1].cabezaposY = Snake[Snake.length - i - 2].cabezaposY;
    }
}
     var intervalo = setInterval(ponerObstaculos, 1000)

