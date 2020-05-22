function setup() {
	createCanvas(900, 600);
}
function draw() {
 	fill(255, 80);//make a little transparent to
	background(103);
	rect(20, 20, 40, 40);  //draw a rectangle
	//push(); //push layout to the stack
	translate(200, 200); //translate
	rect(20, 20, 100, 100);//draw another rectangle to observe
	//pop(); // pop layout back onto the stack
	rect(20, 20,150,150);  //draw a rectangle	
}