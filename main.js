// For storing the image.
let img;
// Breaking the image in rows and columns.
let rows;
let columns;
// Size of the pixel to break the image.
let pixelSize = 60;
let stopSize = pixelSize;
// Storing the brightness of the picture. Much useful when use dark color.
let sizes = [];
// To control the fluctuation effect.
let delayFrames = 25;


// Load the image.
function preload() {
  img = loadImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Fin-en%2Flisting%2F252184736%2Ftextured-art-pretty-painting-beautiful&psig=AOvVaw0whRRrz1kBRQ_K8MtGA-9Q&ust=1727152269369000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJiMq8me2IgDFQAAAAAdAAAAABAE");  
}

// Create canvas.
function setup() {
  createCanvas(350, 800);  
}

function draw() {
  // Only draw at specific frame rate.
  if (frameCount % delayFrames === 0){
    // Get rows and columns values based on size.
    columns = width/pixelSize;
    rows = height/pixelSize;
    for (let i = 0; i < columns; i++){
      sizes[i] = [];
      for(let j = 0; j < rows; j++){
        sizes[i][j] = 0;
      }
    }
    // Set the background to black. When pixel size is big this will be the color displayed b/w pixels.
    background(0);

    // Resize the image to fit the canvas.
    img.resize(350, 800);
    for (let i = 0; i < columns; i++){
      for (let j = 0; j < rows; j++){
        // Get the pixel at i'th and j'th position.
        let pixel = img.get(i*pixelSize, j*pixelSize);
        // Map the pixel brightness to the size of the pixel.
        sizes[i][j] = map(brightness(pixel), 0, 100, 0, 50);

        // Set the fill and stroke.
        fill(pixel);
        noStroke();

        // Draw pixel as rectangle.
        rect(i*pixelSize, j*pixelSize, sizes[i][j], sizes[i][j]);
      }
    }

    fill(0,60,32)
    textSize(7);
    text('FOR SHIVANI', 300, 20); // Display text at coordinates (50, 100)

    // Reduce the size of the block to increase sharpness.
    pixelSize--;
    // Boundary case.
    if (pixelSize == 0){
      pixelSize = floor(random(stopSize - 20, stopSize));
    }
  }
}
