var s=266;  // sets width and height of the image
var center; 
var img; //variable to hold the image
var draw_position_x = 0; //x position we're currently drawing'

function preload() {
	img = loadImage("fish_res.png");  //preload the png image

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);  //places the image's center on x,y'
	img.loadPixels();  //allows individual pixels to be accessed
	background(0); //black bg
	stroke(255, 0, 0); //red pen for line
	strokeWeight(2); //slightly boldened red line
	center = width/2; //hold the center x val of the current window
	
}
function draw() {
	background(102); //black background
	
	var mx = constrain(mouseX, center-s/2,center+s/2); //this contrains the mouse to image
	var x = map(mx, center-s/2, center+s/2, s, 0) //x maps the range of values from which mx
	//is constrained into 266 --> 0. i.e map from position of the image to posi IN the image
	x = floor(x);  //pushes val down to greates integer below it
	
	for (var y = 0; y <=s; y++) {  //scans down to get pixels in x postion and then draws down in the same x posi	
		var c = img.get(x,y);    // get every pixel from y=0-->height along x from above. 
		//mapped value of mx. 
		set (draw_position_x, y, c); //change the pixel colour to c, at the draw postion and height
	}
	updatePixels();  //effect chagnes from set() above

	image(img, mx, height-s/2);  //draw image at mouse x counstrained posi
		//img x val is mouseX constrained as mx (above)
	line(width/2, height-s, width/2, height); //red scanning line from center,266, bottom
	
	line(draw_position_x, s, width/2, height -s); //draw from current drawing position to the top of the scanner
	
	//loop back around
	draw_position_x++; //increment the draw position to check before drawing it
	if(draw_position_x >= width) { //if it goes beyond the right canvas end the 
		draw_position_x = 0;     //return to far left side
	}
		
}


	
