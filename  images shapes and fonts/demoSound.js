var sound;
function preload() {
	soundFormats('ogg', 'mp3');	 //declare formats
	sound = loadSound('doorbell.ogg');  //preload the file for use
}		
function setup() {
	createCanvas(600,600); //declare a canvas to have somewhere to click	
	
}
function draw() {
	
	background(102);  //color canvas gray
	
}
	function mousePressed() {
	sound.play();  //play sound when mouse clicked
	sound.loop() //play the sound continuously
	text("test",mouseX, mouseY);   //write text at mouse posi
}