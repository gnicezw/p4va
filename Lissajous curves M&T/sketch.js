let x = 0;
let y = 0;
let a = 100;
let b = 150;
let phase = 0.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //background(220);
  translate(width / 2, height / 2);

  let t = millis() / 1000.0;

  x = a * sin(t);
  y = b * sin(t * 2 + phase);

  ellipse(x, y, 10, 10);
}
