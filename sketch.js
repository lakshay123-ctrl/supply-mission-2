var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box2;
var ground,box1,box3,box4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zombie_jpg=loadImage("download.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2,200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	box1 = Bodies.rectangle(width/2,200,10,10 ,{isStatic:true});
	World.add(world,box1);


	box2 = new Box(400,640,100,20);
	World.add(world,box2);

	box3 = new Box(390,640,20,100);
	World.add(world,box3);

	box4 = new Box(410,640,20,100);
	World.add(world,box4);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	zombiegroup = createGroup();

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x = box1.position.x
  packageSprite.y = box1.position.y
  box2.display();
  box3.display();
  box4.display();
 

  
  
  drawSprites();

  keyPressed();

  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
  Body.setStatic(box1,false);
  }
}

