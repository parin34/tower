class Polygon{

    constructor(x,y){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.5
        }
    
        this.body=Bodies.circle(x,y,20,options);
        this.r=20
    
        this.image = loadImage("polygon.png");
        World.add(world,this.body);
    
        }
        display(){
    
            var pos=this.body.position
            var angle=this.body.angle
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            imageMode(CENTER);
            
            image(this.image,0,0,this.r*2,this.r*2);
            pop();
    
        }


}