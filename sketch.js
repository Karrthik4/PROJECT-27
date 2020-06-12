const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	 roof = new Roof(410,100,550,40);

	 bobObject1 = new Bob(250,480,80);
	 bobObject2 = new Bob(330,480,80);
	 bobObject3 = new Bob(410,480,80);
	 bobObject4 = new Bob(490,480,80);
   bobObject5 = new Bob(570,480,80);
   

   rope1 = new Rope(bobObject1.body, roof.body, -160, 0);
   rope2 = new Rope(bobObject2.body, roof.body, -80, 0);
	 rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
   rope4 = new Rope(bobObject4.body, roof.body, 80, 0);
   rope5 = new Rope(bobObject5.body, roof.body, 160, 0);

   Engine.run(engine);
}


function draw() {
  background("silver");
  Engine.update(engine);

  roof.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyforce(bobObject1.body,bobObject1.body.position,{x:100,y:100})
  }
}