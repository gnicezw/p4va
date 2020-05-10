var x = 100;
function setup() {
	createCanvas(300,600);
}

function draw() {
	background(255);
	line(0,0,width, height);  //line from origin to bottom right of the screen
	line(width, 0, 0, height); //line from top right to bottom left
}