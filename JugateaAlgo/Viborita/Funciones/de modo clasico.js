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
    let puntuacion = document.getElementById("rachaactual").innerText
    let puntos = Math.floor(puntuacion)
    if (puntos >= 0 && puntos <= 9) {
        puntos += 1
        document.getElementById("rachaactual").innerText = puntos
    } else if (puntos >= 10 && puntos <= 29) {
        puntos += 2
        document.getElementById("rachaactual").innerText = puntos
        document.getElementById("mensaje").innerText = "Boost + 2 puntos"
    } else if (puntos >= 30) {
        puntos += 4
        document.getElementById("rachaactual").innerText = puntos
        document.getElementById("mensaje").innerText = "Boost + 4 puntos"
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





