export class crearObstaculo {
    constructor() {
        this.x = Math.floor(Math.random() * 30) * 10
        this.y = Math.floor(Math.random() * 30) * 10
        this.x1 = 0, this.y1 = 0; this.x2 = 0; this.y2 = 0;
         this.vx = 0; this.vy = 0; this.vx1 = 0; this.vy1 = 0; 
         this.direccion = 8;
    }

    render(ctx) {

        ctx.fillStyle = "black"

        ctx.fillRect(this.x, this.y, 10, 10)
        // ctx.fillRect(this.x1, this.y1, 10, 10)
        // ctx.fillRect(this.x2, this.y2, 10, 10)
    }

    nuevoObstaculo(cont = 0) {
        if (cont == 0) {
            this.direccion = Math.floor(Math.random() * 7);
            
            this.x = Math.floor(Math.random() * 30) * 10
            this.y = Math.floor(Math.random() * 30) * 10

        } else if (cont == 1) {
           

            // this.x1 = Math.floor(Math.random() * 30) * 10
            // this.y1 = Math.floor(Math.random() * 30) * 10
            // this.n1 = Math.floor(Math.random() * 5) * 10
            // this.m1 = Math.floor(Math.random() * 5) * 10

        } else if (cont == 2) {

        }
    }

    mover() {
        if (this.direccion === 0) { this.vx = -10; this.vy = 0; }
        else if (this.direccion === 1) { this.vx = 0; this.vy = -10; }
        else if (this.direccion === 2) { this.vx = 10; this.vy = 0; }
        else if (this.direccion === 3) { this.vx = 0; this.vy = 10; }
        else if (this.direccion === 4) { this.vx = -10; this.vy = -10; }
        else if (this.direccion === 5) { this.vx = 10; this.vy = -10; }
        else if (this.direccion === 6) { this.vx = 10; this.vy = 10; }
        else if (this.direccion === 7) { this.vx = -10; this.vy = 10; }
        else if (this.direccion === 8) { }

        if (this.x >= 300 || this.x <= 0) { this.direccion = 8; this.vx = - this.vx; }
        else if (this.y >= 300 || this.y <= 0) { this.direccion = 8; this.vy = - this.vy; }
        this.x += this.vx;
        this.y += this.vy;
    }
}
// export function frames() {
//     let puntuacion = document.getElementById("rachaactual").innerText
//     let puntos = Math.floor(puntuacion)
//     let fps = 1000 / 15
//     if (puntos >= 10) {
//         fps = 500 / 15
//     }
//     return fps
// }
// function velocidad() {
//     let puntuacion = document.getElementById("rachaactual").innerText
//     let puntos = Math.floor(puntuacion)
//     if (puntos = 10) {
//         requestAnimationFrame(intervalodejuego)
//     }
// }
