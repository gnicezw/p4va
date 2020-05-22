var centerx, centery; centerEye; centerR; i, centerL; distX, distY;  //variables to hold the center xy 
var mapX, mapY, centerMapX;
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
	
	
/*This part of the code figures out where the mouse is for drawing pupils*/
		stroke(0);
	
deltaY(); //map mouse Y position to pupil position

	if ((i<0) && (mouseX < centerEye)) {//mouse is to the left of left Eye and drawing left eye
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
		centerMapX = map(mouseX, centerx-200, centerx+200, 0, 400); //where is the mouse in the gap
		mapX=map(centerMapX, 0, 400, 0, 90 ); //map the gap to pupil position within the eye 
		if (i<0) { //drawing left eye
			mapX+=centerEye;
		}
		else if(i>0) {
			mapX = centerEye - mapX;	
		}
		drawPupils();
		noFill();
		
	}//between eyes
	
	else if ((i>0) && (mouseX > centerEye)) {//mouse is to the right of the right eye a
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
	
	//drawPupils(); 	
	noFill();  //stop filling heterchomatic colours
	stroke(0); //return stroke
	
}

	
}

function drawPupils(){  //draw left eye
	ellipse(mapX, mapY, 80, 80);
	//noStroke()  //draw the inner circle in colour
	text(mapX, centerEye, mapY);
	if (i==-200) { //draw the heterochrome effect - left eye
		
		fill(102, 255, 0);  //bright green fill
		ellipse(mapX, mapY, 30, 30);
	
	}
	else if(i == 200) {  //draw right eye
		fill(65, 105, 225); //bright blue fill
		ellipse(mapX, mapY, 30, 30);
		
	}
}
function deltaY() {
	if (mouseY<centery) {  //mouse above center
		mapY = map(mouseY, 0, centery, centery -60, centery);  //map to moving the pixes within 60px
	} 
	else if(mouseY>centery) { //under the centery line
		mapY = map(mouseY, centery, height, centery, centery+60 );//move pupil 60 below the center
		
	}
	else {}
	
}



