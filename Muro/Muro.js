const firebaseConfig = {
  apiKey: "AIzaSyCxs389TzDaFoyuv2IScEC3U-eh45SYHSs",
  authDomain: "herramienta-de-desarrollo.firebaseapp.com",
  projectId: "herramienta-de-desarrollo",
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const formulario = document.getElementById('formulario'),
  comentario = document.getElementById('comentario'),
  muro = document.getElementById('muro');
let contador = 0;

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  let fechaActual = new Date();
  const contenidoComentario = comentario.value;

  comentario.value = '';

  document.getElementById("caracteres").innerHTML = 400;

  db.collection("muro").add({
    contenido: contenidoComentario,
    fecha: fechaActual,
    likes: contador
  })
    .then((docRef) => {
      console.log("Comentario de ID: ", docRef.idComentario);
    })
    .catch((error) => {
      console.error("Error agregando el comentario: ", error);
    });

  cargarComentarios();
});


function cargarComentarios() {
  let commentsExist = false;

  db.collection("muro").orderBy("fecha", "asc").get().then((querySnapshot) => {
    muro.innerHTML = '';

    querySnapshot.forEach((doc) => {
      if (!validarComentario(doc.id)) {
        var comentarioHTML = '<div class="comentarioDiv" data-id="' + doc.id + '" >' +
          '<div class="comentario">' +
          '<p class="contenido">' + doc.data().contenido + '</p>' +
          '<p class="tiempo">' + fecha(doc.data().fecha) + '</p>' +
          '</div>' +
          '<div class="likesDiv' + doc.id + '">' +
          '<img class="like plus_like" src="./Muro/Cosas/Up.png" data-id="' + doc.id + '" />' +
          '<div class="likes_">' + doc.data().likes + '</div>' +
          '<img class="like minus_like" src="./Muro/Cosas/Down.png" data-id="' + doc.id + '" />' +
          '</div>' + '</div>';

        muro.insertAdjacentHTML('afterbegin', comentarioHTML);
        commentsExist = true;
      }
    });

    if (!commentsExist) {
      muro.insertAdjacentHTML('afterbegin', '<h2 class="center">Lo sentimos, no se registran comentarios. Dejá el primero!</h2>');
    }
  });
}


function validarComentario(idComentario) {
  const comentarioDivs = document.getElementsByClassName("comentarioDiv");
  for (const div of comentarioDivs) {
    if (div.getAttribute("data-id") === idComentario) {
      return true;
    }
  }
  return false;
}

function fecha(creacion) {
  let fechaActual = new Date();
  let creacionFormato = new Date(creacion.seconds * 1000 + creacion.nanoseconds / 1000000);
  const ultimoIngreso = fechaActual.getTime(),
    minutos = Math.floor((ultimoIngreso - creacionFormato) / 60000),
    horas = Math.floor((ultimoIngreso - creacionFormato) / 3.6e+6),
    dias = Math.floor((ultimoIngreso - creacionFormato) / 8.64e+7);

  if (minutos < 1) {
    return "Justo ahora.";
  } else if (minutos < 2) {
    return "Hace 1 minuto.";
  } else if (horas < 1) {
    return "Hace " + minutos + " minutos.";
  } else if (horas < 24) {
    return "Hace " + horas + " horas.";
  } else {
    if (dias == 1) {
      return "Hace 1 día."
    } else if (dias < 14) {
      return "Hace " + dias + " días."
    } else if (dias < 60) {
      let semanas = Math.floor(dias / 7);
      return "Hace " + semanas + " semanas."
    } else if (dias < 365) {
      let meses = Math.floor(dias / 30);
      return "Hace " + meses + " meses."
    } else {
      if (Math.floor(dias / 365) == 1) {
        let meses = Math.floor((dias - 365) / 30);
        if (meses < 1) {
          return "Hace 1 año."
        } else if (meses < 2) {
          return "Hace 1 año y 1 mes."
        } else if (meses < 12) {
          return "Hace 1 año y " + meses + " meses."
        } else {
          let años = Math.floor(dias / 365);
          return "Hace " + años + " años."
        }
      }
    }
  }
}

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('plus_like')) {
    const idComentario = event.target.getAttribute('data-id');
    incrementarLikes(idComentario);
  } else if (event.target.classList.contains('minus_like')) {
    const idComentario = event.target.getAttribute('data-id');
    disminuirLikes(idComentario);
  }
});

function incrementarLikes(idComentario) {
  var likesDiv = document.querySelector('[data-id="' + idComentario + '"] .likes_');
  var likes = parseInt(likesDiv.textContent);
  likes++;
  likesDiv.textContent = likes;
  actualizarLikes(idComentario, likes);
}

function disminuirLikes(idComentario) {
  var likesDiv = document.querySelector('[data-id="' + idComentario + '"] .likes_');
  var likes = parseInt(likesDiv.textContent);
  likes--;
  likesDiv.textContent = likes;
  actualizarLikes(idComentario, likes);
}

function actualizarLikes(idComentario, nuevoValor) {
  // Obtén la referencia al documento
  const comentarioRef = db.collection("muro").doc(idComentario);

  // Actualiza el campo "likes"
  return comentarioRef.update({ likes: nuevoValor })
    .then(() => {
      console.log("Likes actualizados en la base de datos.");
    })
    .catch((error) => {
      console.error("Error al actualizar los likes:", error);
    });
}

window.addEventListener('load', cargarComentarios());



