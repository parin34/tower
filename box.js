class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          density: 0.5,
          friction: 0.3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255
    }

    score(){
      if (this.Visiblity<0 && this.Visiblity>-505){
        score = score+1;
      }
    }

    display(){
      var pos =this.body.position;
      if(this.body.speed <2 ){
        push();
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
  
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
       pop();
      
      
    }
  }
    
    }

