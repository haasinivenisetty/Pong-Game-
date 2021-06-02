var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimage=loadImage("ball.png")
  paddleimage=loadImage("paddle.png")

}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball=createSprite (40,200,20,20)
  ball.addImage(ballimage)
  ball.velocityX=9
  paddle=createSprite(350,200,20,100)
  paddle.addImage(paddleimage)
  
  

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  edges=createEdgeSprites();
   ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  paddle.collide(edges)
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(paddle,F1)

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 paddle.velocityY = 0
  /* Prevent the paddle from going out of the edges */ 
  if(keyDown(UP_ARROW)) {
    paddle.velocityX = 0;
    paddle.velocityY = -5;
  }
  
   if(keyDown(DOWN_ARROW)) {
    paddle.velocityX = 0;
    paddle.velocityY = 5;
  }
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
function F1(){
 ball.velocityY=random(-8,8) 
}
