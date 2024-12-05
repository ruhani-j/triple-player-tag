function setup() {
  createCanvas(500, 500);
  // moved to draw
} // end setup

function draw() {
  // Draw parallel lines:
  stroke(127); // gray
  strokeWeight(10);
  for (let posX = 25; posX < width / 2; posX += 25) {
    line(posX, 0, posX, height / 2);
  }

  // Draw polka dots:
  noStroke();
  fill("#ffd700");
  for (let posX = width / 2 + 15; posX < width; posX += 25) {
    for (let posY = 0; posY < height / 2; posY += 25) {
      if (posX % 50 === 0) {
        ellipse(posX, posY + 10, 10, 10); // offset every other column by 10px
      } else {
        ellipse(posX, posY, 10, 10);
      }
    }
  }

  // Draw checkered squares:
  fill(255, 0, 0);
  for (let posX = 25; posX < width / 2; posX += 25) {
    for (let posY = height / 2; posY < height; posY += 50) {
      square(posX, posY, 25);
    }
  }
  for (let posX = 50; posX < width / 2; posX += 50) {
    for (let posY = height / 2; posY < height; posY += 50) {
      square(posX, posY + 25, 25); // offset every other column by 25px
    }
  }

  // Draw parallel diagonal lines:
  stroke(0, 0, 255);
  strokeWeight(10);
  for (let i = 0; i < 10; i++) {
    line(width / 2, height - i * 25, width / 2 + i * 25, height); // left half
  }
  for (let i = 0; i < 10; i++) {
    line(width / 2 + i * 25, height / 2, width, height - i * 25); // right half
  }

  // Draw borders:
  stroke(0);
  line(width / 2, 0, width / 2, height); // vertical guideline
  line(0, height / 2, width, height / 2); // horizontal guideline
  line(0, 0, width, 0);           // top
  line(0, height, width, height); // bottom
  line(0, 0, 0, height);          // left
  line(width, 0, width, height);  // right
} // end draw
