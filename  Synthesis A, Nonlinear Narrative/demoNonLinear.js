var intro;
var drink;
var large;
var swimming;  //vars to hold images
var state; //keeps current state of program
var typed = "";
var hasCried = false;
var whaHappened='nil';
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
function setup() {
	createCanvas(1024, 768);
	textFont("helvetica");  //sent font, size and alignment
	textSize(22);
	textAlign(CENTER);


}
function draw() {
	background(255);
	//text("testing", 100, 100);	
	if (state == 0) {
		image(intro, 200, 0);  //load intro image first
	}
	else if (state == 1) {
		image(drink, 200, 0);  //load drink img
	}
	else if (state == 2) {
		image(large, 200, 0);  //load large image
	}
	else if (state == 3) {
		image(swimming, 200, 0);  //load swimming image
	}
	text(typed, 0, 650, width, 30); //text box at 0, 560 full width and 30 height
	text(whaHappened, 100, 700);
}
function keyPressed() {
	if (keyCode == BACKSPACE) {
			typed +=key;
			typed = "";
	}
	else {
		
	}
}
function keyTyped() {  //event handler to set state val based on key press
	whaHappened = keyCode;

	if ((key == '0') || (typed == 'intro')) { //check for number or text AND then clear the typed variable
		state = 0;
		typed = "";
	}
	else if ((key == '1') || (typed == 'drink')) {
		typed = "";
		if (hasCried){ //if alice is large and has cried, drinking potion will shrink her --> swimming
			state = 3; //if she has cried then send her for a swim
		}
		else {
		state = 1; //else just drink the potion
		}
	}
	else if ((key == '2') || (typed == 'large')) {
		state = 2;
		typed = "";
	}
	else if ((key == '3') || (typed == 'swimming')) {
		state = 3;
		typed = "";
	}
	else {
		typed += key; //use the += operator to append the key to the end of the typed var

	}

	if (typed == 'cry' && state == 2) { //this should only be called if she's large and we type cry'
		hasCried=true; //this means there is now a pool of tears at her feet

	}

}