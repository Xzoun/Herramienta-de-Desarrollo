import { inicio } from "./Cosas/Bienvenido.js"
import { notas } from "./Cosas/Notas.js"

const DarkButton = document.getElementById("DarkButton");
DarkButton.addEventListener("click", () => {
    document.body.classList.toggle("Dark");
    DarkButton.classList.toggle("activado");
    const juegos = document.getElementById("juegos");
    juegos.classList.toggle("Dark");
    const css = document.getElementById("atajos");
    css.classList.toggle("Dark");
    const redes = document.getElementById("redes");
    redes.classList.toggle("Dark");
}, { passive: true })
var bienvenida = setInterval(inicio, 1000);
setTimeout(() => {
    clearInterval(bienvenida)
}, 12000);
const opcion1 =document.getElementById("one");
const opcion2 =document.getElementById("two");
const opcion3 =document.getElementById("three");
opcion1.addEventListener("click",()=>{     
    document.getElementById("presentacion").style.display = "block"
    document.getElementById("notasFunc").style.display = "none"
    document.getElementById("chat-gpt").style.display = "none"
    document.getElementById("one").style.background = "yellow"
    document.getElementById("two").style.background = "white"
    document.getElementById("three").style.background = "white"
})
opcion2.addEventListener("click",()=>{
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("notasFunc").style.display = "block"
    document.getElementById("chat-gpt").style.display = "none"
    document.getElementById("one").style.background = "white"
    document.getElementById("two").style.background = "yellow"
    document.getElementById("three").style.background = "white"
})
opcion3.addEventListener("click",()=>{
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("notasFunc").style.display = "none"
    document.getElementById("chat-gpt").style.display = "block"
    document.getElementById("one").style.background = "white"
    document.getElementById("two").style.background = "white"
    document.getElementById("three").style.background = "yellow"
})


