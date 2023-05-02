
var box
function setup() {
  createCanvas(400,400);
box = createSprite(200,200,30,30)  
}

function draw() 
{
  background(30);
  if(keyDown('d')){
   box.velocityX = 2
  }
  if(keyDown('a')){
    box.velocityX = -2
  }
  if(keyDown('w')){
   box.velocitY = 2
  }
  if(keyDown('s')){
    box.velocitY = -2
  }
  drawSprites();

}




