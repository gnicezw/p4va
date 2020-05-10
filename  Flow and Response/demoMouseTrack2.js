function setup(){
	createCanvas(600, 900);
	strokeWeight(4);  //bold line
}
function draw() {
	line(mouseX, mouseY, pmouseX,pmouseY);//mouseX, mouseY are 2 events updated with mouse location
//pmouseX and pmouseY hold the last mouse co-ords when draw() iterated
}