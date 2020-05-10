var option = 3;
function setup() {
	createCanvas(windowWidth, windowHeight); 
	noFill();//transparent objects	
}
function draw() {
	background(255); //white background
	var density = map(mouseX, 0, width, 20, 50);
	//map mouseX from 0 --> width to between 20 --> 50
	
	if (option == 1) {
		//stitches
		for (var x=50; x<=width-50; x+=density) { //jump 50 across max width 50 in
        	for(var y=50; y<=height-50;y+=density) { //jump 50 down every line
              	line(x-5,y-5,x+5,y+5);  //draw \ diagonal line at each spot
              	line(x+5,y-5,x-5,y+5); // draw / diagonal at each spot
        	} //by drawing \ and / we can draw an X each each spot
  		}		

	}
	
	else if (option ==2) {
		//radiating lines
		for (var x=50; x<=width-50; x+=density) { //jump 50 across
        	for(var y=50; y<=height-50;y+=density) { //jump 50 down every line
              	line(x,y, width/2, height/2); //draw a line from each spot to canvas center
        	}
  		}
	}
	
	else if (option ==3) {
		//overlapping circles
		for (var x=50; x<=width-50; x+=density) { //jump 50 across
  			for(var y=50; y<=height-50;y+=density) { //jump 50 down every line
  				 ellipse(x,y,100,100); //draw ellipses ARE overlapping

			}
		}
	}
	else if (option ==4) {
		//heavier strokeweight circles w gradient
		var count = 0  //counter to set the stroke colour
		for (var x=50; x<=(width-50); x+=density) { //jump 40 across
   			for(var y=50; y<=(height-50);y+=density) { //jump 40 down every line
  				strokeWeight(count/50);//adjust strokeweight
				ellipse(x,y,70,70); //draw ellipses 
              	count++;
			}
		}strokeWeight(1);
	}
	else if (option ==5) {
		//gradient circles very densely packed
		for (var x=50; x<=width-50; x+=density) { //jump 10 across
  			for(var y=50; y<=height-50;y+=density) { //jump 10 down every line
				ellipse(x,y,70,70); //draw ellipses not touching
  			}
		}
	}
	}
	
function mousePressed() {  //inbuilt funtion activated when mouse is pressed
	option++; //increment option
	if (option > 5) option = 1; //reset option
}
