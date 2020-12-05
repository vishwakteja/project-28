
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var ground, boy, tree , stone, sling, mango1, mango2, mango3, mango4, mango5, mango6
, mango7, mango8, mango9, mango10, mango11, mango12;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground= new Ground(650, 590, 1300, 20 )
   stone=new  Stone(1040, 472, 20, 20)
   sling= new SlingShot(stone.body, {x:1040, y:472})
   boy= new Boy(1100, 530, -190, -260)
   tree=new Tree(200, 310, 400, 600 )
   mango1=new Mango(250, 100, 40, 40)
   mango2=new Mango(200, 100, 40, 40)
   mango3=new Mango(250, 150, 40, 40)
   mango4=new Mango(140, 150, 40, 40)
   mango5=new Mango(100, 200, 40, 40)
   mango6=new Mango(100, 300, 40, 40) 
   mango7=new Mango(280, 130, 40, 40)
   mango8=new Mango(150, 180, 40, 40)
   mango9=new Mango(250, 200, 40, 40)
   mango10=new Mango(140, 220, 40, 40)
   mango11=new Mango(100, 100, 40, 40)
   mango12=new Mango(140, 80, 40, 40) 
   
   keyPressed();
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  ground.display();
  stone.display();
  sling.display();  
  tree.display();
  boy.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
 mango11.display();
 mango12.display();

 
   
}

function mouseDragged()  {
  Matter.Body.setPosition(stone.body , {x:mouseX, y:mouseY})
}
function mouseReleased() {

sling.fly();
}

function keyPressed(){
if(keyCode === 32){
  matter.body.setPosition(stone.body, {x: 1040, y: 472})
  launcher.attach(stone.body)
}
   
}

