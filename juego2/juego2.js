// 0. Iniciar el juego
function eleccionmaquina() {
    let IA = math.round(math.random() * 2);
    let maquina = "";
    if (IA == 0) {
        maquina = "Piedra";
    } else if (IA == 1) {
        maquina = "Papel";
    } else if (IA == 3) {
        maquina = "Tijera";
    }
    return {
        maquina
    }
}
const botones = document.getElementById("idbotones");    
const agregarListener = () => {
    botones.childNodes.forEach((boton)=>{
        boton.addeventlistener("click", (e) => {
            e.target.classlist.get();
        }
        )
    }    
    )
}
 
    let player = "";
    if(boton1.addEventListener("click",))
        player = "Piedra";
    boton2.addEventListener("click", function (event) {
        player = "Papel";
    });
    boton3.addEventListener("click", function (event) {
        player = "Tijera";
    });
    return {
        player
    }

function eleccion() {
    let player = "";
    boton1.addEventListener("click", function (event) {
        player = "Piedra";
    });
    boton2.addEventListener("click", function (event) {
        player = "Papel";
    });
    boton3.addEventListener("click", function (event) {
        player = "Tijera";
    });
    return {
        player
    }
}


