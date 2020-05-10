function setup(){
createCanvas(900, 600); //wide canvas so we can see the effect
strokeWeight(4);//bold line
	
}
function draw() {
	background(102); //grey background so we can see effect
	var clr = map(mouseX,0,width,0,255); //map func takes variable, minval, maxval, mapmin, mapmax
	fill(clr); //in any one draw() iteration the fill will be set by mouseX
	ellipse(mouseX, mouseY, 20, 20);//mouseX, mouseY are 2 events updated with mouse location
}