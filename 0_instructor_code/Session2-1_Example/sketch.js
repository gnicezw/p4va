var x = 100;
var y = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  ellipse(x, y, 200, 200);
  
  line(0, 0, width, height);
  line(width, 0, 0, height);
}