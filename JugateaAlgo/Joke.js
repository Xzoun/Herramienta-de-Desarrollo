let fechaActual = new Date()
const inicio = 1682910022560,
    ultimoingreso = fechaActual.getTime(),
    dias = Math.trunc((ultimoingreso - inicio) / 8.64e+7),
    chiste = document.getElementById("jokeBoton");
chiste.addEventListener("click", joke,{once:true});
const ocultarChiste = document.getElementById("volver");
ocultarChiste.addEventListener("click", ocultarJoke,{once:true});
function joke() {
    document.getElementById("linkjuegos").style.display = "none";
    document.getElementById("click1").style.display = "none";
    document.querySelector(".click2").style.display = "none";
    document.getElementById("jokeInterfaz").style.display = "flex"
    document.getElementById("volver").style.display ="block"
    document.getElementById("joke").innerText = chistes[dias]
    document.getElementById("dia").innerText = "Dia # " + dias;
}
function ocultarJoke(){
    document.getElementById("linkjuegos").style.display = "block";
    document.getElementById("click1").style.display = "none";
    document.querySelector(".click2").style.display = "none";
    document.getElementById("jokeInterfaz").style.display = "none"
    document.getElementById("volver").style.display ="none"
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

"— ¿Qué le dice un semáforo a otro?\n"+"— ¡No me mires que me estoy cambiando!",

"— Oiga, ¿el otorrino va por número?\n"+"— Van nombrando.\n"+"— Qué gran actor, pero no me cambie de tema.",

"¿Por qué las mujeres de Nordelta beben agua del mar? Para ser más saladas.",

"¿Qué le dice un jardinero a otro? Nos vemos cuando podamos.",

"La mayor exportación de Australia son los boomerangs. También son la mayor importación.",

"Intenté organizar un torneo profesional de escondite, pero fue un completo fracaso. Los buenos jugadores son difíciles de encontrar.",

"El otro día vendí mi aspiradora. Lo único que hacía era acumular polvo.",

"¿Qué es rojo y tiene forma de cubo? Un cubo azul pintado de rojo.",

"— Ojalá lloviera.\n"+"— Ojalá yo también.",

"Había un tipo que era tan borrachín que le llamaban genio porque cada vez que destapaban una botella aparecía.",

"Un chiste comunista no tiene gracia si no lo entiende todo el mundo.",

"¿Qué le dijo Batman a Robin antes de subir al coche?\n" +"-Robin, sube al coche.",

"Tengo un amigo otaku que estaba triste, así que lo animé.",

"Van dos fantasmas y se cae el del médium.",

"— Oye, ¿sabes cómo se llaman los habitantes de Nueva York?\n"+"— Hombre, pues todos no.",

"— Hola, ¿tienen libros para el cansancio?\n"+"— Sí, pero están agotados.",

"¿Qué es rojo y malo para tus dientes?\n"+"Un ladrillo.",

"¿Has oído hablar del astronauta claustrofóbico? Solo necesitaba un poco de espacio.",

"— ¿Te gusta el rock progresivo?\n"+"— Cada vez más.",

"— Hola, soy paraguayo y quiero pedirle la mano de su hija para casarme con ella./n"+
"— ¿Para qué?\n"+"- Paraguayo.",

"¿Cómo se despiden los químicos? Ácido un placer.",

"¿Cómo se llama el campeón de buceo japonés? Tokofondo.",

"Iba a contar un chiste sobre sodio... pero Na.",

"Conocí a mi novia en un ascensor. Dice que soy el amor de subida.",

"— Perdone, ¿dónde está la sección de libros sobre el sentido del gusto?\n"+
"— Lo siento, sobre gustos no hay nada escrito.",

"— Ha cometido usted un crimen matemático.\n"+"— Pues lo asumo.\n"+"— Pues lo arresto.",

"— Doctor, sin rodeos, dígame la verdad, ¿tengo problemas de memoria?\n"+"— ¡Que sí!",

"— Hombre, Pepe, cómo has cambiado.\n"+"— Yo no soy Pepe.\n"+"- Pues más a mi favor.",

"¿De dónde sale la porcelana? De las porceovejas.",

"Me gustan los elefantes. Todo lo demás me parece irrelefante.",

"¿Por qué no pueden hablar los dinosaurios? Porque están muertos.",

"¿Cuál es el animal más tonto de la selva? El oso polar.",

"¿Qué le dice un gusano a otro? Me voy a dar la vuelta a la manzana.",

"¿Cuáles eran los personajes de dibujos animados favoritos del capitán del Titanic? Timón y Pumba.",

"¿Qué hace una abeja en un gimnasio? Zumba.",

"¿Qué le dice un ganso a una gansa? ¡Vengansa!",

"Si se muere una pulga, ¿dónde va? Al pulgatorio.",

"¿Qué es un pez en un cine? Un mero espectador.",

"¿Por qué la gallina cuida tanto a sus pollitos? Porque le costó un huevo tenerlos.",

"¿Qué hace un pez mago? Nada por aquí, nada por allá",

"¿Qué le dice la foca a su madre? I love you, mother foca.",

"¿Cuál es el colmo de un carnicero? Tener un perro salchicha y un hijo chuleta."]



