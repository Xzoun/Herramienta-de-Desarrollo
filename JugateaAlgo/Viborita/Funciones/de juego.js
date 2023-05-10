export class cuerpoPropiedades {
    constructor() {
        this.x = 150;
        this.y = 150;
        this.vx = 10;
        this.vy = 0;
        this.direccion = 0;
        this.ojoX = 0
        this.ojoY = 0
        this.ojoPar = 0
    }

    rendercabeza(ctx) {
        ctx.save()
        ctx.fillStyle = "#bcff1f"
        ctx.fillRect(this.x, this.y, 10, 10)
        ctx.lineWidth = 2
        ctx.strokeRect(this.x, this.y, 10, 10)
        ctx.strokeStyle = "black"
        ctx.restore()
        switch (this.direccion) {
            case 0:
                this.ojoX = this.x + 2
                this.ojoPar = this.y + 2
                this.ojoY = this.y + 6
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojoX, this.ojoPar, 2, 2);
                ctx.fillRect(this.ojoX, this.ojoY, 2, 2);
                break;
            case 1:
                this.ojoX = this.x + 2
                this.ojoPar = this.x + 6
                this.ojoY = this.y + 2
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojoX, this.ojoY, 2, 2);
                ctx.fillRect(this.ojoPar, this.ojoY, 2, 2);
                break;
            case 2:
                this.ojoX = this.x + 6
                this.ojoPar = this.y + 2
                this.ojoY = this.y + 6
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojoX, this.ojoPar, 2, 2);
                ctx.fillRect(this.ojoX, this.ojoY, 2, 2);
                break;
            case 3:
                this.ojo1X = this.x + 6
                this.ojo2X = this.x + 2
                this.ojo1Y = this.y + 6
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojo1X, this.ojo1Y, 2, 2);
                ctx.fillRect(this.ojo2X, this.ojo1Y, 2, 2);
                break;
        }
    }

    render(ctx) {

        ctx.fillStyle = "#bcff1f"
        ctx.fillRect(this.x, this.y, 10, 10)
        ctx.save()
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.strokeRect(this.x, this.y, 10, 10)
        ctx.restore()
    }

    mover() {
        if (this.direccion === 2) { this.vx = 10; this.vy = 0; }
        else if (this.direccion === 1) { this.vy = -10; this.vx = 0; }
        else if (this.direccion === 3) { this.vy = 10; this.vx = 0; }
        else if (this.direccion === 0) { this.vx = -10; this.vy = 0; }
        this.x += this.vx;
        this.y += this.vy;
    }
}

export class zona {

    constructor() {
        this.xz = -30
        this.yz = -30
        this.nz = 0
        this.mz = 0
    }

    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "black"        
        ctx.font="bold 24px verdana"
        let posiciontextoX = this.xz+10
        let posiciontextoY = this.yz+30
        ctx.textAlign="start"
        ctx.fillText("Bunker",posiciontextoX,posiciontextoY)
        ctx.fillStyle = "rgba(92, 226, 222, 0.6)" 
        ctx.fillRect(this.xz, this.yz, this.nz, this.mz)
        ctx.lineWidth = 2
        ctx.rect(this.xz, this.yz, this.nz, this.mz)
        ctx.stroke();
    }

    crearBonus(cont) {
        switch (cont) {
            case 1:
                this.xz = (Math.floor(Math.random() * 18) * 10)
                this.yz = (Math.floor(Math.random() * 18) * 10)
                this.nz = 120;
                this.mz = 120;
                break;
            case 2:
                this.nz = 0;
                this.mz = 0;
                this.xz = -30
                this.yz = -30
                break;
            case 3:
                this.xz = (Math.floor(Math.random() * 18) * 10)
                this.yz = (Math.floor(Math.random() * 18) * 10)
                this.nz = 60;
                this.mz = 60;
                break;
            case 4:
                this.nz = 0;
                this.mz = 0;
                this.xz = -30
                this.yz = -30
                break;
        }
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




















