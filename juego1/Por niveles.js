//Una funcion constructora se ejecuta una sola vez, cuando se ejecuta el script.
const canvas = document.querySelector("canvas");
canvas.width = 300;
canvas.height = 300;

const ctx = canvas.getContext("2d");

//ctx.fillRect(0, 0, canvas.height, canvas.width);
let ysnake = 150;
let xsnake = 150;

const getviborita = ({ x = xsnake, y = ysnake, w = 0, h = 0, color = "white", nivel = false }) => ({
    x,
    y,
    w,
    h,
    color,
    nivel,
    draw() {
        if (nivel == true) {
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.w, this.h);
    }
})

document.addEventListener("keydown", juego);
function juego(event) {
    let derrota = false;
    let tecla = event.key;
    switch (tecla) {
        case "ArrowUp":
            ysnake -= 10;
            break;
        case "ArrowDown":
            ysnake += 10;
            break;
        case "ArrowLeft":
            xsnake -= 10;
            break;
        case "ArrowRight":
            xsnake += 10;
            break;
    }
    if (xsnake <= 0 || ysnake <= 0 || ysnake >= canvas.width - 10 || xsnake >= canvas.width - 10) {
        derrota = true
    }
    console.log(derrota);
    const viborita = getviborita({
        x: xsnake,
        y: ysnake,
        h: 10,
        w: 10,
        color: "red",
        nivel: derrota
    });
    const mapatop = getviborita({
        w: canvas.width,
        h: 10,
        x: 0,
        y: 0
    })
    const mapaleft = getviborita({
        h: canvas.height,
        w: 10,
        x: 0,
        y: 0
    })
    const maparight = getviborita({
        x: canvas.width - 10,
        h: canvas.height,
        w: 10,
        y: 0
    })
    const mapabot = getviborita({
        y: canvas.height - 10,
        h: 10,
        w: canvas.width,
        x: 0
    })
    const obstaculos = getviborita({
        x: 20,
        y: 60,
        h: 10
    })

    function movimiento(nivel) {
        ctx.clearRect(10, 10, canvas.width - 10, canvas.height - 10);
        viborita.draw();
        mapatop.draw();
        mapabot.draw();
        mapaleft.draw();
        maparight.draw();
        if (nivel = 1) {
            obstaculos.draw();
        } else if (nivel = 2) {

        } else if (nivel = 3) {

        }
        requestAnimationFrame(movimiento);
    }

    requestAnimationFrame(movimiento);
}




