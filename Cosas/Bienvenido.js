let contador = -1;
export function inicio() {
    frases();
    fecha();
    contador++;
    
    switch (contador) {
        case 0:
            document.getElementById("bienvenido").style.visibility = "visible"
            break;
        case 2:
            document.getElementById("bienvenido").style.visibility = "hidden"
            document.getElementById("hoyes").style.visibility = "visible"
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

    const frase = [
        "Hoy es hoy, ayer fue hoy ayer",
        "Tal vez parece que me pierdo en el camino pero me guía la intuición",
        "Dar lo que tengo, todo me da",
        "Que lindo día",
        "Con más ganas de creer que de pensar",
        "Mañana es mejor",
        "Hoy es tiempo y éste es lugar",
        "Que el privilegio no te nuble la empatía",
        "La vida no examinada no vale la pena ser vivida.",
        "No puedo enseñarles la verdad, solo puedo ayudarlos a encontrarla dentro de ustedes mismos.",
        "Solo sé que no sé nada.",
        "El hombre es la medida de todas las cosas.",
        "La imaginación es el ojo del alma.",
        "El arte existe porque la vida no basta.",
        "La belleza salvará al mundo.",
        "Escribir es una forma de terapia. A veces me pregunto cómo se las arreglan quienes no escriben, cómo se las arreglan para no volverse locos.",
        "La poesía es el eco de la melodía del universo en el corazón de los humanos.",
        "El arte lava del alma el polvo de la vida cotidiana.",
        "Las palabras son, en mi no tan humilde opinión, nuestra más inagotable fuente de magia.",
        "Escribir es fácil: todo lo que tienes que hacer es sentarte frente a una máquina de escribir y sangrar.",
        "El arte no reproduce lo visible, sino que hace visible lo que no siempre lo es.",
        "La literatura es el arte de descubrir algo extraordinario en lo ordinario.","El arte es la expresión más pura del alma humana.",
        "La literatura es el espejo en el que el alma se contempla a sí misma.",
        "Escribir es como hablar en silencio, es una forma de música interior.",
        "El arte no reproduce lo visible, sino que hace visible lo invisible.",
        "La poesía es el lenguaje natural del corazón.",
        "La escritura es la pintura de la voz.",
        "El arte no está en los objetos, sino en el ojo del espectador.",
        "La literatura es una confesión de que la vida no es suficiente.",
        "El arte no imita a la vida, imita a la emoción que la vida despierta.",
        "La escritura es la llave que abre las puertas de la imaginación.",
        "El arte es el camino hacia el infinito dentro de lo finito.",
        "La literatura es el sueño que todos compartimos.",
        "Escribir es volar sin alas, es explorar mundos sin límites.",
        "El arte es la expresión suprema de la libertad humana.",
        "La poesía es el eco de las palabras que resuenan en el corazón.",
        "La escritura es un acto de resistencia contra el olvido.",
        "El arte es el puente que conecta lo visible con lo invisible.",
        "La literatura es el refugio de quienes buscan reflejarse en las palabras.",
        "Escribir es dejar una huella en el mundo, es trascender el tiempo.",
        "El arte nos permite ver más allá de lo que nuestros ojos captan."]

    const autor = ["Andrés Calamaro", "Gustavo Cerati", "Fito Paez", "El abuelo",
        "Callejeros", "Spinetta", "Babasónicos", "Nicolás Maquiavelo",
        "Sócrates", "Sócrates", "Sócrates", "Protágoras", "Joseph Joubert", "Fernando Pessoa",
        "Fiódor Dostoyevski", "Graham Greene", "Rabindranath Tagore", "Pablo Picasso",
        "J.K. Rowling", "Ernest Hemingway", "Paul Klee","Boris Pasternak","John Ruskin",
        "Carlos Fuentes","Isabel Allende","Wassily Kandinsky","William Wordsworth",
        "Voltaire","Ad Reinhardt","Fernando Pessoa","Oscar Wilde","J.R.R. Tolkien",
        "Friedrich Schiller","Jorge Luis Borges","Octavio Paz","Georges Braque",
        "Pablo Neruda","Milan Kundera","Ernst Fischer","Gabriel García Márquez",
        "Virginia Woolf","Ansel Adams"]

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
