var centerx, centery; centerEye; centerR; i, centerL; distX, distY;  //variables to hold the center xy 
var mapX;
function setup() {
createCanvas(1024, 768); 
centery = height/2;
centerx = width/2; 	
}
function draw() {
background(255);
noFill(); //make everything transparent

//using 2 for loops to draw 3 ellipses for each eye with global var counter i
for (i = -200; i < 300;i+=400 ) {  //(draw eyes + 2 concentric pupils)* 2
	centerEye = centerx + i; //x coord for left and right eyes
	
	
/*This part of the code figures out where the mouse eyes for drawing pupils*/
	
	stroke(0);

	if ((i<0) && (mouseX < centerEye)) {//mouse is to the left of left Eye
		distX = mouseX - centerEye; //how far away is the mouse
		mapX = map(distX, -centerEye, 0,  (centerEye - 80), centerEye); //mapping to control moved eye	
		
		line(pmouseX, pmouseY, centerEye, centery); 
		for (var y = 0; y<401; y+=400) {  //draw both pupils for mouse to left
			mapX+=y	//offset 400 between drawing
			drawPupils(); //function defined below 2 modularise drawing the pupils
			noFill(); //stop filling
		}
		
	}
	else if((mouseX>centerx-200) &&(mouseX < centerx+200)) {  //between the eyes
		line(pmouseX, pmouseY, centerEye, centery); 
		stroke(0);
	}//between eyes
	
	else if ((i>0) && (mouseX > centerEye)) {//mouse is to the right of the right eye
		distX = mouseX - centerEye; //how far away is the mouse
		mapX = map(distX, centerEye, 0,  (centerEye + 90), centerEye); //mapping to control moved eye	
		ellipse(mapX, centery, 30, 30);
		line(pmouseX, pmouseY, centerEye, centery); 
		
		for (var x = 0; x<401; x+=400) {  //draw both pupils
			mapX-=x	//offset 400 between drawing
			drawPupils(); //function defined below 2 modularise drawing the pupils
			noFill();//stop filling
		}
		
	}
		
	ellipse(centerEye, centery, 250, 180);  //2 ellipses 250w * 180 h
	
	
	
	
	noFill();  //stop filling heterchomatic colours
	stroke(0); //return stroke
	
}

	
}

function drawPupils(){
	ellipse(mapX, centery, 80, 80);
	//noStroke()  //draw the inner circle in colour
	text("here", centerEye, centery);
	if (i==-200) { //draw the heterochrome effect - left eye
		
		fill(102, 255, 0);  //bright green fill
		ellipse(mapX, centery, 30, 30);
	
	}
	else if(i == 200) {
		fill(65, 105, 225); //bright blue fill
		ellipse(mapX, centery, 30, 30);
		
	}
}



