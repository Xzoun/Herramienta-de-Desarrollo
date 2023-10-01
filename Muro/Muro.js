import { cargarComentarios, actualizarLikes, comentar } from './DB/db.js';

const formulario = document.getElementById('formulario'),
  input = document.getElementById('input'),
  chartsLeft = document.getElementById('chartsLeft'),
  muro = document.getElementById('muro');

// ------------------------ Caracteres ------------------------

input.addEventListener('input', (e) => {
  const target = e.target;
  const longitudMax = target.getAttribute('maxlength');
  const longitudAct = target.value.length;
  chartsLeft.innerHTML = `${longitudAct}`;
})

// ------------------------ Comentar ------------------------

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const contenidoComentario = input.value;

  input.value = '';
  chartsLeft.innerHTML = 0;

  comentar(contenidoComentario);
  cargarComentarios();
});

// ------------------------ Likes ------------------------

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('plus_like')) {
    const idComentario = event.target.getAttribute('data-id');
    likes(idComentario, true);
  } else if (event.target.classList.contains('minus_like')) {
    const idComentario = event.target.getAttribute('data-id');
    likes(idComentario, false);
  }
});

function likes(idComentario, positivo) {
  var likesDiv = document.querySelector('[data-id="' + idComentario + '"] .likes_');
  var likes = parseInt(likesDiv.textContent);
  if (positivo) {
    likes++;
  } else {
    likes--;
  }
  likesDiv.textContent = likes;
  actualizarLikes(idComentario, likes);
}

window.addEventListener('load', cargarComentarios());



