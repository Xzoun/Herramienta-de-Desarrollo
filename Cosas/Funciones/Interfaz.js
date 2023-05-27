
export function interfaz() {
}

//---------------------------Starting---------------------------

const banner = document.getElementById("banner");
const presentacion = document.getElementById("presentacion")
var once = false;

window.addEventListener("scroll", () => {
    const start = document.getElementById("start");
    const scroll = window.scrollY;
    

    if (!once && scroll >=start.offsetHeight) {        
        banner.style.position = "fixed";
        start.style.display = "none"
        window.scrollTo({top: 0});
        once = true;
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



function darkMode(){
        document.body.classList.toggle("Dark");
        DarkButton.classList.toggle("activado");
        if(document.body.classList.contains("Dark")){
            document.getElementById("darkMode").innerText= "Desactivar"
            document.getElementById("darkIcon").style.filter = "invert(1)";
            document.getElementById("lightIcon").style.filter = "invert(0)";
            
        }else{
            document.getElementById("darkMode").innerText= "Activar"
            document.getElementById("darkIcon").style.filter = "invert(0)";
            document.getElementById("lightIcon").style.filter = "invert(1)";
        }        
}