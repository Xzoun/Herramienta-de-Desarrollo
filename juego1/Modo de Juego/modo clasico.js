export class crearComida{
    constructor(){
        this.x=Math.floor(Math.random()*30)*10
        this.y=Math.floor(Math.random()*30)*10
    }
    
    render(ctx){
        ctx.fillStyle = "yellow"
        ctx.fillRect(this.x,this.y,10,10)      
    }
    nuevacomida(){
        this.x=Math.floor(Math.random()*30)*10
        this.y=Math.floor(Math.random()*30)*10
    }
}
        
        
 


