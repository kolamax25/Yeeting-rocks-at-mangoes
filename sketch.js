
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var gameState = "onSling"
function preload()
{
	boyImg = loadImage("sprites/boy.png");
	treeImg= loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,680,1600,40);
	stone = new Stone(96, 420, 40, 40)
	mango1 = new Mango(872, 234)
	mango2 = new Mango(1038, 257)
	mango3 = new Mango(947, 185)
	mango4 = new Mango(743, 254)
	mango5 = new Mango(824, 117)
	mango6 = new Mango(927, 75)
	mango7 = new Mango(1017, 151)
	slingshot = new SlingShot(stone.body,{x:96, y:420});
	//tree = new Tree(900, 350, 500, 700)
}


function draw() {
	
	  background(0);
	  
	Engine.update(engine);

	detectCollision(stone, mango1)
	detectCollision(stone, mango2)
	detectCollision(stone, mango3)
	detectCollision(stone, mango4)
	detectCollision(stone, mango5)
	detectCollision(stone, mango6)
	detectCollision(stone, mango7)
	


	ground.display();
	imageMode(CENTER)
	image(boyImg, 200, 550, 350, 550)
	image(treeImg, 900, 350, 500, 700);
	stone.display();
	//tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	
	slingshot.display();
	text(mouseX+","+mouseY,mouseX,mouseY)
}

function detectCollision(lstone, lmango){

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if(distance <= lmango.r + lstone.r ){
		Matter.Body.setStatic(lmango.body, false)
	}
}



function mouseDragged(){
    
    if (gameState === "onSling" ){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY });

    
    }
}


function mouseReleased(){
    slingshot.fly();
   gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){

		Matter.Body.setPosition(stone.body, {x: 96 , y: 420 });
		slingshot.attach(stone.body);
		
		gameState = "onSling"
	}
}