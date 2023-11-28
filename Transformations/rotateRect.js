
    //declare global variable 
    let rotAngle = 0; 
    function setup()
    {
        createCanvas(300,300);
        //Tell p5 to work in degrees
        angleMode(DEGREES);
    }
    function draw()
    {
        background(0);
        fill(255);
        //control canvas rotation with rotAngle
        rotate(rotAngle);  
        //draw a rect
        rect(100, 25, 100, 50); 
        //increment rotAngle by 1
        rotAngle =rotAngle +1;
        
    }
