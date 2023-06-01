import { cargarNotas } from "./Cosas/Funciones/Notas.js"
import {interfaz} from "./Cosas/Funciones/Interfaz.js"
import {Proyectos} from"./Cosas/Funciones/Proyectos.js"

const typed = new Typed('.typed', {
    strings:[
        '<i>Herramienta y Portafolio de Desarrollo</i>',
        '<i>Development Tool and Portfolio</i>',
        '<i>Le Benitez!</i>',
        '<i>Desarrollador Full Stack</i>',
        '<i>Full Stack Developer</i>'
    ],
    loop:true,
    typeSpeed:75,
    backSpeed:75
});

const imprimir = (texto) =>{
    console.log(texto)
}
imprimir("hola mundo")

