function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();
}

function draw() {
  // Set the drawing properties
  strokeWeight(1);
  stroke(0);

  // Define the center point of the design
  const centerX = width / 2;
  const centerY = height / 2;

  // Define the size of the design
  const size = 200;

  // Draw the Greek Key design
  drawGreekKey(centerX, centerY, size);
}

function drawGreekKey(centerX, centerY, size) {
  // Draw the outer square
  rectMode(CENTER);
  rect(centerX, centerY, size, size);

  // Draw the inner square
  const innerSize = size / 2;
  rect(centerX, centerY, innerSize, innerSize);

  // Draw the horizontal lines
  const lineOffset = size / 4;
  line(centerX - lineOffset, centerY - innerSize / 2, centerX + lineOffset, centerY - innerSize / 2);
  line(centerX - lineOffset, centerY + innerSize / 2, centerX + lineOffset, centerY + innerSize / 2);

  // Draw the vertical lines
  const lineLength = size / 2;
  line(centerX - innerSize / 2, centerY - lineLength / 2, centerX - innerSize / 2, centerY + lineLength / 2);
  line(centerX + innerSize / 2, centerY - lineLength / 2, centerX + innerSize / 2, centerY + lineLength / 2);
}