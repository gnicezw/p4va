var intro; 
var drink; 
var large; 
var swimming;  //vars to hold images
var state; //keeps current state of program
/*
0 = intro
1=drink
2 = large
3=swimming

*/
function preload() {
	intro = loadImage("0-intro.gif"); //preload all of the images
	drink = loadImage("1-drink.gif");
	large = loadImage("2-large.gif");
	swimming = loadImage("3-swimming.gif");
}
function setup(){
	createCanvas(1024, 768);

	
}
function draw() {
	background(255);
	//text("testing", 100, 100);
	if(state==0) {
		image(intro, 200, 0);  //load intro image first
	}
	else if(state == 1)  {
		image(drink, 200, 0);  //load drink img
	}
	else if(state == 2) {
		image(large, 200, 0);  //load large image
	}
	else if(state == 3) {
		image(swimming, 200, 0);  //load swimming image
	}
	
}
function keyPressed() {  //event handler to set state val based on key press
	if (key == '0') {
		state = 0;
	}
	else if (key == '1') {
		state = 1;
	}
	else if (key == '2') {
		state = 2;
	}
	else if (key == '3') {
		state = 3;
	}
	
	
}