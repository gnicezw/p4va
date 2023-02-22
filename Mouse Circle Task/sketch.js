var Circle_height = 0; //declare variables for the circle dimensions
var Circle_width = 0;

function setup() {
  createCanvas(500, 500);
    
}

function draw() {
  background(220);  //set color gray
  ellipse(mouseX, mouseY, Circle_width, Circle_height); //draw a circle at the mouse pointer location
  //make an if case statement to control circle size by location
  if ((mouseX<width/2) && (mouseY<height/2))    {
        Circle_width = mouseX; 
        Circle_height = mouseX;
  }
  else {
        Circle_width = 10; 
        Circle_height = 10;
    }
  }

  

