function setup() {
  createCanvas(windowWidth, windowHeight);
  angleSlider = createSlider(0, TWO_PI, PI, 0.01);
  angleSlider.position(0, windowHeight-25);
}

function draw() {
  background(0);
  strokeWeight(0)
  angle = angleSlider.value()
  fill("white")
  text("Angle: " + angleSlider.value(), 135, windowHeight-12)
  stroke("white")
  strokeWeight(2)
  translate(width/2, height);
  branch(180)
}

function branch(len) {
  if (len < 4) {
    return
  }
  line(0, 0, 0, -len);
  translate(0, -len);

  push();
  rotate(angle/4)
  branch(len*0.67);

  pop();
  rotate(-angle/4)
  branch(len*0.67)
}