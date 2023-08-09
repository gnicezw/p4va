let patternType; // Variable to store the selected pattern type
let patternSize; // Variable to store the pattern size

function setup() {
  createCanvas(400, 400);
  noLoop();

  // Create a dropdown menu for pattern selection
  patternType = createSelect();
  patternType.position(10, 10);
  patternType.option('Greek Key');
  patternType.option('Moorish');
  patternType.option('Egyptian');
  patternType.changed(generatePattern);

  // Create a slider for pattern size
  patternSize = createSlider(10, 100, 50);
  patternSize.position(10, 30);
  patternSize.changed(generatePattern);
}

function draw() {
  // Clear the canvas
  background(220);

  // Generate the pattern based on user selection
  generatePattern();
}

function generatePattern() {
  let type = patternType.value();
  let size = patternSize.value();

  // Draw the pattern based on the selected type
  if (type === 'Greek Key') {
    drawGreekKeyPattern(size);
  } else if (type === 'Moorish') {
    drawMoorishPattern(size);
  } else if (type === 'Egyptian') {
    drawEgyptianPattern(size);
  }
}

function drawGreekKeyPattern(size) {
  // Implement your Greek Key pattern generation logic here
  // This is just a placeholder example
  stroke(0);
  noFill();
  rectMode(CENTER);
  rect(width / 2, height / 2, size, size);
}

function drawMoorishPattern(size) {
  // Implement your Moorish pattern generation logic here
  // This is just a placeholder example
  stroke(0);
  noFill();
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2, size, size);  //the result is not the same as if the code is simply changed
}

function drawEgyptianPattern(size) {
  // Implement your Egyptian pattern generation logic here
  // This is just a placeholder example
  stroke(0);
  noFill();
  triangle(width / 2, height / 2 - size / 2, width / 2 + size / 2, height / 2 + size / 2, width / 2 - size / 2, height / 2 + size / 2);
}
