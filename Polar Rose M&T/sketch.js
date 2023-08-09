let n = 6;
let d = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
//without finding the two sides of the code block which need to syn
//the code will continue to fail to execute
  beginShape();
  strokeWeight(2);
  noFill();
  for (let theta = 0; theta < TWO_PI * d; theta += 0.02) {
    let r = 200 * cos(theta * n / d);
    let x = r * cos(theta);
    let y = r * sin(theta);
    vertex(x, y);
  }
  endShape(CLOSE);
}