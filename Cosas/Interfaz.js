const opcion1 =document.getElementById("one");
const opcion2 =document.getElementById("two");
const opcion3 =document.getElementById("three");
opcion1.addEventListener("click",()=>{     
    document.getElementById("presentacion").style.display = "block"
    document.getElementById("notasFunc").style.display = "none"
    document.getElementById("chat-gpt").style.display = "none"
    document.getElementById("one").style.background = "black"
    document.getElementById("two").style.background = "white"
    document.getElementById("three").style.background = "white"
})
opcion2.addEventListener("click",()=>{
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("notasFunc").style.display = "block"
    document.getElementById("chat-gpt").style.display = "none"
    document.getElementById("one").style.background = "white"
    document.getElementById("two").style.background = "black"
    document.getElementById("three").style.background = "white"
})
opcion3.addEventListener("click",()=>{
    document.getElementById("presentacion").style.display = "none"
    document.getElementById("notasFunc").style.display = "none"
    document.getElementById("chat-gpt").style.display = "block"
    document.getElementById("one").style.background = "white"
    document.getElementById("two").style.background = "white"
    document.getElementById("three").style.background = "black"
})
export function interfaz(){
}