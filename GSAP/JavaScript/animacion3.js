
gsap.registerPlugin(ScrollTrigger);

const indicacion = document.getElementById('indicacion');

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const container = document.getElementById('container');

gsap.set(indicacion, {
    opacity: 0,
    yPercent: -100
})

gsap.to(indicacion, {
    opacity: 1,
    yPercent: 0,
    delay: 1,
    duration: 2,
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom 20%",
        scrub: 3,
        pin: container,
    }
})

tl
    .set(container, {
        opacity: 0,
    })

    .to(container, {
        duration: 3,
        opacity: 1,
        onComplete: () => {
            indicacion.remove();
            document.body.style.background = "black";
        }
    })

    .to(box1, {
        duration: 5,
        rotate: -90,
        stagger: 5,
        delay: 5,
        scale: 5,
        opacity: 0
    })


    .to(box2, {
        yPercent: 100,
        xPercent: -100,
        duration: 10,
        rotate: -10,
        delay: 5,
       opacity: 0
    })

    .to(box3, {
        opacity: 1,
        delay: 2,
        yPercent:-30,
        duration: 10
    })
