var posiciones = [];
const bolasTotales = 5;

for (let i = 0; i < bolasTotales; i++) {
    const bola = document.createElement("div");
    bola.classList.add('bola');

    const diametro = Math.random() * 100 + 30;

    let posicion = {
        x: Math.random() * (90),
        y: Math.random() * (90)
    }

    bola.style.left = `${posicion.x}vw`;
    bola.style.top = `${posicion.y}vh`;

    posicion.x += pixelsToVW(diametro / 2);
    posicion.y += pixelsToVH(diametro / 2);

    bola.style.width = `${diametro}px`;
    bola.style.height = `${diametro}px`;

    bola.style.backgroundColor = `rgb(${randomInt(100, 255)},${randomInt(100, 255)},${randomInt(100, 255)})`;
    posiciones.push(posicion);
    document.body.appendChild(bola)
}

for (let i = 0; i < posiciones.length - 1; i++) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
    linea.classList.add('linea');

    linea.setAttribute("x1", `${posiciones[i].x}vw`);
    linea.setAttribute("y1", `${posiciones[i].y}vh`);
    linea.setAttribute("x2", `${posiciones[i + 1].x}vw`);
    linea.setAttribute("y2", `${posiciones[i + 1].y}vh`);
    linea.setAttribute("stroke", "black");
    linea.setAttribute("stroke-width", "2");

    svg.appendChild(linea);
    document.body.appendChild(svg);
}

/* -------------------------- Efectos -------------------------- */

const bolas = document.querySelectorAll('.bola');
const timelineBolas = gsap.timeline();

bolas.forEach((bola) => {
    timelineBolas.to(bola, {
        duration: 1.8,
        opacity: 0.5,
        ease: "Bounce.inOut",
        delay: 0.5
    });

});

function randomInt(num1, num2) {
    let num = Math.floor(Math.random() * num2 + num1);

    if (num > 255) {
        num = 100;
    }

    return num;
}

const lineas = document.querySelectorAll('.linea');
const timeline = gsap.timeline();

lineas.forEach((linea) => {
    const longitud = linea.getTotalLength();

    gsap.set(linea, { strokeDasharray: longitud, strokeDashoffset: longitud });

    timeline.to(linea, {
        duration: 2,
        strokeDashoffset: 0,
        opacity: 0.1,
        ease: "power1.inOut",
        delay: 1
    });
});

/* -------------------------- Conversor -------------------------- */

function pixelsToVW(pixels) {
    const windowWidthInPixels = window.innerWidth;
    const vwValue = (pixels / windowWidthInPixels) * 100;
    return vwValue;
}

function pixelsToVH(pixels) {
    const windowHeightInPixels = window.innerHeight;
    const vhValue = (pixels / windowHeightInPixels) * 100;
    return vhValue;
}




