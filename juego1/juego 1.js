const juegocanvas = document.getElementById("juegoCanvas")

const ctx = juegocanvas.getContext("2d")

const direcciones = {
    arriba: 1,
    abajo: 2,
    izquierda: 3,
    derecha: 4
}
let direccion = direcciones.derecha;
let cabezaposX = 150, cabezaposY = 150

let cuerpo = [
    { posX: 150, posY: 150 },
    { posX: 160, posY: 150 },
    { posX: 170, posY: 150 },
    { posX: 180, posY: 150 }
]
//console.log(cuerpo[0])
function dibujarCuerpo() {
    for (let partedelcuerpo of cuerpo) {
        ctx.beginPath()
        ctx.rect(partedelcuerpo.posX, partedelcuerpo.posY, 10, 10)
        ctx.stroke()
    }
  
    //console.log(cuerpo[0])
}
// function dibujarCabeza(x, y) {
//     ctx.beginPath()
//     ctx.rect(x, y, 10, 10)
//     ctx.stroke()
//     return {
//         x,
//         y
//     }
// }

// function unircuerpo() {
//    
//         }       

function posicioncuerpo() {
    const posicioncuerpoCopia = cuerpo.map(partedelcuerpo => {
        return {
            posX: partedelcuerpo.posX,
            posY: partedelcuerpo.posY
        }
    })
    // for (i = 1; i < cuerpo.length; i++) {
    //     console.log(i)
    //     cuerpo.splice(i, 1, { ...posicioncuerpoCopia[i - 1] })
    //     console.log(cuerpo[i])
    //     console.log(posicioncuerpoCopia)
    //     console.log(posicioncuerpoCopia[i - 1])

    // }
}
//    
//     }
// }
function cambiarDireccion() {
    if (direccion === direcciones.derecha) cabezaposX += 10;
    else if (direccion === direcciones.arriba) cabezaposY -= 10;
    else if (direccion === direcciones.abajo) cabezaposY += 10;
    else if (direccion === direcciones.izquierda) cabezaposX -= 10;
    else throw new Error("Direccion invalida");
    cuerpo.splice(0, 1, { posX: cabezaposX, posY: cabezaposY })
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, juegocanvas.width, juegocanvas.height);
}
function animacion() {
    document.addEventListener("keyup", (e) => {
        requestAnimationFrame
        if (e.key === "ArrowUp") direccion = direcciones.arriba;
        else if (e.key === "ArrowDown") direccion = direcciones.abajo;
        else if (e.key === "ArrowLeft") direccion = direcciones.izquierda;
        else if (e.key === "ArrowRight") direccion = direcciones.derecha;
        else return;

        limpiarCanvas()
        posicioncuerpo()
        cambiarDireccion()
        dibujarCuerpo()

    })
}
requestAnimationFrame(animacion)