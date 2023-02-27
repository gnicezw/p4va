var Circle_height = 0; //declare variables for the circle dimensions
var Circle_width = 0;

function setup() {
  createCanvas(500, 500);
    
}

function draw() {
  background(220);  //set color gray
  ellipse(mouseX, mouseY, Circle_width, Circle_height); //draw a circle at the mouse pointer location
  //make an if case statement to control circle size by location
  if ((mouseX<width/2) && (mouseY<height/2))    {  //top left quadrant
        Circle_width = (mouseX+mouseY)/2; 
        Circle_height = (mouseX+mouseY)/2;
  }
  else if ((mouseX>width/2) && (mouseY<height/2)) {  //top right quadrant
          Circle_width = ((500-mouseX)+mouseY)/2;   //x is now greater than 500 so invert it by
          Circle_height = ((500-mouseX)+mouseY)/2;  //subtracting it from

    }
    else if ((mouseX<width/2) && (mouseY>height/2)) {  //bottom left quadrant
          Circle_width = (mouseX+(500 - mouseY))/2;   //y is now greater than 500 so invert it by
          Circle_height = (mouseX+(500 - mouseY))/2;  //subtracting from 500
      
    } 
      else if ((mouseX>width/2) && (mouseY>height/2)) {  //bottom right quadrant
              Circle_width = ((500-mouseX)+(500 - mouseY))/2;   //y and x are now greater than 500 so invert them by
              Circle_height = ((500-mouseX)+(500 - mouseY))/2;  //subracting from 500
      } 
    
  }

  

