class snow {
    constructor(x,y,diameter){
    var options={
                 isStatic:false,                       
               //  restitution:0.1,
               // friction:0.0001
               density:0.01,
               friction:0.5
                
    }
    this.body = Bodies.circle(x,y,3,options)
    this.diameter=diameter;
    
    //this.image=loadImage("paper.png");
    this.image= loadImage("snow5.webp");
    World.add(world,this.body)
    }
   updateY(){
    if(this.body.position.y>800){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
    }
    display(){
     var angle=this.body.angle
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(angle);
    imageMode(CENTER);
     
    image(this.image,0,0,20,20);
     pop();
     }
    }
      
    //
    