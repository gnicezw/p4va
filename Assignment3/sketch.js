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
		distX = mouseX - centerEye; //how far away is the mouse from left eye center
		mapX = map(distX, -centerEye, 0,  (centerEye - 80), centerEye); //mapping the range of mouseX on the left of the eye
		//to range move movement of pupil within the eye (80)
		
		line(pmouseX, pmouseY, centerEye, centery); //testing line
		for (var y = 0; y<401; y+=400) {  //draw both pupils for mouse to left of left eye
			mapX+=y	//offset 400 to move right pupil to the same relative position in its eye
			drawPupils(); //function defined below 2 modularise drawing the pupils
			noFill(); //stop filling
			i+=400; //incrementing the loop counter causes the other pupil to be drawn heterchromatic in the 2nd iteration of
			//this for loop AND stops the second iteration of the parent for loop
		}
		
	}
	else if((mouseX>centerx-200) &&(mouseX < centerx+200)) {  //between the eyes
		line(pmouseX, pmouseY, centerEye, centery); 
		centerMapX = map(mouseX, centerx-200, centerx+200, 0, 400); //where is the mouse in the gap
		mapX=map(centerMapX, 0, 400, 0, 90 ); //map the gap to pupil position within the eye 
		if (i<0) { //drawing left eye
			mapX+=centerEye;  // append the mapX to the position of center left eye
		}
		else if(i>0) {  //move the pupil to the left of the left pupil
			mapX = (centerEye-90) + mapX;	
		}
		drawPupils();
		noFill();
		
	}//between eyes
	
	else if ((i>0) && (mouseX > centerEye)) {//mouse is to the right of the right eye a
		distX = mouseX - centerEye; //how far away is the mouse
		mapX = map(distX, centerEye, 0,  (centerEye + 90), centerEye); //mapping the range of mouseX on the left of the eye
		//to range move movement of pupil within the eye (80)		
		//ellipse(mapX, centery, 30, 30);  //testing ellipse
		line(pmouseX, pmouseY, centerEye, centery); 
		
		for (var x = 0; x<401; x+=400) {  //draw both pupils
			mapX-=x	//offset 400 between drawing to draw left pupil in the same relative position in that eye
			drawPupils(); //function defined below 2 modularise drawing the pupils
			noFill();//stop filling
			//i-=400; //incrementing the loop counter causes the other pupil to be drawn heterchromatic in the 2nd iteration of
			//this for loop AND stops the second iteration of the parent for loop
			
			
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



