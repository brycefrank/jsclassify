// Visualization of NN analysis on two sample images.
//TODO: Fix this.
function setup () {
  createCanvas(400, 400);
}

function draw() {
  loadPixels();
  var j = 0;
  for (var i = 0; i < 400*400*16; i++) {
    pixels[j] = 100;
    pixels[j+1] = 100;
    pixels[j+2] = 100;
    pixels[j+3] = 100;
    j+=4;
  }
  updatePixels();

}
