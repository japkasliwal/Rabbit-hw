var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var apple
var score = 0;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples()
  drawSprites();
  rabbit.x=World.mouseX
  fill("white")
  text("Score:"+score, 300,20)
}
function spawnApples(){
if (frameCount%70==0){
  apple = createSprite(Math.round(random(50,350)),70,20,20)
  apple.addImage("ap",appleImg)
  apple.scale=0.1
  apple.velocityY=7
  if (apple.isTouching(rabbit)){

score=score+1







  }


}

}