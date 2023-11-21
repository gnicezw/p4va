  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    background(0);
    fill(255);
    translate(50,50) //translate() moves the Origin to mouse position
    rect(0,0,100,50)  //draw a rect at the origin
  }
