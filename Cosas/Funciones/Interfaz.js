
export function interfaz() {
}

//---------------------------Starting---------------------------

const banner = document.getElementById("banner");
const presentacion = document.getElementById("presentacion")
var once = false;

window.addEventListener("scroll", () => {
    const start = document.getElementById("start");
    const startBackground = document.getElementById("startBackground")
    const scroll = window.scrollY;
    

    if (!once && scroll >=startBackground.offsetHeight/2) {        
        banner.style.position = "fixed";
        start.style.display = "none"
        startBackground.style.display = "none"
        window.scrollTo({top: 0});
        once = true;
        document.body.style.overflow = "scroll";
    }

})

const downBtn = document.getElementById("startContinue");
downBtn.addEventListener("click", () => {
    banner.style.position = "fixed"
    presentacion.scrollIntoView({
        behavior: "smooth"
    })

})

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


