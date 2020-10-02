
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,Bin,paperBall;
function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground=new ground(400,350,800,20);
	paperBall=new paper(50,300,20);
	Bin1=new dustbin(450,330,200,20);
	Bin2=new dustbin(350,280,20,100);
	Bin3=new dustbin(550,280,20,100);
	

	
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  fill ("purple");
  paperBall.display();
  //console.log(paperBall);
  fill (255);
  Ground.display();

  fill("red")
  Bin1.display();
  Bin2.display();
  Bin3.display();
  drawSprites();
 
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

function keyPressed(){
	if(keyCode===UP_ARROW){
    
Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
	}
}
