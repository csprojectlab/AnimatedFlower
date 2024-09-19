var x;
var y;
var t;  // use this for text fluctuation.
var keepBeating = true;

function setup() {
  createCanvas(400, 400);

  // only need color no stroke is required.
  noStroke();  

  // initial setup.
  x=100;

  t = 0.05;

  document.body.style.touchAction = 'manipulation'; 
}

function draw() {
  if (keepBeating){
    // Keep incrementing the value of x for beating animation.
    x+=0.3;
    
    // Restricting the variable value to certain limit.
    if (x > 300)
        x = 0.3
    
    y=3*(cos(x)+sin(x/2))+110;
  }
    // setting background close to blue with a faint fluctuation with green color.
    background(0, y/3, y);

    // Fill shape with red.
    fill(250,0,0);

    push()
    // Ajusting to the center of the screen.
    translate(width/2, height/2 - 80);
    push()
    rotate(PI/4.0);
    square(0,0,y);
    circle(y/2,0,y);
    circle(0,y/2,y);
    pop()

    fill(235,0,0)
    textSize(y - 100); // Set the size of the text
    t += 0.05;
    text('SHIVANI', -20, 70); // Display text at coordinates (50, 100)
    pop()

    fill(255,255,255)
    text("Created by Ari!!!  Tap screen to stop & start", 10, 20)
}

function touchStarted() {
  keepBeating = !keepBeating;
  return true;
}
