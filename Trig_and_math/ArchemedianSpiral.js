let r = 0;
let theta = 0;
let spiralSize = 200;
let angleStep = 0.05;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);

  for (let i = 0; i < 1000; i++) {
    let x = r * cos(theta);
    let y = r * sin(theta);
    print('The value of x is ' + x);
    print('The value of y is ' + y);

    ellipse(x, y, 2, 2);
    //ellipse(width/2, height/2, 2, 2 );

    r += angleStep;
    theta += angleStep;
  }

}
