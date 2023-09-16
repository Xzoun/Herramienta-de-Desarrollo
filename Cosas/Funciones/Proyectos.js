var p2 = document.getElementById("horaActual");

function obtenerHora() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var ampm = hora >= 12 ? "p.m." : "a.m.";

  hora = hora % 12;
  hora = hora ? hora : 12;

  var horaFormateada = (hora < 10 ? "0" : "") + hora;
  var minutosFormateados = (minutos < 10 ? "0" : "") + minutos;

  p2.innerText = horaFormateada + ":" + minutosFormateados + " " + ampm;
}
obtenerHora();
setInterval(obtenerHora, 60000);

const contDescrProy = document.getElementById("descripcion");

contDescrProy.addEventListener("click", (e) => {
  const descripcion = e.target.getAttribute("data-p");
  switch (descripcion) {
    case "p1":
      contDescrProy.classList.toggle("proyecto1");
      break;
    case "p2":
      contDescrProy.classList.toggle("proyecto2");
      break;
    case "p3":
      contDescrProy.classList.toggle("proyecto3");
      break;
    default:
      break;
  }
})


