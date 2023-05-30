import { pagina } from "./Cosas/Funciones/pagina.js"

// ---------- Banner ---------- 

const lupita = document.getElementById("botonBuscar");
const buscador = document.getElementById("buscador");

lupita.addEventListener("click", () => {
    buscador.classList.toggle("active");
    lupita.classList.toggle("active");
});

const general = document.getElementById("series");
general.addEventListener("click", () => {
    lupita.classList.remove("active");
    buscador.classList.remove("active");
});

window.addEventListener("scroll", () => {
    const banner = document.getElementById("banner");
    const scroll = window.scrollY;
    if (scroll < 1) {
        banner.style.background = "linear-gradient(180deg, rgba(0,0,0,0.8) 18%, rgba(0,0,0,0) 76%)";
    } else {
        banner.style.background = "black";
    }
});

// ---------- Carrusel series de Netflix ---------- 

const netflixSeries = document.querySelectorAll(".netflixS");
const grupo = document.getElementById("divGrupo");
const flechaDerecha = document.getElementById("flechasDerecha");
const flechaIzquierda = document.getElementById("flechasIzquierda");
const paginas = Math.ceil(netflixSeries.length / 4);

for (let i = 0; i < paginas; i++) {
    const indicador = document.createElement("button");
    if (i == 0) {
        indicador.classList.add("active");
    }
    document.querySelector(".indicadores").appendChild(indicador);
}

flechaDerecha.addEventListener("click", () => {
    grupo.scrollLeft += grupo.offsetWidth;
    const indicadorActivo = document.querySelector(".indicadores .active");
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add("active");
        indicadorActivo.classList.remove("active");
    }
})

flechaIzquierda.addEventListener("click", () => {
    grupo.scrollLeft -= grupo.offsetWidth;
    const indicadorActivo = document.querySelector(".indicadores .active");
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add("active");
        indicadorActivo.classList.remove("active");
    }
})




