export class cuerpoPropiedades {
    constructor() {
        this.cabezaposX = 150;
        this.cabezaposY = 150;
        this.vx = 10;
        this.vy = 0;
        this.direccion = 0;
        this.ojoX = 0
        this.ojoY = 0
        this.ojoPar = 0
    }

    rendercabeza(ctx) {
        ctx.save()
        ctx.fillStyle = "#7ba715"
        ctx.fillRect(this.cabezaposX, this.cabezaposY, 10, 10)
        ctx.lineWidth = 2
        ctx.strokeRect(this.cabezaposX, this.cabezaposY, 10, 10)
        ctx.strokeStyle = "black"
        ctx.restore()
        switch (this.direccion) {
            case 0:
                this.ojoX = this.cabezaposX + 2
                this.ojoPar = this.cabezaposY + 2
                this.ojoY = this.cabezaposY + 6
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojoX, this.ojoPar, 2, 2);
                ctx.fillRect(this.ojoX, this.ojoY, 2, 2);
                break;
            case 1:
                this.ojoX = this.cabezaposX + 2
                this.ojoPar = this.cabezaposX + 6
                this.ojoY = this.cabezaposY + 2
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojoX, this.ojoY, 2, 2);
                ctx.fillRect(this.ojoPar, this.ojoY, 2, 2);
                break;
            case 2:
                this.ojoX = this.cabezaposX + 6
                this.ojoPar = this.cabezaposY + 2
                this.ojoY = this.cabezaposY + 6
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojoX, this.ojoPar, 2, 2);
                ctx.fillRect(this.ojoX, this.ojoY, 2, 2);
                break;
            case 3:
                this.ojo1X = this.cabezaposX + 6
                this.ojo2X = this.cabezaposX + 2
                this.ojo1Y = this.cabezaposY + 6
                ctx.fillStyle = "black"
                ctx.fillRect(this.ojo1X, this.ojo1Y, 2, 2);
                ctx.fillRect(this.ojo2X, this.ojo1Y, 2, 2);
                break;
        }
    }

    render(ctx) {

        ctx.fillStyle = "#bcff1f"
        ctx.fillRect(this.cabezaposX, this.cabezaposY, 10, 10)
        ctx.save()
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.strokeRect(this.cabezaposX, this.cabezaposY, 10, 10)
        ctx.restore()
    }

    mover() {
        if (this.direccion === 2) { this.vx = 10; this.vy = 0; }
        else if (this.direccion === 1) { this.vy = -10; this.vx = 0; }
        else if (this.direccion === 3) { this.vy = 10; this.vx = 0; }
        else if (this.direccion === 0) { this.vx = -10; this.vy = 0; }
        this.cabezaposX += this.vx;
        this.cabezaposY += this.vy;
    }
}

export class zona {

    constructor() {
        this.x1 = 0
        this.y1 = 0
        this.n1 = 0
        this.m1 = 0
    }

    render(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(92, 226, 222, 0.6)"
        ctx.fillRect(this.x1, this.y1, this.n1, this.m1)
        ctx.lineWidth = 2
        ctx.rect(this.x1, this.y1, this.n1, this.m1)
        ctx.stroke();
    }

    crearBonus(cont) {
        switch (cont) {
            case 1:
                this.x1 = (Math.floor(Math.random() * 18) * 10)
                this.y1 = (Math.floor(Math.random() * 18) * 10)
                this.n1 = 120;
                this.m1 = 120;
                break;
            case 2:
                this.n1 = 0;
                this.m1 = 0;
                break;
            case 3:
                this.x1 = (Math.floor(Math.random() * 18) * 10)
                this.y1 = (Math.floor(Math.random() * 18) * 10)
                this.n1 = 60;
                this.m1 = 60;
                break;
            case 4:
                this.n1 = 0;
                this.m1 = 0;
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




















