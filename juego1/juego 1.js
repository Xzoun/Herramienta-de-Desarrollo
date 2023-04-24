import { cuerpoPropiedades } from "./Funciones/de juego.js";
import { crearComida } from "./Modo de Juego/modo clasico.js";
import { bienvenidaFc, interfazFc,  } from "./Funciones/de interfaz.js";

bienvenidaFc();
iniciarmodoFc();

function iniciarmodoFc() {
    const idbotones = document.getElementById("mododejuegobotones");
    idbotones.childNodes.forEach((eleccion) => {
        eleccion.addEventListener("click", (e) => {
            let modojuego = document.getElementById("eleccion").innerText = e.target.value;
            document.getElementById("inicio").innerText = "inicio"
            let cont = 1;
            interfazFc(cont);
            if (modojuego == "modo niveles") {
                //modoniveles()
            } else if (modojuego == "modo clasico") {
                modoclasico()
                
            }
        }, { once: true })
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
                let cont = 1;                
                interfazFc(cont)            
                
                modoclasico()
            } else if (respuesta == "no") {
                let cont = 4
                interfazFc(cont)
            } else if (respuesta == "cambiarmodo") {
                let cont = 0
                interfazFc(cont)
            }
        }, { once: true })
    })
}
function modoclasico() {
    const juegocanvas = document.getElementById("juegoCanvas")
    const ctx = juegocanvas.getContext("2d");
    let Snake = []
    Snake[0] = new cuerpoPropiedades()
    Snake[0].direccion = 2;
    let Comida = new crearComida()
    let fps = 1000 / 15;
 
    document.addEventListener("keyup", (e) => {
        if (e.key === "ArrowUp" && Snake[0].direccion != 3) Snake[0].direccion = 1;
        else if (e.key === "ArrowLeft" && Snake[0].direccion != 2) Snake[0].direccion = 0;
        else if (e.key === "ArrowDown" && Snake[0].direccion != 1) Snake[0].direccion = 3;
        else if (e.key === "ArrowRight" && Snake[0].direccion != 0) Snake[0].direccion = 2;
    })

    function juego() {
        mover()
        limpiarcanvas(ctx)
        Comida.render(ctx)
        Snake[0].rendercabeza(ctx)
        for (let i = 1; i < Snake.length; i++) {
            Snake[i].render(ctx)
        }
    }

    function game0ver() {
        clearInterval(intervalodejuego)
    }
    
        let intervalodejuego = setInterval(juego, fps)
    
    

    function limpiarcanvas(ctx) {
        ctx.clearRect(0, 0, 300, 300);
    }

    function mover() {
        unircuerpo();
        Snake[0].mover();
        if (Snake[0].cabezaposX >= juegocanvas.width) {
            findeljuego();
            game0ver();
        } else if (Snake[0].cabezaposX < 0) {
            findeljuego();
            game0ver();
        } else if (Snake[0].cabezaposY >= juegocanvas.height) {
            findeljuego();
            game0ver();
        } else if (Snake[0].cabezaposY < 0) {
            findeljuego();
            game0ver();
        }
        for (let i = 1; i < Snake.length - 1; i++) {
            if (Snake.length > 1) {
                if (Snake[0].cabezaposX == Snake[i].cabezaposX && Snake[0].cabezaposY == Snake[i].cabezaposY) {
                    findeljuego()
                    game0ver();
                }
            }
        }
        if (Snake[0].cabezaposY == Comida.y && Snake[0].cabezaposX == Comida.x) {
            Comida.nuevacomida()
            Snake[Snake.length] = new cuerpoPropiedades();
            unircuerpo();
            let puntuacion = document.getElementById("rachaactual").innerText;
            let puntos = Math.floor(puntuacion);
            puntos += 1;
            document.getElementById("rachaactual").innerText = puntos
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

}