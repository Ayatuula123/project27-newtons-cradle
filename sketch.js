var roof,rofe,bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,bobobject6,bobobject7,bobobject8,bobobject9,bobobject10;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;


function setup() {
	createCanvas(1000, 700);



	engine = Engine.create();
	world = engine.world;

	Roof = new Roof(350,100,300,30);
	world.add(world,Roof);

	bobobject1 = new Bob(250,300);
	bobobject2 = new Bob(300,300);
	bobobject3 = new Bob(350,300);
	bobobject4 = new Bob(400,300);
	bobobject5 = new Bob(450,300);


	Rope1 = new Rope(bobobject1.body,roof.body,-100,0);
	world.add(world,rope1);

	Rope2 = new Rope(bobobject2.body,roof.body,-50,0);
	world.add(world,rope2);

	Rope3 = new Rope(bobobject3.body,roof.body,00,0);
	world.add(world,rope3);

    Rope4 = new Rope(bobobject4.body,roof.body,+50,0);
	world.add(world,rope4);

    Rope5 = new Rope(bobobject5.body,roof.body,+100,0);
	world.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  background("white");
  engine.update(engine);

  Roof.display();


  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();


  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keycode===32){
matter.body .addforce(bobobject1.body,bobobject1.body.position,{x:730,y:0});

  }

}