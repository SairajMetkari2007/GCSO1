var car ,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

speed =random(40,180);
weight = random(600,1400);


  car = createSprite(40, 200, 50, 50);
  car.velocityX=speed; 

  wall=createSprite(750,200,50,height/2);
}

function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2){
   car.velocityX=0;
   var deformation=0.5*weight*speed*speed/22509;
   
   if(deformation>160){
     car.shapeColor=color("green");
   }

   if(deformation>180 && deformation>100){
    car.shapeColor=color("red");
  }

  if( deformation<100){
    car.shapeColor=color("yellow");
  }

  }


  drawSprites();
}