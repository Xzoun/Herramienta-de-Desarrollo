
let y =1; let x =1; let ancho = 20; let alto =20;let aux=1; let cont =1;
//let y2=1; let x2=1001; let ancho2=20; let alto2=20; let aux2 =1;
//let y3=50; let x3=50; let ancho3=20; let alto3=20; let aux3 =1; let cont =1;
//Una funcion constructora se ejecuta una sola vez, cuando se ejecuta el script.
function setup() {
    createCanvas(1000, 1000);
  }
  //La funcion draw se ejecuta por siempre
  function draw() {
    background(255,100,0);
    rect(x,y,ancho,alto);
    // ? significa entonces
    // : significa sino
    aux++;
    if(aux<98){
    y = y < 100 ? y + 1 : 99;
    } if(aux>=98 && aux < 296){
    x = x < 100 ? x + 1 : 99;
    }if(aux>=197 && aux< 296){
        
    y = y > 0 ? y - 1 : 1;
    }if(aux>=296 && aux < 395){
        
    x = x > 0 ? x -1 : 1;
    }if(aux==395){
        cont++;
    }if (cont >= 2){
        ancho = ancho < 100 ? ancho + 1 : 99;
        alto = alto < 100 ? alto + 1 : 99;

    }if(aux>=464){
        cont = 1;
        ancho = ancho > 20 ? ancho -1 : 20;
        alto = alto > 20 ? alto -1 : 20;
    }if(aux>=534){
        aux=1;

}
}