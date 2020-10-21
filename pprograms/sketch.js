var x =0;
var y =200;
var diameter=50;

var r =298;
var g= 170;
var b=211;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(r,g,b);
  fill(200, 200, 180);
  ellipse(x,y, diameter,diameter);
  
  x = x + 1;
}