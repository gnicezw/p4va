function setup(){
	createCanvas(600, 900);
	strokeWeight(4);  //bold line
}
function draw() {
	if(mouseX < 300) { //if on the left side of the screen
		stroke(255,0,0); //draw in red
	}
	else{
		stroke(0)  //draw in black	
	}
	if(mouseIsPressed == true) {  //check whether the mouse is currently pressed	
		line(mouseX, mouseY, pmouseX,pmouseY);//mouseX, mouseY are 2 events updated with mouse location
//pmouseX and pmouseY hold the last mouse co-ords when draw() iterated
		ellipse(mouseX, mouseY, 20, 20);//draw an ellipse  at the current mouse posi
	}
}