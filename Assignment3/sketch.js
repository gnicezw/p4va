var centerx, centery; centerEye; centerR; i, centerL; distX, distY;  //variables to hold the center xy 
var mapX, mapY, centerMapX, tempmapX, cMouseX, cMouseY;
var boolMotion = false; //bool value set by "training"

function setup() {
createCanvas(1024, 768); 
centery = height/2;
centerx = width/2;
centerL = centerx-200; //center of the left eye is 200px to the left of center
centerR = centerx+200; //center of the right eye is 200px to the right of cente

 	
}
function draw() {
background(255);
noFill(); //make everything transparent


//using 2 for loops to draw 2 outer, static elipses 200px to the left and right of center
for (i = -200; i < 300;i+=400 ) {  //(draw eyes + 2 concentric pupils)* 2
	centerEye = centerx + i; //x coord for left and right eyes
	ellipse(centerEye, centery, 250, 180);  //2 ellipses 250w * 180 h
	
	}
/*This part of the code figures out where the mouse is for drawing pupils*/
		stroke(0);
boolMotion = true;
//This if is currently not working as boolMotio being evaluated as false no matter what I do. 
if (boolMotion) { //boolean value to turn on eye controls after certain amount of training
		cMouseX = constrain(mouseX, 0, width); //constrain mouseX to canvas
		cMouseY = constrain(mouseY, 0, height); //constrain mouseY to canvas
	}
else {
		cMouseX = mouseX;
		cMouseY = mouseY;
	}
deltaY(); //map mouse Y position to pupil position

	if ((cMouseX < centerL)) {//mouse is to the left of left Eye and drawing left eye
		distX = cMouseX - centerL; //how far away is the mouse from left eye center
		mapX = map(distX, -centerL, 0,  (centerL - 80), centerL); //mapping the range of cMouseX on the left of the eye
		//to range move movement of pupil within the eye (80)
		i=-200;//set i to -200 which causes the left pupil to be drawn in drawPupil() we then draw the right pupil
		//by adding 400 to i at the bottom of this for loop
		line(pmouseX, pmouseY, centerL, centery); //testing line
		for (var y = 0; y<401; y+=400) {  //draw both pupils for mouse to left of left eye
			mapX+=y	//offset 400 to move right pupil to the same relative position in its eye
			drawPupils(); //function defined below 2 modularise drawing the pupils
			noFill(); //stop filling
			i+=400; //incrementing the loop counter causes the other pupil to be drawn heterchromatic in the 2nd iteration of
			//this for loop AND stops the second iteration of the parent for loop
		}
	
	}
	else if((cMouseX>centerx-200) &&(cMouseX < centerx+200)) {  //between the eyes
		line(pmouseX, pmouseY, centerEye, centery); //testing line between the eyes
		centerMapX = map(cMouseX, centerL, centerR, 0, 400); //map mouse position with center to 0 --> 400 range
		if (centerMapX <=200) { //if we're to the left or on center of the center-zone 
			mapX = map(centerMapX, 0, 200, 0, 90 ); //the close the mouse is to center the more converged the pupils should be 
			//direct mapping because we want maximum pupil displacement when mouse is at center (200)
		} 
		else if (centerMapX >200) { //if mouse is to the right of center in the center-zone
			
			mapX=map(centerMapX, 201, 400, 90, 0 ); //the close the mouse is to center the more converged the pupils should be 
			//this relationship is inverted for meximum pupil displacement with mouse at center(200)
		} 
		i=-200;  //init i to -200 so that drawPupils() draws the left eye in the first iteration and right in the second
		tempmapX = mapX; //holds mapX between drawing iterations so it can be reset after the first for() changes it
		for (i; i<300; i+=400) {
			if (i==-200) { //when we're drawing the left pupil it should diplace from centerL towards the right
				text(mapX, cMouseX, mapY);
				mapX +=centerL; //mapX is large as the mouse approaches center  so we add it to center L
								
			} 
		
			else if(i==200) {  //when we draw the right pupil, it should displace for centerR towards the left
				mapX = tempmapX; //the first for() changes mapX to displace the left pupil we reset it here
				text(mapX, cMouseX, mapY+20);
				mapX = (centerR - mapX); //mapX is larger as mouse approaches center so we subtract is from centerR	
				
			}
		drawPupils();
		noFill();   /** **/
		}   
	}//between eyes
	
	else if ((cMouseX > centerR)) {//mouse is to the right of the right eye a
		distX = cMouseX - centerR; //how far away is the mouse
		mapX = map(distX, centerR, 0,  (centerR + 90), centerR); //mapping the range of mouseX on the left of the eye
		//to range move movement of pupil within the eye (80)		
		//ellipse(mapX, centery, 30, 30);  //testing ellipse
		line(pmouseX, pmouseY, centerR, centery); 
		i=200// init the for loop counter so that the right then left pupils get drawn when drawPupils is called below
		//this is done by subtracting 400 from i which prompts the 2nd iteration to draw the left eye 
		for (var x = 0; x<401; x+=400) {  //draw both pupils
			mapX-=x	//offset 400 between drawing to draw left pupil in the same relative position in that eye
			drawPupils(); //function defined below 2 modularise drawing the pupils
			noFill();//stop filling
			i-=400; //incrementing the loop counter causes the other pupil to be drawn heterchromatic in the 2nd iteration of
			//this for loop AND stops the second iteration of the parent for loop
			
			
		}
		
	}
		
	
	
	//drawPupils(); 	
	noFill();  //stop filling heterchomatic colours
	stroke(0); //return stroke
	


	
}

function drawPupils(){  //draw left eye
	ellipse(mapX, mapY, 80, 80);
	//noStroke()  //draw the inner circle in colour
	//text(mapX, centerEye, mapY);
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
	if (cMouseY<centery) {  //mouse above center
		mapY = map(cMouseY, 0, centery, centery -60, centery);  //map to moving the pixes within 60px
	} 
	else if(cMouseY>centery) { //under the centery line
		mapY = map(cMouseY, centery, height, centery, centery+60 );//move pupil 60 below the center
		
	}
	else {}
	
}



