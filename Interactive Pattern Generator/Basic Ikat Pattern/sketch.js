function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop();   //causes the canvas to only be drawn once
}

function draw() {
  // Set the drawing properties
  strokeWeight(1);
  //noFill();  //disables filling the shape
  noStroke();

  // Define the size of the pattern
  const patternSize = 100;
  const halfSize = patternSize / 2;

  // Loop through the grid
  //for (let x = 0; x < width; x += patternSize) {
   // for (let y = 0; y < height; y += patternSize) {
      // Draw the Ikat pattern
      //drawIkatPattern(x + halfSize, y + halfSize, patternSize);
      for (let i = 0; i < width; i += 40) {
        for (let j = 0; j < height; j += 40) {
          let x = i + random(-20, 20);
          let y = j + random(-20, 20);
          let size = random(10, 40);
    
          drawShape(x, y, size);
        }
    }
 }
//}
//}

function drawIkatPattern(centerX, centerY, size) {
  // Set the colors for the pattern
  const color1 = color(255, 0, 0);
  const color2 = color(0, 0, 255);

  // Draw the pattern
  for (let i = 0; i < size; i += 5) {
    // Alternate between color1 and color2
    const colorToUse = i % 10 < 5 ? color1 : color2;
    stroke(colorToUse);

    // Draw vertical lines
    line(centerX, centerY - size / 2 + i, centerX, centerY + size / 2 - i);

    // Draw horizontal lines
    line(centerX - size / 2 + i, centerY, centerX + size / 2 - i, centerY);
  }
}
function drawShape(x, y, size) {
  let shapeType = int(random(3));  //randomly selects which shape to draw
  fill(random(0,255),random(0,255), random(0,255)); //randomly select the RGB colour
  rotate(degrees(random(0,360))); //randomly set each shape orientation

  switch (shapeType) {
    case 0:
      rect(x, y, size, size);
      break;
    case 1:
      ellipse(x, y, size, size);
      break;
    case 2:
      triangle(x, y - size / 2, x - size / 2, y + size / 2, x + size / 2, y + size / 2);
      break;
  }
  rotate(radians(0));
}
