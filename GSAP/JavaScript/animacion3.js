
gsap.registerPlugin(ScrollTrigger);

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom 20%",
        scrub: 3,
        pin: ".box",
        markers: {
            startColor: "green",
            endColor: "red",
            indent: "100",
            fontSize: "1rem"
        }
    }
})

tl.to(".box", {
    xPercent: -100,
    y: -100,
    rotate: -90,
    duration: 1,
    stagger: 5
})

// gsap.to(box1, {
//     scrollTrigger: {
//         trigger: box1,
//         start: "top top",
//         end: "bottom 20%",
//         scrub: 1,
//         pin: true,
//         markers: {
//             startColor: "green",
//             endColor: "red",
//             fontSize: "1rem",
//             indent: "100"
//         }
//     },

//     xPercent: -100,
//     y: -100,
//     rotate: -90,
//     duration: 2,

// });

// gsap.to(box2, {
//     scrollTrigger: {
//         trigger: box2,
//         start: "top top",
//         end: "bottom 20%",
//         scrub: 1,
//         pin: true,
//         markers: {
//             startColor: "green",
//             endColor: "red",
//             fontSize: "1rem",
//             indent: "100"
//         }
//     },

//     xPercent: -100,
//     y: -100,
//     rotate: -90,
//     duration: 2,

// }); gsap.to(box3, {
//     scrollTrigger: {
//         trigger: box3,
//         start: "top top",
//         end: "bottom 20%",
//         scrub: 1,
//         pin: true,
//         markers: {
//             startColor: "green",
//             endColor: "red",
//             fontSize: "1rem",
//             indent: "100"
//         }
//     },

//     xPercent: -100,
//     y: -100,
//     rotate: -90,
//     duration: 2,

// });