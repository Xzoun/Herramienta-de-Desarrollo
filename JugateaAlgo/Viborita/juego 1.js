    const bienvenidainicial = document.getElementById("bienvenida");
    bienvenidainicial.addEventListener("submit", function funcion(event) {
        event.preventDefault();        
        var nombre = document.getElementById("ingresonombre").value || "Player 1";
        window.name = nombre
        document.getElementById("modoBotones").style.display = "flex"
        document.getElementById("bienvenida").style.display = "none"
    }, { once: true })   