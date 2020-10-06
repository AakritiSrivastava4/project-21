var bullet, wall,thickness,speed,weight;
var damage=0;

function setup() {
  thickness=random(22,83);
  createCanvas(1600,400);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(100,200,80,10);
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.shapeColor=color(80,80,80);
 
}

function draw() {
  background(0,0,0);  
   
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    damage=(0.5* speed*speed*weight)/(thickness * thickness *thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if (damage<10) 
    {
      wall.shapeColor="green";
    }
  }
  else{
    wall.shapeColor=color(80,80,80);
  }
  
  drawSprites();
}
function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
  return true;
}
else {
  return false;
}

}
  
