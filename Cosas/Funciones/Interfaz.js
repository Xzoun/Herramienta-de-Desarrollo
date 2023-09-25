const DarkButton = document.getElementById("darkButton"),
  navLinks = document.querySelectorAll(".navbar-nav .nav-link"),
  navbarCollapse = document.querySelector(".navbar-collapse");

//---------------------------Dark mode---------------------------

DarkButton.addEventListener("click", darkMode);

cargarModoNocturno();

function darkMode() {
  document.body.classList.toggle("Dark");
  DarkButton.classList.toggle("activado");

  var modoNocturno = document.body.classList.contains("Dark");

  if (modoNocturno) {
    document.getElementById("lightIcon").style.display = "none";
    document.getElementById("darkIcon").style.display = "block";
  } else {
    document.getElementById("lightIcon").style.display = "block";
    document.getElementById("darkIcon").style.display = "none";

  }
  guardarModoNocturno(modoNocturno);
}

function cargarModoNocturno() {
  var modoNocturno = localStorage.getItem('darkMode');

  if (modoNocturno) {

    document.body.classList.toggle("Dark", modoNocturno === "true");
    DarkButton.classList.toggle("activado", modoNocturno === "true");

    if (modoNocturno === "true") {
      document.getElementById("lightIcon").style.display = "none";
      document.getElementById("darkIcon").style.display = "block";
    } else {
      document.getElementById("lightIcon").style.display = "block";
      document.getElementById("darkIcon").style.display = "none";
    }
  }
}

function guardarModoNocturno(modoNocturno) {
  localStorage.setItem('darkMode', modoNocturno);
}

//--------------------------- Responsive ---------------------------

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});



