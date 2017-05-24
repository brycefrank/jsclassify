// Initialize the dataframes
var sample5 = new Dataframe(samp5);
var training = new Dataframe(training_var);



console.log(training.get_average_cluster(0));
console.log(training.get_average_cluster(1));

var cap = sample5.size;
var pixel_array = [];

sample5.frame = build_distances(sample5, training, cap);

for (var i = 0; i < cap; i++){
  pixel_array.push(impute(i, sample5, training))
}
console.log(pixel_array)
var newArr = [];

while(pixel_array.length) newArr.push(arr.splice(0,3));


function setup () {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  loadPixels();
  var d = pixelDensity;
  for (var i = 0; i < d; i++) {
    for (var j = 0; j < d; j++) {
      // loop over
      if (newArr[i][j] == 1) {
        idx = 4 * ((y * d + j) * width * d + (x * d + i));
        pixels[idx] = 255;
        pixels[idx+1] = 255;
        pixels[idx+2] = 255;
        pixels[idx+3] = 255;
      } 
    }
  }
  updatePixels();
}
