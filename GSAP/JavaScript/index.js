let vh = window.innerWidth;
let nocheFondo = document.getElementById("backIndex");

/* --------------------- Noche ---------------------*/

for (let i = 0; i < 100; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    nocheFondo.appendChild(estrella);

    gsap.set(estrella, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.25
    });
}

gsap.to('.estrella', {
    opacity: 1,
    repeat: -1,
    yoyo: true,
    duration: 3,
    stagger: 0.3
});

for (let i = 0; i < 100; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.style.opacity = "0";
    nocheFondo.appendChild(estrella);

    gsap.set(estrella, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.25
    });
}

gsap.to('.estrella', {
    opacity: 1,
    duration: 3,
    stagger: 0.8
});

const crearEstrellaFugaz = () => {
    const estrellaFugaz = document.createElement('div');
    estrellaFugaz.classList.add('estrellaFugaz');
    nocheFondo.appendChild(estrellaFugaz);

    gsap.fromTo(estrellaFugaz, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 1.8,
        width: Math.random() * 10,
        height: Math.random() * 10,
        opacity: 1
    }, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight / 1.8,
        duration: 2,
        opacity: 0.1,
        onComplete: () => {
            estrellaFugaz.remove();
        }
    });
};


setInterval(crearEstrellaFugaz, 15000);

const timeline = gsap.timeline();
timeline.to(nocheFondo, {
    delay: 30,
    yPercent: -100,
    duration: 2,
    onComplete: () => {
        nocheFondo.remove();
    }
})

timeline.set(".saludo", {
    opacity: 1,
    rotate: 30,
    xPercent: 550,
    yPercent: 550,
    duration: 5
});

timeline.to('.saludo', {
    xPercent: 1000,
    yPercent: -400,
    delay: 5,
    duration: 2,
    rotate:180
});