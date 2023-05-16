import { notas } from "./Cosas/Notas.js"
import {interfaz} from "./Cosas/Interfaz.js"

const DarkButton = document.getElementById("DarkButton");
DarkButton.addEventListener("click", () => {
    document.body.classList.toggle("Dark");
    DarkButton.classList.toggle("activado");
    const juegos = document.getElementById("juegos");
    juegos.classList.toggle("Dark");
    const queVer = document.getElementById("queVer");
    queVer.classList.toggle("Dark");
    const css = document.getElementById("atajos");
    css.classList.toggle("Dark");
    const redes = document.getElementById("redes");
    redes.classList.toggle("Dark");
    const imagengpt = document.getElementById("chat-gpt-img");
    imagengpt.classList.toggle("Dark");
    const navDiv = document.getElementById("fixedDiv");
    navDiv.classList.toggle("Dark")
}, { passive: true })

const FixButton = document.getElementById("fixNavBtn");
FixButton.addEventListener("click",()=>{
    FixButton.classList.toggle("fixed")
    const nav = document.getElementById("fixedNav")
    nav.classList.toggle("fixed");
    const navDiv = document.getElementById("fixedDiv")
    navDiv.classList.toggle("fixed");
    const redes = document.getElementById("redes")
    redes.classList.toggle("fixed");
}, { passive: true })


// var bienvenida = setInterval(inicio, 1000);
// setTimeout(() => {
//     clearInterval(bienvenida)
// }, 12000);



