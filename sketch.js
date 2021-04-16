var timmehTheSnake
var scl = 20;
var food;
var foodImg; 
var snakeLeft,snakeRight,snakeUp,snakeDown
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag = 1;

function preload() {
foodImg = loadImage ("cupcake.png");
snakeDown = loadImage ("snake head.png");
snakeLeft = loadImage ("snake_left.png");
snakeRight = loadImage ("snake_right.png");
snakeUp = loadImage("snake_up.png");
}

function setup() {
  createCanvas(400, 400);
  timmehTheSnake = new Snake()
  frameRate(10)
  pickLocation();
}
function draw() {
  background("black");
  if(timmehTheSnake.eat(food)) {
    pickLocation();
  } 
  timmehTheSnake.update();
  timmehTheSnake.show();
  timmehTheSnake.death();

  //fill(255,0,0);
  //rect(food.x, food.y, scl, scl);
  image(foodImg, food.x, food.y, scl, scl);
}

function keyPressed () {
  if(keyCode === UP_ARROW){
    timmehTheSnake.dir(0,-1)
    flag = 4;
  }
  else if(keyCode === DOWN_ARROW){
    console.log("Working");
    timmehTheSnake.dir(0,1);
    flag = 3;
  }
  else if(keyCode === LEFT_ARROW){
    timmehTheSnake.dir(-1,0);
    flag = 2;
  }
  else if(keyCode === RIGHT_ARROW){
    timmehTheSnake.dir(1,0);
    flag = 1;
  }

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  console.log("coloums" + cols);
  console.log("rows" + rows);
  food = createVector(floor(random(cols)),floor((random(rows))))
  food.mult(scl);
  console.log("food" + food);
}