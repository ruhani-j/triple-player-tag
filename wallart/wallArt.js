// TODO: Create setup() function
function setup() {
  // Inside the setup() function:
  // TODO: Create canvas 500px wide and 500px high
  createCanvas(500, 500);
  // TODO: Draw horizontal and vertical guidelines
  // moved to draw
} // end setup
// TODO: Create wall drawing inside draw() function

function draw() {
  // Inside the draw() function:
  // Draw parallel lines:
  // TODO: Set stroke color and weight
  stroke(127); // Set stroke to a gray color
  strokeWeight(10); // Set stroke weight to 10 pixels
  // TODO: Use a for loop to draw 10 vertical lines
  for (let posX = 25; posX < width / 2; posX += 25) {
    line(posX, 0, posX, height / 2); // Draw lines from top to bottom of the first quadrant
  }
  // Draw polka dots:
  // TODO: Set no stroke and fill color
  noStroke();
  fill("#ffd700");
  // TODO: Use nested for loops to draw a grid of circles
  for (let posX = width / 2 + 15; posX < width; posX += 25) {
    for (let posY = 0; posY < height / 2; posY += 25) {
      // TODO: Offset y positions of every other column by 10 pixels
      if (posX % 50 === 0) {
        // Check if posX is even
        ellipse(posX, posY + 10, 10, 10); // Shift every other column by 10px
      } else {
        ellipse(posX, posY, 10, 10); // Regular position for odd columns
      }
    }
  }
  // Draw checkered squares:
  // TODO: Set fill color
  fill(255, 0, 0);
  // TODO: Use nested for loops to draw rows of squares
  // TODO: Offset y positions of every other column by 25 pixels
  for (let posX = 0; posX < width / 2; posX += 25) {
    for (let posY = height / 2 + 10; posY < height; posY += 50) {
      if (posX % 2 === 0) {
        square(posX, posY + 25, 25); // Even columns with offset
      } else {
        square(posX, posY, 25); // Odd columns
      }
    }
  }
  // Draw parallel diagonal lines:
  // TODO: Set stroke color and weight
  stroke(0, 0, 255); // Set stroke color to blue
  strokeWeight(10); // Set stroke weight to 10 pixels

  // TODO: Use a for loop to draw diagonal lines in the bottom-right quadrant
  for (let i = 0; i < 10; i++) {
    // Left half of the quadrant: lines drawn from the center to the left
    line(width / 2, height - i * 25, width / 2 + i * 25, height);
  }
  // Filling the other half of the quadrant:
  for (let i = 0; i < 10; i++) {
    // Right half of the quadrant: lines drawn from the center to the right
    line(width / 2 + i * 25, height / 2, width, height - i * 25);
  }
  // Draw borders:
  // TODO: Set stroke color
  stroke(0);
  // TODO: Draw horizontal and vertical guidelines
  line(width / 2, 0, width / 2, height); // vertical guideline
  line(0, height / 2, width, height / 2); // horizontal guideline
  // TODO: Draw borders around canvas
  line(0, 0, width, 0); // top border
  line(0, height, width, height); // bottom border
  line(0, 0, 0, height); // left border
  line(width, 0, width, height); // right border
} // end draw
