let fechaActual = new Date()
const inicio = 1682910022560,
    ultimoingreso = fechaActual.getTime(),
    dias = Math.trunc((ultimoingreso - inicio) / 8.64e+7),
    chiste = document.getElementById("jokeBoton");
chiste.addEventListener("click", joke,{once:true});
const ocultarChiste = document.getElementById("puntuarJoke");
ocultarChiste.addEventListener("click", puntuarJoke,{once:true});
const puntuacionstr = document.getElementById("puntosJoke").innerText;
let puntuacion = Math.floor(puntuacionstr);

function joke() {
    document.getElementById("linkjuegos").style.display = "none";
    document.getElementById("click1").style.display = "none";
    document.querySelector(".click2").style.display = "none";
    document.getElementById("jokeInterfaz").style.display = "block"
    document.getElementById("puntuarJoke").style.display ="block"
    document.getElementById("joke").innerText = chistes[dias]
    document.getElementById("dia").innerText = "Dia # " + dias;
}
function puntuarJoke(){
    document.getElementById("linkjuegos").style.display = "block";
    document.getElementById("click1").style.display = "none";
    document.querySelector(".click2").style.display = "none";
    document.getElementById("jokeInterfaz").style.display = "none"
    document.getElementById("puntuarJoke").style.display ="none"
}

document.getElementById("abajo").addEventListener("click", restarJoke);
document.getElementById("puntosJoke").addEventListener("click",neutralJoke);
document.getElementById("arriba").addEventListener("click", sumarJoke);

function restarJoke() {
    puntuacion = -1;
    document.getElementById("puntosJoke").innerText = puntuacion;
}

function neutralJoke(){
    puntuacion = 0;
    document.getElementById("puntosJoke").innerText = puntuacion;
}

function sumarJoke() {
    puntuacion = 1;
    document.getElementById("puntosJoke").innerText = puntuacion;
}

const chistes = [
    "Un niño llega al parque, se le acerca un amigo y le dice al oído:\n" +
    "— ¡Tienes puesto un zapato marrón y otro negro!\n" +
    "Y el niño le responde:\n" + "— Y eso no es nada, en mi casa tengo otro par igualito",

    "Dos amigos van caminando por la calle y uno le pregunta al otro:\n" +
    "— ¿Qué hora es?\n" + "— Las doce.\n" + "— ¡Uy, qué tarde!\n" + "— Me hubieses preguntado antes.",
   
    "— ¿Qué coche usa Papá Noel?\n" + "— Un renol.",

    "— ¿Qué le dice una iguana a su hermana gemela?\n" + "— Somos iguanitas.",

    "— ¿Qué le dijo un mosquito a un grupo de gente?\n" +
    "—No aplaudan que todavía falta para mi cumpleaños.",

    "— ¿Cuál es la fruta más divertida?\n"+"— La naranja ja, ja, ja.",

    "— ¿Cómo se dice ‘espejo’ en chino?"+"— Aitoiyo.",

    "— ¿Por qué la computadora fue al médico?\n"+"— Porque tenía un virus.",

    "Una niña le dice a su amiga:\n"+"— ¿Te gustan mis gafas nuevas?\n"+
    "— La verdad que no mucho.\n"+"— Son progresivas.\n"+
    "— ¡Ah bueno! Entonces ya me irán gustando.",

    "— ¿Qué le dice un semáforo a otro?\n"+"— ¡No me mires que me estoy cambiando!"]