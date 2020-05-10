function setup() {
	createCanvas(600,600);
}
function draw() {
	background(255);
	for (var i = 250; i<width;i+=100){ //outside loop moves 50 to the right
		for (var j=0; j<height; j+=100){ //inside loop goes down each line jumping 50
			ellipse(i,j,50,50); //draw circles going down with height and widhth 20
		}
	}
}