var r1,r2,r3
function setup() {
  createCanvas(800,400);
 r1=createSprite(400, 200, 50, 50);
r2=createSprite(400,300,50,50);
r3=createSprite(400,100,50,50);
r4 = createSprite(100,100,50,50);
r3.velocityX=-5;
r4.velocityX=5;
r3.shapeColor="orange";
r4.shapeColor="blue";
}

function draw() {
  r1.x=World.mouseX;
  r1.y=World.mouseY;
  background("green");  
  //ALGORITHM 1: CHANGE COLORS AFTER DETETCING COLLISION
  if(r1.x-r2.x< r1.width/2+ r2.width/2 &&
    r2.x-r1.x<r1.width/2+ r2.width/2 &&
    r1.y-r2.y< r1.height/2+ r2.height/2 &&
    r2.y-r1.y<r1.height/2+ r2.height/2  ){
   r1.shapeColor="red";
   r2.shapeColor="red";
  }
  else{
  r1.shapeColor="grey";
   r2.shapeColor="grey"; 
  }
  //ALGORITHM 2: BOUNCE OFF IF THEY R TOUCHING EACH OTHER.
  if(r3.x-r4.x< r3.width/2+ r4.width/2 &&
    r4.x-r3.x<r3.width/2+ r4.width/2 &&
    r3.y-r4.y< r3.height/2+ r4.height/2 &&
    r4.y-r3.y<r3.height/2+ r4.height/2  ){
   r3.velocityX=(-1)* r3.velocityX;
   r4.velocityX=(-1)* r4.velocityX;
    }

  
  drawSprites();
}