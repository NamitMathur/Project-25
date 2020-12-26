
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3;
var paper,ground;

function preload()
{
	dustbinImg=loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Dustbin(1000,580,200,20);	
	bin2 = new Dustbin(900,470,20,220);
	bin3 = new Dustbin(1100,470,20,220);

	paper = new Paper(100,560,70);
	ground = new Ground(600,600,1200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  bin1.display();
  bin2.display();
  bin3.display();
  paper.display();
  ground.display();

  imageMode(CENTER)
  image(dustbinImg,1000,475,220,230)
 
}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});
	}
}


