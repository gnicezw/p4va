	var x = 100;   //new variable assigned value
	function setup() {
		createCanvas(600, 600);
	}
	
	function draw() {
		background(109);
		line(10, 0, 10, height);  //manually draw a bunch of lines
		line(20, 0, 20, height); //start cords x,y and end cords x,y
		line(30, 0, 30, height);
		line(40, 0, 40, height);
	
		for (var i = 50; i < 600; i += 10) { //init the loop start 50 cos we're already drawn above'
			stroke(255, 0, 0);   //change stroke colour red
			line(i, 0, i, height); //draw lines
	
		}
	
	}