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

  // Draw the Egyptian Key design
  drawEgyptianKey(centerX, centerY, size);
}

function drawEgyptianKey(centerX, centerY, size) {
  // Draw the outer rectangle
  rectMode(CENTER);
  rect(centerX, centerY, size, size * 0.8);

  // Draw the inner rectangle
  const innerSize = size * 0.6;
  rect(centerX, centerY, innerSize, innerSize * 0.8);

  // Draw the diagonal lines
  const lineOffset = innerSize * 0.15;
  line(centerX - innerSize / 2, centerY - innerSize * 0.4, centerX - innerSize / 2 - lineOffset, centerY - innerSize * 0.4 - lineOffset);
  line(centerX + innerSize / 2, centerY - innerSize * 0.4, centerX + innerSize / 2 + lineOffset, centerY - innerSize * 0.4 - lineOffset);
  line(centerX - innerSize / 2, centerY + innerSize * 0.4, centerX - innerSize / 2 - lineOffset, centerY + innerSize * 0.4 + lineOffset);
  line(centerX + innerSize / 2, centerY + innerSize * 0.4, centerX + innerSize / 2 + lineOffset, centerY + innerSize * 0.4 + lineOffset);
}
