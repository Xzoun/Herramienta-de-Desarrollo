import { cuerpoPropiedades, crearComida, cuadricula} from "./Funciones de juego.js"
const juegocanvas = document.getElementById("juegoCanvas")

const ctx = juegocanvas.getContext("2d")

let fps = 15,
    frameduracion = 1000 / fps,
    start = 0;
    
let Snake = []
let Comida = new crearComida()
Snake[0] = new cuerpoPropiedades()
Snake[0].direccion = 2;
let cuadricula1 = cuadricula

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
    else if (e.key === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
    else if (e.key === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;    
    else if (e.key === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
})

juego();
function juego(timestamp) {
    requestAnimationFrame(juego)
    if (timestamp >= start) {
        mover() 
        limpiarCanvas()  
        
        Comida.render(ctx)
        Snake[0].rendercabeza(ctx)
        for (let i = 1; i < Snake.length; i++) {
            Snake[i].render(ctx)
         }
        start = timestamp + frameduracion;
    }
}
function limpiarCanvas() {
    ctx.clearRect(0, 0, juegocanvas.width, juegocanvas.height);
}
function mover() {   
    unircuerpo();
    Snake[0].mover();       
    if (Snake[0].cabezaposX >= juegocanvas.width-10) {
        findeljuego();
    } else if (Snake[0].cabezaposX < 0) {
        findeljuego();
    } else if (Snake[0].cabezaposY >= juegocanvas.height-10) {
        findeljuego();
    } else if (Snake[0].cabezaposY < 0) {
        findeljuego();
    }
    if (Snake[0].cabezaposY == Comida.y && Snake[0].cabezaposX == Comida.x) {
        Comida.nuevacomida()        
        Snake[Snake.length] = new cuerpoPropiedades();
        unircuerpo();       
    }          
}
function unircuerpo() {
    if (Snake.length > 1) {
        for (let i = 0; i < Snake.length-1; i++) {    
            Snake[Snake.length - i - 1].cabezaposX = Snake[Snake.length - i - 2].cabezaposX;
            Snake[Snake.length - i - 1].cabezaposY = Snake[Snake.length - i - 2].cabezaposY;
        }
    }    
}
function findeljuego(){
puntuacion = 0
}