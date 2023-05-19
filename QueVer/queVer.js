const trailerInicio = document.getElementById("botonBuscar");
trailerInicio.addEventListener("click", () => {
    const buscador = document.getElementById("buscador");
    console.log("Click")
    console.log(buscador)
   
    buscador.classList.toggle("active");
    console.log(buscador)
    trailerInicio.classList.toggle("active");
});
    window.addEventListener("scroll", ()=>{
const banner = document.getElementById("banner");
banner.classList.toggle("black");
// const top = body.getBoungingClientRect().top();
// if(banner.getBoungingClientRect().top()==body.getBoungingClientRect().top()){

// }
    })
