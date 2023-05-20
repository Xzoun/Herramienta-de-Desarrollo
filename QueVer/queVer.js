const lupita = document.getElementById("botonBuscar");
const buscador = document.getElementById("buscador");

lupita.addEventListener("click", () => {
    buscador.classList.toggle("active");
    lupita.classList.toggle("active");
});

const general = document.getElementById("general");
general.addEventListener("click", () => {
    lupita.classList.remove("active");
    buscador.classList.remove("active");
});

window.addEventListener("scroll", () => {
    const banner = document.getElementById("banner");
    const scroll = window.scrollY;
    buscador.classList.remove("active");
    lupita.classList.remove("active");
    if (scroll < 1) {
        banner.style.background = "linear-gradient(180deg, rgba(0,0,0,0.9974836713812324) 18%, rgba(0,0,0,0) 76%)";
    } else {
        banner.style.background = "black";
    }
});

