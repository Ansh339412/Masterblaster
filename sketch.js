var car1 ,wall1,speed,weight
 





function setup() {
  car1= createSprite(50, 200, 50, 50);
 
  createCanvas(1600,400);
speed=random(55,80)
wall1=createSprite(1500,200,60,height/2);
car1.velocityX=speed;
}



function draw() {
  
  background(255,255,255);  
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX=0
    var deformation=createSprite=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car1.shapeColor=255.0,0;
    }
  }

drawSprites();
}