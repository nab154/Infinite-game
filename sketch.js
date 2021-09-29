  
var towerImg, tower;
var doorImg, door, doorsGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("sky.png");
  doorImg = loadImage("bird-removebg-preview.png");
  ghostImg = loadImage("plane-removebg-preview.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  
}


function draw() {
  background(255);
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
      ghost.x = ghost.x-3;
    
    }
    if(keyDown("right_arrow")){
      ghost.x = ghost.x+3;
    
      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("space")){
      ghost.velocityY = -5;
   
      // write a code to move up when space arrow is pressed
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    if(tower.y > 400){
      tower.y = 300;

    }
      spawnDoors();

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity 
       
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
      if(ghost.y > 600){
       ghost.destroy();
       gameState = "end"; 
      }
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    //add the random function
    //
    door.addImage(doorImg);
    door.scale = 0.05;
    door.velocityY = 1;

    //change the depth of the ghost and door
    ghost.depth = door.depth;
    ghost.depth+=1;
     

    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block
    door.lifetime=800;

    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    doorsGroup.add(door);
  }
}

