export function interfaz(){
}

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

const opcion1 =document.getElementById("one");
const opcion2 =document.getElementById("two");
const opcion3 =document.getElementById("three");
opcion1.addEventListener("click",()=>{     
    document.getElementById("presentacion").style.display = "block"
    document.getElementById("notasFunc").style.display = "none"
    document.getElementById("chat-gpt").style.display = "none"
    document.getElementById("one").style.background = "black"
    document.getElementById("two").style.background = "white"
    document.getElementById("three").style.background = "white"
})
opcion2.addEventListener("click",()=>{
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("notasFunc").style.display = "block"
    document.getElementById("chat-gpt").style.display = "none"
    document.getElementById("one").style.background = "white"
    document.getElementById("two").style.background = "black"
    document.getElementById("three").style.background = "white"
})
opcion3.addEventListener("click",()=>{
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("notasFunc").style.display = "none"
    document.getElementById("chat-gpt").style.display = "block"
    document.getElementById("one").style.background = "white"
    document.getElementById("two").style.background = "white"
    document.getElementById("three").style.background = "black"
})