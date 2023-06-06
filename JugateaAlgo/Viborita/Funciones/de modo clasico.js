export class crearComida {
    constructor() {
        this.x = Math.floor(Math.random() * 30) * 10
        this.y = Math.floor(Math.random() * 30) * 10
    }

    render(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, 10, 10)
    }

    nuevacomida() {
        this.x = Math.floor(Math.random() * 30) * 10
        this.y = Math.floor(Math.random() * 30) * 10
    }
}

export function puntuacion() {
    let puntuacion = document.getElementById("rachaActual").innerText
    let fondoPuntuacion = document.getElementById("rachaActual")
    let mensaje = document.getElementById("mensaje")
    let puntos = Math.floor(puntuacion)
    if (puntos >= 0 && puntos <= 9) {
        puntos += 1
        fondoPuntuacion.innerText = puntos
    } else if (puntos >= 10 && puntos <= 29) {
        puntos += 2
        fondoPuntuacion.innerText = puntos
        mensaje.innerText = "Boost + 2 puntos"
        mensaje.classList.add("botons")
        fondoPuntuacion.classList.add("botons")
    } else if (puntos >= 30) {
        puntos += 4
        fondoPuntuacion.innerText = puntos
        mensaje.innerText = "Boost + 4 puntos"
    }
}

// export  function frames(){
//     let puntuacion = document.getElementById("rachaactual").innerText
//     let puntos = Math.floor(puntuacion)
//     let fps = 1000/15
//     if (puntos >=10) {
//        fps = 500/15
//     }
//     return fps
// }
// function velocidad (){
//     let puntuacion = document.getElementById("rachaactual").innerText
//     let puntos = Math.floor(puntuacion)
//     if (puntos = 10) {
//         requestAnimationFrame(intervalodejuego)
//     }
// }





