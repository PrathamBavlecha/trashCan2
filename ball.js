class Ball{
    constructor(x,y){
        var option = {
            isStatic: false,
            restitution:0.3,
            friction:1,
            density: 1.2    
        }
        this.body = Bodies.circle(x,y,20,option)
        this.image = loadImage("images/paper.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        imageMode(RADIUS)
        push ()
        translate (pos.x,pos.y)
        rotate (angle)
        image(this.image,0,0,20,20)
        pop ()
    }
}