
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);

	


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground (500,100,1000,10)

	bob1 = new bob (170,410,60);
	bob2 = new bob (230,410,60);
	bob3 = new bob (290,410,60);
	bob4 = new bob (350,410,60);
	bob5 = new bob (410,410,60);

	rope1 = new rope (170,250,3,300);
	rope2 = new rope (230,250,3,300);
	rope3 = new rope (290,250,3,300);
	rope4 = new rope (350,250,3,300);
	rope5 = new rope (410,250,3,300);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 ground1.display ();
 bob1.display ();
 bob2.display ();
 bob3.display ();
 bob4.display ();
 bob5.display ();

 rope1.display ();
 rope2.display ();
 rope3.display ();
 rope4.display ();
 rope5.display ();

 
}

function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
}


