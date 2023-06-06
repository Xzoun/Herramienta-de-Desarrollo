
export function interfaz() {
}

//---------------------------Starting---------------------------

const banner = document.getElementById("banner");
const presentacion = document.getElementById("presentacion")
const startBackground = document.getElementById("startBackground")

const downBtn = document.getElementById("startContinue");
downBtn.addEventListener("click", () => {
  document.body.style.overflow = "scroll";
  startBackground.style.display = "none"; 
  start.style.display = "none";
  banner.style.position = "fixed";

  presentacion.scrollIntoView({    
    behavior: "smooth"
  })

},{once:true})

//---------------------------Banner---------------------------

//---------------------------Dark mode---------------------------


const DarkButton = document.getElementById("darkButton");
DarkButton.addEventListener("click", darkMode);

cargarModoNocturno();

function darkMode() {
  document.body.classList.toggle("Dark");
  DarkButton.classList.toggle("activado");

  var modoNocturno = document.body.classList.contains("Dark");

  if (modoNocturno) {
    document.getElementById("darkMode").innerText = "Desactivar";
    document.getElementById("darkIcon").style.filter = "invert(1)";
    document.getElementById("lightIcon").style.filter = "invert(0)";
  } else {
    document.getElementById("darkMode").innerText = "Activar";
    document.getElementById("darkIcon").style.filter = "invert(0)";
    document.getElementById("lightIcon").style.filter = "invert(1)";
  }
  guardarModoNocturno(modoNocturno);
}

function cargarModoNocturno() {
  var modoNocturno = localStorage.getItem('darkMode');

  if (modoNocturno) {

    document.body.classList.toggle("Dark", modoNocturno === "true");
    DarkButton.classList.toggle("activado", modoNocturno === "true");

    if (modoNocturno === "true") {
      document.getElementById("darkMode").innerText = "Desactivar";
      document.getElementById("darkIcon").style.filter = "invert(1)";
      document.getElementById("lightIcon").style.filter = "invert(0)";
    } else {
      document.getElementById("darkMode").innerText = "Activar";
      document.getElementById("darkIcon").style.filter = "invert(0)";
      document.getElementById("lightIcon").style.filter = "invert(1)";
    }
  }
}

function guardarModoNocturno(modoNocturno) {
  localStorage.setItem('darkMode', modoNocturno);
}





