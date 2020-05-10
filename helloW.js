function setup() {
	createCanvas(600, 600);
	background(233,20, 8);
}

function draw() {
  
  fill(12, 108, 170);
  ellipse(50, 50, 80, 80);
  fill(155, 155, 155);   //dog
  rect(0,100, 260,50);
  fill(255, 255, 255);
  text('Dogs - 260', 0, 125);
  fill(255, 0, 0);   //Cats
  rect(0,150, 300,50);
  fill(255, 255, 255);
  text('Cats - 300', 0, 175);
  fill(255, 255, 155);   //Hamsters
  rect(0,200, 100,50);
  fill(255, 255, 255);
  text('Hamsters - 100', 0, 225);
  fill(255, 255, 0);   //Rabbits 50
  rect(0,250, 100,50);
  fill(255, 255, 255);
  text('Rabbits - 50', 0, 275);
  fill(0, 255, 255);   //Spiders 10
  rect(0,300, 10,50);
  fill(255, 255, 255);
  text('Spiders - 10', 0, 325);
}