var img;  //variable to hold image
function preload() {  //function to preload the image before we need it. 
 	img = loadImage("EO6IllYWoAAGIvH.jpg");  //use loadImg to save image to img variable
}
function setup() {
	createCanvas(600, 400);
}
function draw() {
	background(0);
	var aspect = img.height/img.width;  //var to hold the aspect ratio
	var imageHeight  = mouseY;
	image(img, 0, 0, (imageHeight*aspect), imageHeight);//this places the image at the origin 
	//resizes the height to 200 while maintaining aspect ratio
	
	
}