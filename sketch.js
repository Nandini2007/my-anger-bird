
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bird = new Bird(70,70);

	box1 = new Box(500,690) ; 
	box2 = new Box(500,620) ; 
	box3 = new Box(650,690) ; 
	box4 = new Box(650,620) ; 

	log1 = new Log(500,450,200,20,PI)
	log2 = new Log(500,530,200,20,PI)
	log3 = new Log(500,600,200,20,PI)
	log4 = new Log(500,670,200,20,PI) 
	log5 = new Log(500,740,200,20,PI)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");

  bird.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();

  fill("red") 
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();

  drawSprites();
 
}



