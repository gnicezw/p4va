var s = 10; //variable for line segment length
function setup() {
	createCanvas(windowWidth,windowHeight); //new canvas
	noFill(); //only blank transparent to be created
}
function draw() {
	background(255);
	for (var x=50; x<=width-50; x+=10) { //jump 10 across
		for(var y=50; y<=height-50;y+=10) { //jump 10 down every line
			ellipse(x,y,70,70); //draw ellipses not touching
		} 
	}
	
}