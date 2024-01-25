const diametro = 50;
const circulosHorizontal = window.innerWidth / diametro;
const circulosVertical = window.innerHeight / diametro;

for (let i = 0; i < circulosVertical; i++) {
    for (let j = 0; j < circulosHorizontal; j++) {

        const circulo = document.createElement('div');
        circulo.classList.add('circulo');

        circulo.style.background = `${rojo()}`;
        circulo.style.width = `${diametro}px`;
        circulo.style.height = `${diametro}px`;
        circulo.style.position = 'absolute';

        const xPosition = j * diametro;
        const yPosition = i * diametro;

        circulo.style.left = `${xPosition}px`;
        circulo.style.top = `${yPosition}px`;
        circulo.style.zIndex = -30;

        document.body.appendChild(circulo);
    }
}

function rojo() {
    const randomTone = Math.floor(Math.random() * 150);
    return `rgb(${255},${randomTone},${randomTone})`;
}

gsap.to('.circulo', {
    borderRadius: 15,
    repeat: -1,
    duration: 1,
    rotate: 90,
    yoyo: true,
    stagger:0.005
})