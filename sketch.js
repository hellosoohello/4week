var n = 0;
var c = 6;

function setup() {
  createCanvas(400, 400);
 // angleMode(DEGREES);
  colorMode(RGB);
  background(195, 177, 225);
  
}

function draw() {
  //background(220, 9, 39);

 var a = n * 19.2; //Golden Angle 137.5
 var r = c * sqrt(n); // distence also root
 var x = r * cos(a) + width / 2;
 var y = r * sin(a) + height / 2;

 let textss = 'Cherry blossom \n eun soo cho';
 fill(50);
 text(textss, 10, 350, 70, 80);

 for(let i = 0; i < 255; i++)
 {
    let r = random(100);
    noStroke();
    fill( i , r, 100);
    rect (x + 100, y + 100 , 15, 15);
 }
 
 for(let i = 0; i < 155; i++)
 {
    let r = random(100);
    noStroke();
    fill( i , r, 180);
    rect (x - 100, y - 100 , 15, 15);
 }
 

 n++;

  
}
