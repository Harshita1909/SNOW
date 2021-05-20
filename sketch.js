//declaring physics engine 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//declaring background 
var bg;

//declaring snow
var Snow=[];
var MaxSnow=50

function preload(){
bg=loadImage("snow3.jpg")
}





function setup() {
  
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  //createSprite(400, 200, 50, 50);

  for(var i=0;i<MaxSnow;i++){
    Snow.push(new snow(random(0,800),random(0,800),80));
    
    }
    Engine.run(engine);
}

function draw() {
  background(bg); 
 //Snow[0].display();


  for(var i=0;i<MaxSnow;i++){
  Snow[i].display();
    console.log(i)
   Snow[i].updateY();
}

 // drawSprites();
}