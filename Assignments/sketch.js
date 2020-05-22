var fCol = 0;
var y = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);  //new canvas
		
}
function draw() {
background(102); //grey bg
 noStroke();
for (var i = 1; i<3; i+=1) {  //for loop will run twice
	for (var j = 1; j<3; j+=1) {  //inner loop to draw circles each height
		
		fill(220); //fill around flower
		noStroke(); //around flower
		//ellipse(width*(j/3), height*(i/3), 150, 150); //circle aroud flower
		stroke(50); //draw grey around the petals and circle
		strokeWeight(2);  //slightly thicker lines
		fill(135);	 //grey for background circle
		ellipse(width*(j/3), height*(i/3), 80, 80); //draw the ellipse behind flowers
		push(); //saves the position of everything on the canvas from stack
		translate(width*(j/3), height*(i/3));  //move the flower to the each point
 		for (let i = 0; i < 10; i ++) { //draw and rotate 10 ellipses for petals
			fill(map(i,0,9,0,255),150); //map fill colour to iterations
			rotate(PI/5); //rotates around the origin but don't really get how it works'
			ellipse(0,30, 20, 80);
			
		}pop(); //restores everything else post rottion/translation
	}	

}

}