function setup() {
	createCanvas(600,600);	
}

function draw() {
	background(109);
	
		for(var i = 0; i<width; i++){
			stroke((i/600)*255); //create a proportional value of i for for stroke function
			line(i,0,i,height); //draw lines from top to bottom
		}
}