var movingRect, fixedRect, rect1, rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 80);
  movingRect = createSprite(400,200,80,30);
  
  rect1 = createSprite(50,100,50,50);
  rect1.debug = true;
  rect1.velocityX = 3;
  
  rect2 = createSprite(350,100,50,50);
  rect2.debug = true;
  rect2.velocityX = -3;
  
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";


  
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.width/2 + movingRect.width/2 > movingRect.x - fixedRect.x && fixedRect.width/2 + movingRect.width/2 > fixedRect.x - movingRect.x && fixedRect.height/2 + movingRect.height/2 > movingRect.y - fixedRect.y && fixedRect.height/2 + movingRect.height/2 > fixedRect.y - movingRect.y){
     movingRect.shapeColor = "purple";
     fixedRect.shapeColor = "purple";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  if(rect1.width/2 + rect2.width/2 > rect1.x - rect2.x && rect1.width/2 + rect2.width/2 > rect2.x - rect1.x){
    rect1.velocityX = rect1.velocityX * (-1);
    rect2.velocityX = rect2.velocityX * (-1);
  }

  if(rect1.height/2 + rect2.height/2 > rect1.y - rect2.y && rect1.height/2 + rect2.height/2 > rect2.y - rect1.y){
    rect1.velocityY = rect1.velocityY * (-1);
    rect2.velocityY = rect2.velocityY * (-1);
  }
  

  drawSprites();
}