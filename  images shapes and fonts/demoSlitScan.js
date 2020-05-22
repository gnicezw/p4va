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
	img.loadPixels();
	background(0); //black bg
	stroke(255, 0, 0); //red pen for line
	strokeWeight(2); //slightly boldened red line
	center = width/2; //hold the center x val of the current window
	
}
function draw() {
	background(102); //black background
	
	var mx = constrain(mouseX, center-s/2,center+s/2); //this contrains the mouse to the left
	var x = map(mx, center-s/2, center+s/2, s, 0) //x maps the range of values from which mx
	//is constrained into 266 --> 0. i.e map from position of the image to posi IN the image
	x = floor(x);
	
	for (var y = 0; y < height; y++) {  //from the top to bottom of the image
		var c = img.get(x,y);    // get every pixel from y=0-->height along x from above. 
		//mapped value of mx. 
		set (draw_position_x, y, c);
	}

	image(img, mx, height-s/2);  //import image with x and y coordinates
	//img x val is mouseX constrained as mx (above)
	line(width/2, height-s, width/2, height); //red scanning line from center,266, bottom
		
}


	
