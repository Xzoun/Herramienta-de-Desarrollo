
let y = 100; let x = 100; let ancho = 00; let alto = 00; let aux = 1; let cont = 1; let iniciando;
//let y2=1; let x2=1001; let ancho2=20; let alto2=20; let aux2 =1;
//let y3=50; let x3=50; let ancho3=20; let alto3=20; let aux3 =1; let cont =1;
//Una funcion constructora se ejecuta una sola vez, cuando se ejecuta el script.
    function setup() {
        createCanvas(300, 300);
    }

    //function apretar_tecla() {
    //  console.log("Toca una tecla!");
    //tecla_scape = Event.keycode;
    //if (tecla_scape == 32) {
    //La funcion draw se ejecuta por siempre
    function draw() {        
        background(0, 0, 0);
        rect(x, y, ancho, alto);
        // ? significa entonces
        // : significa sino
        aux++;
        if (aux < 98) {
            ancho = 20; alto = 20;
            y = y < 200 ? y + 1 : 200;
        } if (aux >= 98 && aux < 296) {
            ancho = 20; alto = 20;
            x = x < 200 ? x + 1 : 200;
        } if (aux >= 197 && aux < 296) {
            ancho = 20; alto = 20;
            y = y > 100 ? y - 1 : 100;
        } if (aux >= 296 && aux < 395) {
            ancho = 20; alto = 20;
            x = x > 100 ? x - 1 : 100;
        } if (aux == 395) {
            cont++;
        } if (cont >= 2) {
            ancho = ancho < 100 ? ancho + 1 : 100;
            alto = alto < 100 ? alto + 1 : 100;
        } if (aux >= 464 && aux<534) {
            cont = 1;
            ancho = ancho > 0 ? ancho - 1 : 0;
            alto = alto > 0 ? alto - 1 : 0;
        } if (aux >= 534 && aux < 825) {
            x = x > 1 ? x - 1 : -1;
            y = y > 1 ? y - 1 : -1; 
            ancho = ancho < 300 ? ancho + 1 : 302;
            alto = alto < 300 ? alto + 1 : 302;   
        }  if(aux >= 815){
                ancho = 20; alto = 20;x=100;y=100;
                background (245, 222, 179);
            }    
       }



