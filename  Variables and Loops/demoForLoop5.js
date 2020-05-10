var s = 10; //variable for line segment length

function setup() {
	createCanvas(windowWidth,windowHeight); //new canvas
	noFill(); //only blank transparent to be created
}
function draw() {
	background(255);
	var count = 0  //counter to set the stroke colour
		for (var x=50; x<=(width-50); x+=40) { //jump 40 across
			for(var y=50; y<=(height-50);y+=40) { //jump 40 down every line
				strokeWeight(count/50);//adjust strokeweight
			ellipse(x,y,70,70); //draw ellipses not touching
			count++;
		}

	}
	
}