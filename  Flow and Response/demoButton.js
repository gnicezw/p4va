var bgColor = 0; //variable to hold our background colour
function setup() {
	createCanvas(600,600);
}

function draw() {
	background(bgColor);  //black bg
	fill(255); //white fill
	noStroke(); //no lines
	ellipse(width/2, height/2, 100, 100); //100 radius circle in the center
	//code to test whether button clicked event and events
	var d = dist(width/2,height/2,mouseX, mouseY); //distance between center and mouse click co-ords
	if (mouseIsPressed && d < 50) { //d is <50 and within circle radius = click
		bgColor = 255; //set background to white
	}
	else {
		bgColor = 0; //set background to black
	} 
}