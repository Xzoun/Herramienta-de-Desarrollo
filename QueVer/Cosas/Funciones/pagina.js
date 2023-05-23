export function pagina(){

}
const series = document.getElementById("series")
const pagSeries = document.getElementById("pagSeries")
const peliculas = document.getElementById("peliculas")
const pagPeliculas = document.getElementById("pagPeliculas")
const canales = document.getElementById("canales")
const pagCanales = document.getElementById("pagCanales")
const musicos = document.getElementById("musicos")
const pagMusicos = document.getElementById("pagMusicos")
const libros = document.getElementById("libros")
const pagLibros = document.getElementById("pagLibros")
const favoritos = document.getElementById("favoritos")
const pagFavoritos = document.getElementById("pagFavoritos")

pagSeries.addEventListener("click",()=>{
    series.style.display = "block";
    peliculas.style.display = "none";  
    canales.style.display = "none";
})

pagPeliculas.addEventListener("click",()=>{
    series.style.display = "none";
    peliculas.style.display = "block";
    canales.style.display = "none";
})

pagCanales.addEventListener("click",()=>{
    series.style.display = "none";
    peliculas.style.display = "none";
    canales.style.display = "block";
})