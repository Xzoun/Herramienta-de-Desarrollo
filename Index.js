import{inicio} from"./Cosas/Bienvenido.js"
const DarkButton = document.getElementById("DarkButton");
DarkButton.addEventListener("click",()=>{
    document.body.classList.toggle("Dark");
    DarkButton.classList.toggle("activado");
    const juegos = document.getElementById("juegos");
    juegos.classList.toggle("Dark");
    const css = document.getElementById("atajos");
    css.classList.toggle("Dark");
    const redes = document.getElementById("redes");
    redes.classList.toggle("Dark");
},{passive:true})
var bienvenida = setInterval(inicio,1000);
setTimeout(()=>{
    clearInterval(bienvenida)
},12000);
