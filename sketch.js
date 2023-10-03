var n = 0;
var c = 6;

function setup() {
  createCanvas(400, 400);
 // angleMode(DEGREES);
  colorMode(RGB);
  background(255, 255, 255);
  
}

function draw() {
  //background(220, 9, 39);

 var a = n * 19.2; //Golden Angle 137.5
 var r = c * sqrt(n); // distence also root
 var x = r * cos(a) + width / 2;
 var y = r * sin(a) + height / 2;

 for(let i = 0; i < 255; i++)
 {
    let r = random(100);
    noStroke();
    fill( r * i , r, 100);
 }
 
 //line(0 ,y, width, y);

  rect (x, y , 15, 15);
 //ellipse(x, y, 4, 4);
 n++;

  
}
