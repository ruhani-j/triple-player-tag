// 3-player game: 
// 1. Circle (controlled by mouse)
// 2. Heart (arrow keys)
// 3. Triangle (WASD keys)
// Heart and Triangle get points when they touch Player Circle for 1 second.
// Player Circle gets a point if it stays in the canvas for 5 seconds without touching anyone.

let heartX = 0;
let heartY = 0;
let heartColor;
let heartScore = 0;

let triangleX = 200;
let triangleY = 200;
let triangleAngle = 0;
let triangleColor;
let triangleScore = 0;

let mouseScore = 0;
let lastHeartTouchTime = 0;
let lastTriangleTouchTime = 0;
let mouseTouched = false;

let idleTime = 5000; // 5 seconds for Player Circle to get a point
let touchTime = 1000; // 1 second for touching the circle to get a point
let lastIdleTime = 0; // Time for idle check for Player Circle

function setup() {
  createCanvas(500, 400);
  background(205, 230, 242);
  frameRate(50);
  
  // random colors for heart and triangle
  heartColor = color(random(255), random(255), random(255));
  triangleColor = color(random(255), random(255), random(255));
}

function draw() {
  // reset background
  background(205, 230, 242);
  
  // Player Circle (mouse)
  fill(mouseX / 2, mouseY / 3, (mouseX + mouseY) / 3); // Color based on mouse position
  ellipse(mouseX, mouseY, 15, 15);
  
  // draw heart
  fill(heartColor);
  noStroke();
  drawHeart(heartX + 100, heartY + 100, 20);

  // draw triangle
  fill(triangleColor);
  noStroke();
  push(); 
  translate(triangleX + 100, triangleY + 100); 
  rotate(triangleAngle); 
  triangle(-20, 20, 20, 20, 0, -20); 
  pop(); 

  // move heart with arrow keys
  if (keyIsDown(RIGHT_ARROW)) heartX += 5;
  if (keyIsDown(LEFT_ARROW)) heartX -= 5;
  if (keyIsDown(DOWN_ARROW)) heartY += 5;
  if (keyIsDown(UP_ARROW)) heartY -= 5;

  // move triangle with WASD keys
  if (keyIsDown(65)) triangleX -= 5; // A
  if (keyIsDown(68)) triangleX += 5; // D
  if (keyIsDown(87)) triangleY -= 5; // W
  if (keyIsDown(83)) triangleY += 5; // S
  
  // check if Player Circle touches heart or triangle
  if (dist(mouseX, mouseY, heartX + 100, heartY + 100) < 20) {
    if (millis() - lastHeartTouchTime > touchTime) {
      heartScore++;
      lastHeartTouchTime = millis();
    }
    mouseTouched = true;
  }

  if (dist(mouseX, mouseY, triangleX + 100, triangleY + 100) < 20) {
    if (millis() - lastTriangleTouchTime > touchTime) {
      triangleScore++;
      lastTriangleTouchTime = millis();
    }
    mouseTouched = true;
  }

  // if Player Circle stays in canvas for 5 seconds, it gets a point
  if (!mouseTouched && mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (millis() - lastIdleTime > idleTime) {
      mouseScore++;
      lastIdleTime = millis(); 
    }
  }

  // display the scores and instructions
  textSize(14);
  fill(0);
  text('Heart Score: ' + heartScore, 10, 20);
  text('Triangle Score: ' + triangleScore, 10, 40);
  text('Player Circle Score: ' + mouseScore, 10, 60);

  // Instructions (on the canvas)
  textSize(12);
  textAlign(LEFT);
  text('Controls:', 10, 80);
  text('Heart: Arrow Keys to Move, H to Change Color', 10, 95);
  text('Triangle: WASD to Move, T to Change Color, Y to Rotate', 10, 110);
  text('Player Circle: Move with Mouse, Wait 5s for a Point', 10, 125);
  text('Change Colors: H for Heart, T for Triangle', 10, 140);
  text('Rotate Triangle: Y', 10, 155);
  
  mouseTouched = false; // reset touch status
}

// draw heart
function drawHeart(x, y, size) {
  ellipse(x - size / 2, y, size, size); // left circle
  ellipse(x + size / 2, y, size, size); // right circle
  triangle(x - size, y, x + size, y, x, y + size * 1.5); // bottom triangle
}

// change colors and rotate
function keyPressed() {
  if (key === 'h' || key === 'H') heartColor = color(random(255), random(255), random(255));
  if (key === 't' || key === 'T') triangleColor = color(random(255), random(255), random(255));
  if (key === 'y' || key === 'Y') triangleAngle += PI / 12; // rotate triangle 15 degrees
}
