function setup(){
	createCanvas(600, 900);
	noStroke();
	fill(0,102); //use alpha to set partial transparency
	
}
function draw() {
	ellipse(mouseX, mouseY, 20, 20);//mouseX, mouseY are 2 events updated with mouse location
}