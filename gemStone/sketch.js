let n=200,i,s,g,h
let a[]=new float[n*3],r,d,e,f
function setup() {
  createCanvas(800, 800);
  for(i=0;i<n*3;)
    a[i++]=400-random(800)
  colorMode(3)
  blendMode(2)
}

function draw() {
  background(220);
}
}void draw(){clear();camera(900*sin(r+=.01),900*cos(r),700,0,0,0,0,0,-1);for(i=0;i<n;i++){e=f=9999;g=h=0;