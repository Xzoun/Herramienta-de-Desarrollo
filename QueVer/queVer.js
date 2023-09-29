import { obtenerUrls } from "./DB/db.js"

const lupita = document.getElementById("botonBuscar"),
    buscador = document.getElementById("buscador"),
    titulo = document.getElementById("titulo"),
    link1 = document.getElementById("link1"),
    link2 = document.getElementById("link2"),
    link1Desc = document.getElementById("link1Desc"),
    link2Desc = document.getElementById("link2Desc"),
    mainPhoto = document.getElementById("mainImg");
let url = "imagenes/queVer"

// ---------- Paginas ---------- 
const paginas = {
    pagSeries: {
        photoSrc: "./QueVer/Imagenes/gameOfThrones.jpg",
        title: "Game Of Thrones",
        link1Desc: "Ver Trailer",
        link2Desc: "Sinopsis",
        link1Href: "https://www.youtube.com/watch?v=vCzW8RzDV2o",
        link2Href: "https://www.youtube.com/watch?v=QDC5DKSyYcs&list=PLPZ1i5C50RxBTWPU-8S-e0qF6KfWe-7Y5",
        url: "/series",
    },
    pagPeliculas: {
        photoSrc: "./QueVer/Imagenes/Jobs.png",
        title: "Jobs",
        link1Desc: "Ver Trailer",
        link2Desc: "Sinopsis",
        link1Href: "https://www.youtube.com/watch?v=zXzyLxad6xk",
        link2Href: "https://www.youtube.com/watch?v=ouRn5PIwtmU",
        url: "/peliculas",
    },
    pagCanales: {
        photoSrc: "./QueVer/Imagenes/MrBeasr.jpg",
        title: "Mr Beast",
        link1Desc: "Ver",
        link2Desc: "Información",
        link1Href: "https://www.youtube.com/watch?v=54Eu9Yzd7xc",
        link2Href: "https://www.youtube.com/watch?v=xLlYR8dR2nY",
        url: "/canales",
    },
    pagMusicos: {
        photoSrc: "./QueVer/Imagenes/elKuelgue.jpg",
        title: "El Kuelgue",
        link1Desc: "Escuchar",
        link2Desc: "Información",
        link1Href: "https://www.youtube.com/watch?v=nolkPq64TrY",
        link2Href: "https://www.youtube.com/watch?v=dPg4fq1E9xk",
        url: "/musicos",
    },
    pagLibros: {
        photoSrc: "./QueVer/Imagenes/unMundoSinFin.jpg",
        title: "Un mundo sin fin",
        link1Desc: "Comprar",
        link2Desc: "Información",
        link1Href: "https://play.google.com/store/books/details/Ken_Follett_Un_mundo_sin_fin_edici%C3%B3n_10o_aniversar?id=LdxH80NuzgAC",
        link2Href: "https://www.youtube.com/watch?v=7NU04BwAOtEo",
        url: "/libros",
    },
};

// ---------- Inicio ---------- 
function cargarPagina() {
    url += "/series";
    obtenerUrls(url);
}
// ---------- Escuchas ----------

document.querySelector('.navbar-nav').addEventListener('click', (event) => {
    url = "imagenes/queVer";
    const targetId = event.target.id;
    const pagina = paginas[targetId];

    if (pagina) {
        mainPhoto.setAttribute('src', pagina.photoSrc);
        titulo.innerText = pagina.title;
        link1Desc.innerText = pagina.link1Desc;
        link2Desc.innerText = pagina.link2Desc;
        link1.setAttribute('href', pagina.link1Href);
        link2.setAttribute('href', pagina.link2Href);
        const urlLink = url + pagina.url;
        console.log(urlLink);
        obtenerUrls(urlLink);
    }

});

document.addEventListener("DOMContentLoaded", cargarPagina);

// ---------- Banner ---------- 

window.addEventListener("scroll", () => {
    const banner = document.getElementById("banner");
    const scroll = window.scrollY;
    if (scroll < 1) {
        banner.style.background = "linear-gradient(180deg, rgba(0,0,0,0.8) 18%, rgba(0,0,0,0) 76%)";
    } else {
        banner.style.background = "black";
    }
});

