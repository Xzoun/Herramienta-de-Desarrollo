export function interfazFc(cont) {
    //Elegir modo de juego
    if (cont == 0) {
        document.getElementById("modoBotons").style.display = "flex"
        document.getElementById("bienvenida").style.display = "none"
        //Interfaz General - Inicio        
    } else if (cont == 1) {
        document.getElementById("canvasContenedor").style.display = "block"
        document.getElementById("racha").style.display = "grid"
        document.getElementById("modoBotons").style.display = "none"
        document.getElementById("findeljuego").style.display = "none"
        //reglamento
    } else if (cont == 2) {



        //Fin del juego
    } else if (cont == 3) {
        document.getElementById("racha").style.display = "grid"
        document.getElementById("findeljuego").style.display = "flex"
        document.getElementById("canvasContenedor").style.display = "none"
        document.getElementById("pantalla").style.display = "none"
        document.getElementById("vida").style.display = "none"
        
    } else if (cont == 4) {
        let nombre = document.getElementById("nombre").innerText || "Player 1";
        document.getElementById("despedida").style.display = "flex"
        document.getElementById("despedida").innerText = "Gracias por jugar " + nombre + ", hasta pronto!"
        document.getElementById("findeljuego").style.display = "none"
        document.getElementById("canvasContenedor").style.display = "none"
    }
}

export function findeljuego() {
    let cont = 3;
    interfazFc(cont);
    let no = document.getElementById("no");
           no.addEventListener("click",()=>{
            cont = 4;
            interfazFc(cont);           
},{once: true})
}

// let contadorpantalla = 0;
// export function cuentaregresiva() {
//     var buclepantalla = function pantalla() {
//         document.getElementById("temporizador").style.display = "block";
//         contadorpantalla++;
//         if (contadorpantalla == 1) {
//             document.getElementById("temporizador").innerText = "2";
//             document.getElementById("temporizador").style.display = "none";
//         } else if (contadorpantalla == 2) {
//             document.getElementById("temporizador").style.display = "block";
//         } else if (contadorpantalla == 3) {
//             document.getElementById("temporizador").innerText = "1";
//             document.getElementById("temporizador").style.display = "none";
//         } else if (contadorpantalla == 4) {
//             document.getElementById("temporizador").style.display = "block";
//         } else if (contadorpantalla == 5) {
//             document.getElementById("temporizador").innerText = "Buena suerte!";
//             document.getElementById("temporizador").style.display = "none";
//         } else if (contadorpantalla == 6) {
//             document.getElementById("temporizador").style.display = "block";
//         } else if (contadorpantalla == 7) {
//             document.getElementById("temporizador").style.display = "none";
//             clearInterval(intervalo)
//             contadorpantalla=0;
//         }
//     }
//     var intervalo = setInterval(buclepantalla, 750);
// }


