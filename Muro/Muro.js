import { insertarComentario, actualizarLikes } from "./DB/SQL.js"

var formulario = document.getElementById('formulario');
var comentario = document.getElementById('comentario');
var muro = document.getElementById('muro');
var contador = 0;

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  let fechaActual = new Date(); 
  var contenidoComentario = comentario.value;

  comentario.value = '';

  var comentarioHTML = '<div class="comentarioDiv">' +
    '<div class="comentario">' +
    '<p class="contenido">' + contenidoComentario + '</p>' +
    '<p class="tiempo">' + fecha(fechaActual) + '</p>' +
    '</div>' +
    '<div class="likesDiv" >' +
    '<img class="like plus_like" src="./Muro/Cosas/Up.png" onclick="incrementarLikes(' + contador + ')"/>' +
    '<div class="likes_">' + contador + '</div>' +
    '<img class="like minus_like" src="./Muro/Cosas/Down.png" onclick="disminuirLikes(' + contador + ')"/>' +
    '</div>' + '</div>';

  muro.insertAdjacentHTML('afterbegin', comentarioHTML);
  document.getElementById("caracteres").innerHTML = 400;

  insertarComentario(contenidoComentario);

});


function cargarComentarios() {
  fetch('/obtener-comentarios')
  .then(response => response.json())
  .then(comentarios => {
    // Ahora que tienes los comentarios, puedes mostrarlos en el muro
    comentarios.forEach(comentario => {
      var comentarioHTML = '<div class="comentarioDiv">' +
        '<div class="comentario">' +
        '<p class="contenido">' + comentario.contenido + '</p>' +
        '<p class="tiempo">' + fecha(comentario.fecha) + '</p>' +
        '</div>' +
        '<div class="likesDiv'+ idComentario+ '" >' +
        '<img class="like plus_like" src="./Muro/Cosas/Up.png" onclick="incrementarLikes(' +comentario.likes + ')"/>' +
        '<div class="likes_">' + comentario.likes + '</div>' +
        '<img class="like minus_like" src="./Muro/Cosas/Down.png" onclick="disminuirLikes(' +comentario.likes  + ')"/>' +
        '</div>' + '</div>';

      muro.insertAdjacentHTML('afterbegin', comentarioHTML);
    });
  })
  .catch(error => console.error('Error al cargar los comentarios:', error));
}

function fecha(creacion) {
  let fechaActual = new Date();
  const ultimoIngreso = fechaActual.getTime(),
    minutos = Math.floor((ultimoIngreso - creacion) / 60000),
    horas = Math.floor((ultimoIngreso - creacion) / 3.6e+6),
    dias = Math.floor((ultimoIngreso - creacion) / 8.64e+7);
  console.log(ultimoIngreso)
  console.log(creacion)
  console.log(ultimoIngreso - creacion)
  console.log((ultimoIngreso - creacion) / 60000)
  console.log(minutos)
  console.log(horas)
  console.log(dias)

  if (minutos < 1) {
    return "Justo ahora.";
  } else if (minutos ==  1) {
    return "Hace 1 minuto.";
  } else if (horas < 1) {   
    return "Hace" + minutos + " minutos.";
  } else if (horas < 24) {
    return "Hace" + horas + " horas.";
  } else {
    if (dias == 1){
      return  "Hace 1 día."
    }else if (dias < 14) {
      return "Hace "+ dias + " días."
    } else if (dias < 60) {
      let semanas = Math.floor(dias / 7);
      return  "Hace " + semanas + " semanas."
    } else if (dias < 365) {
      let meses = Math.floor(dias / 30);
      return "Hace" + meses + " meses."
    } else {
      if (Math.floor(dias / 365) == 1) {
        let meses = Math.floor((dias - 365) / 30);
        if (meses < 1) {
          return "Hace 1 año."
        } else if (meses < 2) {
          return "Hace 1 año y 1 mes."
        } else if (eses < 12) {
          return "Hace 1 año y " + meses + " meses."
        } else {
          let años = Math.floor(dias / 365);
          return "Hace" + años + " años."
        }
      }
    }
  }
}

function incrementarLikes(idComentario) {
  var likesDiv = document.getElementById('likes_' + idComentario);
  var likes = parseInt(likesDiv.textContent);
  likes++;
  likesDiv.textContent = likes;
  actualizarLikes(idComentario, likes);
}

function disminuirLikes(idComentario) {
  var likesDiv = document.getElementById('likes_' + idComentario);
  var likes = parseInt(likesDiv.textContent);
  likes--;
  likesDiv.textContent = likes;
  actualizarLikes(idComentario, likes);
}

window.addEventListener('load', cargarComentarios());



