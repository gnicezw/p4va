function setup() {
	createCanvas(1024, 768);
	background(10,10,2);
}
function draw() {
	noStroke();
	fill(35,56,44); //greenish quad
	quad(0,0,0, 253,225, 263, 241, 0)  //4 point quad
	fill(39, 69, 58);
	quad(241,0,229, 223, 467, 240, 497,0);
	fill(32,34,29);
	quad(497,0,469, 264, 582, 269, 589,0);
	fill(37, 62, 55);
	quad(589,0,581,290,730, 311, 989, 267)
	fill(37, 62, 55);
	triangle(589,0,989, 267,877,0)
	fill(0);
	triangle(834,0,835,53,877,0)
	 
}	