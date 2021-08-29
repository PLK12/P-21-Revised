
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myWorld, myEngine;
var ball;
var ground;
var wall1;
var wall2;

function setup() {
	createCanvas(1000, 500);
	
	myEngine = Engine.create();
	myWorld = myEngine.world;

	fill("white");
	var options = 
	{
		restitution: 0.3,
		friction:0,
		density: 1.2
	}
	ball = Bodies.circle(200,160,13,options);

	World.add(myWorld, ball);

	ground = new Ground(width/2,450, width, 20);
	
	wall1 = new Ground(750,380,20,120);
	wall2 = new Ground(900,380,20,120);



	//Create the Bodies Here.

	//Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine);

  ellipse(ball.position.x, ball.position.y,20);
  
  ground.display();

  wall1.display();
  wall2.display();

  keyPressed();



  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Body.applyForce(ball, {x:0, y:0}, {x:1, y:1});
	}
}



