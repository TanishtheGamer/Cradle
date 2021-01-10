
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob;
var rope;
var roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;


    roof = new Roof(600, 700, 700, 10);
    platform = new Roof(600, 700, 700, 10);
    bob1 = new Bob(600, 500, 70, 70);
    bob2 = new Bob(520, 500, 70, 70);
    bob3 = new Bob(400, 500, 70, 70);
	bob4 = new Bob(300, 500, 70, 70);
	bob5 = new Bob(200, 500, 70, 70);
	rope1 = new Rope(600, 500, 70, 70);
    rope2 = new Rope(520, 500, 70, 70);
    rope3 = new Rope(400, 500, 70, 70);
	rope4 = new Rope(300, 500, 70, 70);
	rope5 = new Rope(200, 500, 70, 70);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



