var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=180; k = k + 180) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=280; k = k + 280) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=380; k = k + 380) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=580; k = k + 580) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=680; k = k + 680) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
   for (var k = 0; k <=800; k = k + 800) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 0; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects
  particle1 = new Particle(10,10);
  particle2 = new Particle(60,20);
  particle3 = new Particle(110,30);
  particle4 = new Particle(170,40);
  particle5 = new Particle(230,50);
  particle6 = new Particle(290,60);
  particle7 = new Particle(350,70);
  particle8 = new Particle(410,80);
  particle9 = new Particle(470,90);
  particle10 = new Particle(530,100);
  particle11 = new Particle(590,110);
  particle12 = new Particle(650,120);
  particle13 = new Particle(710,130);
  particle14 = new Particle(770,140);
  particle15 = new Particle(830,150);
  particle16 = new Particle(890,160);
  particle17 = new Particle(950,170);
  particle18 = new Particle(1010,180);
  particle19 = new Particle(1070,190);
  particle20 = new Particle(1130,200);
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle13.display();
  particle14.display();
  particle15.display();
  particle16.display();
  particle17.display();
  particle18.display();
  particle19.display();
  particle20.display();
 
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}