export class fecha {
    constructor() {
        this.date = new Date();
        this.dia = this.date.getDay();
        // this.mes = this.date.getMonth();
        // this.year = this.date.getFullYear();
        // this.hora = this.date.getHours();
        // this.min = this.date.getMinutes();
        // this.sec = this.date.getSeconds();
    }

 hoy() {
    const diahoy = "";
    switch (this.dia) {
        
        case 0:
            diahoy == "Domingo";
            break;
        case 1:
            diahoy == "Lunes";
            break;
        case 2:
            diahoy == "Martes";
            break;
        case 3:
            diahoy == "Miércoles";
            break;
        case 4:
            diahoy == "Jueves";
            break;
        case 5:
            diahoy == "Viernes";
            break;
        case 6:
            diahoy == "Sábado";
            break;
    }
    return diahoy;
}
}


