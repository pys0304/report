let img;
function preload() {
  img = loadImage("pm.png");
}

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //rotateZ(frameCount * 0.01);
  texture(img);
  box(100);
}
