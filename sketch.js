
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1;
var ball;

function preload()
{
  binImg = loadImage("images/bin.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(600,330,10,100)
	bin2 = new Bin(700,330,10,100)
  bin3 = new Bin(650,360,100,10)

  ground = new Ground(400,380,1600,30)

	ball = new Ball(100,300)

	Engine.run(engine);
  
}


function draw() {
  background(246);
  /*bin1.display()
  bin2.display()
  bin3.display()*/
  imageMode(CENTER)
  image(binImg,650,315,100,100)
  ground.display()
  ball.display()
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-55})
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-10,y:0})
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:0})
  }
}


