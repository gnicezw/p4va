function setup() {
	createCanvas(600,600);	
}

function draw() {
	background(109);
	stroke(255,0,0);
	for(var i = 0; i<width; i++){
				line(i,0,i,height); //draw lines from top to bottom
	}
}