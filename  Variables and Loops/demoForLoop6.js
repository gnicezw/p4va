var s = 10; //variable for line segment length

function setup() {
	createCanvas(windowWidth,windowHeight); //new canvas
	noFill(); //only blank transparent to be created
}
function draw() {
	background(255);
	var count = 0  //counter to set the stroke colour
	for (var x=50; x<=(width-50); x+=50) { //jump 50 across
		for(var y=50; y<=(height-50);y+=50) { //jump 50 down every line
			for (var i=0; i<16; i+=4) { // draw 4 vertical lines
				line(x+i, y, x+i, y+12); //draw line straight down 12 px long
			}
			line(x,y, x+12, y+12); //draw line \ diag from xy across the lines 12 px long
		}

	}
	
}