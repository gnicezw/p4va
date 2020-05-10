var s = 10; //variable for line segment length
function setup() {
	createCanvas(windowWidth,windowHeight); //new canvas
	noFill(); //only blank transparent to be created
}
function draw() {
	background(255);
	for (var x=50; x<=width-50; x+=50) { //jump 50 across
		for(var y=50; y<=height-50;y+=50) { //jump 50 down every line
			line(x,y, width/2, height/2); //draw a line from each spot to canvas center
		} //by drawing \ and / we can draw an X each each spot
	}
	
}