var formulario = document.getElementById('formulario');
var comentario = document.getElementById('comentario');
var muro = document.getElementById('muro');
var likes = document.getElementById('likesDiv');
var contador = 1;

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  let fechaActual = new Date(); 
  var contenidoComentario = comentario.value;
  var nuevoComentario = {
    id: contador,
    contenido: contenidoComentario,
    fecha: fecha(fechaActual.getTime()),
    likes: 0
  };

  comentario.value = '';

  var comentarioHTML = '<div class="comentarioDiv">' +
    '<div class="comentario">' +
    '<p class="contenido">' + nuevoComentario.contenido + '</p>' +
    '<p class="tiempo">' + nuevoComentario.fecha + '</p>' +
    '</div>' +
    '<div class="likesDiv" >' +
    '<img class="like" src="./Muro/Cosas/Up.png"/>' +
    '<div class="likes">' + nuevoComentario.likes + '</div>' +
    '<img class="like" src="./Muro/Cosas/Down.png"/>' +
    '</div>' + '</div>';

  muro.insertAdjacentHTML('afterbegin', comentarioHTML);
  document.getElementById("caracteres").innerHTML = 400;
});

function cargarComentarios() {
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
//likes.addEventListener('click', function (event) {
// }, { once: true });

window.addEventListener('load', function () {
  //cargarComentarios();
  // contador = comentarios.length;
});

