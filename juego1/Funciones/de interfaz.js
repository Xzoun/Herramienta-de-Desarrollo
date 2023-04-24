export function bienvenidaFc() {
    const bienvenidainicial = document.getElementById("bienvenida");
    bienvenidainicial.addEventListener("submit", function funcion(event) {
        event.preventDefault();
        let cont = 0;
        var nombre = document.getElementById("ingresonombre").value || "Player 1";
        document.getElementById("nombre").innerText = nombre
        interfazFc(cont);
    }, { once: true })
}

export function interfazFc(cont) {
    //Elegir modo de juego
    if (cont == 0) {
        document.getElementById("indicacioninicial").style.display = "block"
        document.getElementById("mododejuegobotones").style.display = "block"
        document.getElementById("bienvenida").style.display = "none"
        document.getElementById("findeljuego").style.display = "none"
        //Interfaz General - Inicio        
    } else if (cont == 1) {
        document.getElementById("juegoCanvas").style.display = "block"
        document.getElementById("indicacioninicial").style.display = "none"
        document.getElementById("mododejuegobotones").style.display = "none"
        document.getElementById("findeljuego").style.display = "none"
        //reglamento
    } else if (cont == 2) {



        //Fin del juego
    } else if (cont == 3) {
        document.getElementById("findeljuego").style.display = "block"
        document.getElementById("juegoCanvas").style.display = "none"
    } else if (cont == 4) {
        document.getElementById("despedida").style.display = "block"
        document.getElementById("findeljuego").style.display = "none"
        document.getElementById("juegoCanvas").style.display = "none"
    }
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


