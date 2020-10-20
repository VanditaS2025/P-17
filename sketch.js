
var ball, ball_image, paddle, paddle_image;

function preload() {
  
  ball_image = loadAnimation ("ball.png");
  
  paddle_image = loadAnimation ("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball = createSprite (200, 200, 50, 50);
  ball.addAnimation ("ball", ball_image);
  ball.velocityX = 9;
  ball.velocityY = 5;
  
  paddle = createSprite (390, 250, 100, 20);
  paddle.addAnimation ("paddle", paddle_image)
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges = createEdgeSprites(); 
  
  ball.bounceOff(edges[0]);  
   
  ball.bounceOff(edges[2]);  
   
  ball.bounceOff(edges[3]); 
   
 if (ball.bounceOff([paddle])){
   ball.velocityY= Math.round(random(3, 7));
   console.log(ball.velocityY);
 }  
  
  
  
  
  
  
 
  
 
  
 
 
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y +20;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = Math.round(random(3, 7));
}

