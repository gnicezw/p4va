var s=266;  // sets width and height of the imge
var center; 
var img; //variable to hold the image
var bigImg;
var fs = 2; //the number of iterations to be done per second
var aspect;  //variable to hold correct aspect ratio
var counter = 0;  //create a loop counter
var sliW = 1;  //control how wide the slice is

function preload() {
	img = loadImage("fish_res.png");  //preload the png image
	bigImg = loadImage("IMG_2790_result.png");
	img.loadPixels()
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);  //what does this do
	background(0); //black bg
	stroke(255, 0, 0); //red pen for line
	strokeWeight(2); //slightly boldened red line
	center = width/2; //hold the center x val of the current window
	//frameRate(fs);
	aspect = img.width/img.height//set image aspect ration - this should be 1 here
	image(bigImg,center, height/2);
	
	
}
function draw() {
	//background(255); //black background
	
	var mx = constrain(mouseX, center-s/2,center+s/2); //this contrains the mouse to the left
	var pmx = constrain(pmouseX, center-s/2,center+s/2); //this contrains the pmouse to the left
	//of center half the image width on both sides. 
	image(img, center, height-s/2);  //import image with x and y coordinates
	//img x val is mouseX constrained as mx (above)
	line(width/2, height-s, width/2, height); //red scanning line
	
	//var slice = img.get();
	//image(slice, s/2, s/2);

	
	
  for (var x=0; x<2; x+=sliW){  //center,height-s, sliW,height   682, 359, 30, 266
		var slice = img.get(682, 359, 30, 266); //save array from current constrained 
		slice.save('slice', 'png')
		//rect(center, 359, 30, 266);
		//var slice = img.get(mx,height-s, 1,height); //save array from current constrained 
	//mouseX and top of the image, 1 pixel to the bottom of the canvas
		//image(slice,sliW/2,s/2,sliW,s);//draw the slice at the top of he canvas
		image(slice, center, height/2);
//from left of screen, top of screen, width 1 and image height
		line(width/2, height-s, x, s); //draw a line from scanner to drawing line
		text(height-s,center-s/2,height-s);
			
		
	}
}


	
