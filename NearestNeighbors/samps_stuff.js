// Initialize the dataframes
var sample5 = new Dataframe(samp5);
var training = new Dataframe(training_var);



console.log(training.get_average_cluster(0));
console.log(training.get_average_cluster(1));

var cap = sample5.size;
//var cap = 1000;
var pixel_array = [];

// sample5.frame = build_distances(sample5, training, cap);
//
// for (var i = 0; i < cap; i++){
//   pixel_array.push(impute(i, sample5, training))
// }
console.log(pixel_array)

function setup () {
  createCanvas(400, 400);
  console.log(displayDensity())
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
