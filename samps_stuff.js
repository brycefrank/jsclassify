// Initialize the dataframes
var sample5 = new Dataframe(samp5);
var training = new Dataframe(training_var);

var t1 = training.get_row("bands", 22);
var s1 = sample5.get_row("bands", 450);

var cap = sample5.size;
sample5.frame = build_distances(sample5, training, cap);


//console.log(sample5.frame)

var pixel_array = [];
var px = 0;
// for (var i = 0; i < cap; i++){
//   pixel_array.push(impute(i, sample5, training))
// }

function setup () {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  loadPixels();


  pixel_array.push(impute(px, sample5, training))
  px++;

  var j = 0;
  for (var i = 0; i < cap; i++) {

    if (pixel_array[i] == 1){
      pixels[j+0] = 255;
      pixels[j+1] = 255;
      pixels[j+2] = 255;
      pixels[j+3] = 255;
    }
    j+=4;
  }

  updatePixels();

}
