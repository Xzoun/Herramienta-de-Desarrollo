export class cuerpoPropiedades {
    constructor() {
        this.cabezaposX = 150,
        this.cabezaposY = 150,
        this.vx = 10,
        this.vy = 0; 
        this.direccion = 0;
    }
    rendercabeza(ctx){
        ctx.fillStyle = "#328618"
        ctx.fillRect(this.cabezaposX, this.cabezaposY, 10, 10)
    }
    render(ctx) {
        ctx.fillStyle = "#3dcc12"
        ctx.fillRect(this.cabezaposX, this.cabezaposY, 10, 10)
    }
    mover(){
        if (this.direccion === 2) { this.vx = 10; this.vy = 0; }    
            else if (this.direccion === 1){ this.vy = -10; this.vx = 0; }
            else if (this.direccion === 3) { this.vy = 10; this.vx = 0; }
            else if (this.direccion === 0) { this.vx = -10; this.vy = 0; }
            this.cabezaposX += this.vx;
            this.cabezaposY += this.vy;
    }
}

export function cuadricula(ctx) {
    ctx.linewidth = 1;
    let ax = 0, bx = 0, ay = 0, by = 300;
    ctx.beginPath();
    for (let i = 10; i < 300; i += 10) {
        ax = i,
            bx = i;
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
    }
    ctx.stroke()
    ctx.linewidth = 1;
    ax = 0, bx = 300, ay = 0, by = 0;
    ctx.beginPath();
    for (let i = 10; i < 300; i += 10) {
        ay = i,
        by = i;
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
    }
    ctx.stroke()
}
    















