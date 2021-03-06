const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var stand;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var polygon;
var slingshot;

function setup() {
  var Canvas = createCanvas(900,500);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

  stand = new Ground(450,480,900,10);

 //level 1
  box1 = new Box(750,450,50,50);
  box2 = new Box(700,450,50,50);
  box3 = new Box(650,450,50,50);
  box4 = new Box(600,450,50,50);
  box5 = new Box(550,450,50,50);

  //level 2
  box6 = new Box(750,400,50,50);
  box7 = new Box(700,400,50,50);
  box8 = new Box(650,400,50,50);
  box9 = new Box(600,400,50,50);

  //level 3
  box10 = new Box(750,350,50,50);
  box11 = new Box(700,350,50,50);
  box12 = new Box(650,350,50,50);

  //level 4
  box13 = new Box(750,300,50,50);
  box14 = new Box(700,300,50,50);
  //level 5
  box15 = new Box(750,250,50,50);

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  stand.display();

  //level 1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  //level 2
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  //level 3
  box10.display();
  box11.display();
  box12.display();

  //level 4
  box13.display();
  box14.display();
  
  //level 5
  box15.display();

  stroke("blue");
  fill("black");
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20);

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}
