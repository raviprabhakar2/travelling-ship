var ship ,ship_running,edges ;
var seaImage ;

function preload(){
seaImage = loadImage("sea.png")
shipImage = loadAnimation("ship-1.png","ship-2.png","ship3.png","ship4.png");

}


function setup(){
  createCanvas(400,400);
sea = createSprite(300,180,1000,20)
sea.x = sea.width/2
sea.addImage(seaImage)


ship = createSprite(50,160,20,50);
ship.addAnimation("running",ship_running);
edges = createEdgeSprites();

ship.scale = 0.5;
ship.x = 50;
}

function draw() {
  background("blue"); 


if (sea.x < 0){
sea.x = sea.width/2
sea.velocityX = -3
}

if (keyDown("space")){
  ship.velocityY = -10 ;
}
  ship.velocityY = ship.velocityY + 0.5 ;

  ship.collide(sea)
  drawSprites() ;
 
}
