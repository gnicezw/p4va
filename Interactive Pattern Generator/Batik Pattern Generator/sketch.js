var x = 0;
let c1, c2;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);  //use degrees
  rectMode(CENTER);   //provide rect coords from center
  strokeWeight(5); //line thickness
  stroke(223, 172, 112);   //line colour
}

function draw() {
  push();
  backgroundGradient();
  pop();
  
  batikOne();
  batikTwo();
  batikThree();
  batikFour();
  batikFive();
  batikSix();
  batikSeven();
  batikEight();
  batikNine();

}

function batikOne(){
  push();
  translate(100, 100);
  fill(246, 103, 55);
  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  }
  pop();
}

function batikTwo(){
  push();
  translate(300, 100);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  }
  pop();
}

function batikThree(){
  push();
  translate(500, 100);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  }
  pop();
}

function batikFour(){
  push();
  translate(100,300);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  }
  pop();
}

function batikFive(){
  push();
  translate(300,300);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  }
  pop();
}

function batikSix(){
  push();
  translate(500,300);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  } 
  rotate(45);
  rect(30,30,40,40);
  }
  pop();
}

function batikSeven(){
  push();
  translate(100,500);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  } 
  pop();
}

function batikEight(){
  push();
  translate(300,500);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  rotate(45);
  rect(30,30,40,40);
  } 
  pop();
}

function batikNine(){
  push();
  translate(500,500);
  fill(246, 103, 55);

  
  for (let i = 0; i < 8; i++){
  if(mouseIsPressed){
  x+= 0.02;
  rotate(x);
  } else {
  random();
  }
  
  rotate(45);
  rect(30,30,40,40);
  } 
  pop();
}

function backgroundGradient(){
  c1 = color(137, 41, 0);
  c2 = color(14, 1, 0);
  
  for(let y=0; y<height; y++){
  n = map(y,0,height,0,1);
  let newc = lerpColor(c1,c2,n);
  stroke(newc);
  line(0,y,width, y);
}
}