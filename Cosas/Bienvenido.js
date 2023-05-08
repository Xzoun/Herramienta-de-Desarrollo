let contador = -1;
export function inicio() {
    frases();
    fecha();
    contador++;
    console.log(contador)
    switch (contador) {
        case 0:
            document.getElementById("bienvenido").style.visibility = "visible"
            break;
        case 2:
            document.getElementById("bienvenido").style.visibility = "hidden"
            document.getElementById("hoyes").style.visibility = "visible"
            console.log(contador)
            break;
        case 3:
            document.getElementById("hoyes").style.visibility = "hidden"
            document.getElementById("dia").style.visibility = "visible"
            break;
        case 5:
            document.getElementById("dia").style.visibility = "hidden"
            document.getElementById("buendia").style.visibility = "visible"
            break;
        case 6:
            document.getElementById("buendia").style.visibility = "hidden"
            document.getElementById("lafrase").style.visibility = "visible"
            break;
        case 7:
            document.getElementById("lafrase").style.visibility = "hidden"
            document.getElementById("frase").style.visibility = "visible"
            break;
        case 10:
            document.getElementById("frase").style.visibility = "hidden"
            document.getElementById("autor").style.visibility = "visible"
            break;
        case 11:
            document.getElementById("autor").style.visibility = "hidden"
            break;
        default:
            break;
    }
}

function frases() {
    const fechaActual = new Date();
    const inicio = 1683342000071;
    const hora = new Date()
    const ultimoingreso = fechaActual.getTime()
    const frase = ["Hoy es hoy, ayer fue hoy ayer",
        "Tal vez parece que me pierdo en el camino pero me guía la intuición",
        "Dar lo que tengo, todo me da", "Que lindo día", "Con más ganas de creer que de pensar",
        "Mañana es mejor","Hoy es tiempo y éste es lugar","Que el privilegio no te nuble la empatía"]
    const autor = ["Andrés Calamaro", "Gustavo Cerati", "Fito Paez", "El abuelo",
        "Callejeros", "Spinetta","Babasónicos","Nicolás Maquiavelo"]
    const dias = Math.trunc((ultimoingreso - inicio) / 8.64e+7)
    document.getElementById("frase").innerText = frase[dias];
    document.getElementById("autor").innerText = autor[dias];
}

function fecha() {
    const fechaActual = new Date();
    const numdia = fechaActual.getDay();
    const nummes = fechaActual.getMonth();
    const numero = fechaActual.getDate();
    const año = fechaActual.getFullYear();
    var dia;
    var mes;
    switch (numdia) {
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
    }
    switch (nummes) {
        case 0:
            mes = "Enero";
            break;
        case 1:
            mes = "Febrero";
            break;
        case 2:
            mes = "Marzo";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Mayo";
            break;
        case 5:
            mes = "Junio";
            break;
        case 6:
            mes = "Julio";
            break;
        case 5:
            mes = "Agosto";
            break;
        case 6:
            mes = "Septiembre";
            break;
        case 5:
            mes = "Octubre";
            break;
        case 6:
            mes = "Noviembre";
            break;
        case 5:
            mes = "Diciembre";
            break;

    }

    document.getElementById("dia").innerText = dia + " " + numero + " de " + mes + " de " + año;
}
