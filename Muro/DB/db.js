import firebaseConfig from '../../config.js';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export function cargarComentarios() {
  let commentsExist = false;

  db.collection("muro").orderBy("fecha", "asc").get().then((querySnapshot) => {
    muro.innerHTML = '';

    querySnapshot.forEach((doc) => {
      if (!validarComentario(doc.id)) {
        var comentarioHTML = 
        '<div class="comentarioDiv" data-id="' + doc.id + '" >' +
            '<div class="comentario">' +
                '<p class="contenido">' + doc.data().contenido + '</p>' +
                '<p class="tiempo">' + fecha(doc.data().fecha) + '</p>' +
            '</div>' +
            '<div class="likesDiv' + doc.id + '">' +
                '<img class="like plus_like" src="./Muro/Imagenes/Up.png" data-id="' + doc.id + '" />' +
                '<div class="likes_">' + doc.data().likes + '</div>' +
                '<img class="like minus_like" src="./Muro/Imagenes/Down.png" data-id="' + doc.id + '" />' +
            '</div>' + 
        '</div>';

        muro.insertAdjacentHTML('afterbegin', comentarioHTML);
        commentsExist = true;
      }
    });

    if (!commentsExist) {
      muro.insertAdjacentHTML('afterbegin', '<p class="holder">Lo sentimos, no se registran comentarios. Dejá el primero!</p>');
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

export function actualizarLikes(idComentario, nuevoValor) {
  const comentarioRef = db.collection("muro").doc(idComentario);

  return comentarioRef.update({ likes: nuevoValor })
    .then(() => {
      console.log("Likes actualizados en la base de datos.");
    })
    .catch((error) => {
      console.error("Error al actualizar los likes:", error);
    });
}

export function comentar(contenidoComentario) {
  let fechaActual = new Date();

  db.collection("muro").add({
    contenido: contenidoComentario,
    fecha: fechaActual,
    likes: 0
  })
    .then((docRef) => {
      console.log("Comentario de ID: ", docRef.idComentario);
    })
    .catch((error) => {
      console.error("Error agregando el comentario: ", error);
    });
}
