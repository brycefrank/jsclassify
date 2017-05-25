//training_var

// Create the training dataframe
var training_df = new Dataframe(training_var);
var num_bands = training_df.band_array.length;

// Create the perceptron, with the number of bands as the number of inputs.
var perceptron1 = new Perceptron(num_bands)

convert = function(n) {
  //Converts a 0 to a -1
  if (n == -0) {
    return -1
  } else {
    return n
  }
}

// Train the perceptron
for (var i = 0; i < training_df.size; i++) {
  var inputs = training_df.get_row("bands", i);
  var desired = convert(training_df.frame["forested"][i]);
  perceptron1.train(inputs, desired);
}

// Check it again with the same data (I know...)

var PFAF = 0;
var PNAF = 0;
var PFAN = 0;
var PNAN = 0;

for (var i = 0; i < training_df.size; i++) {
  var inputs = training_df.get_row("bands", i);
  var actual = convert(training_df.frame["forested"][i]);
  var predicted = perceptron1.feedforward(inputs);

  if ((predicted == 1) && (actual == 1)){
    PFAF+= 1;
  }
  else if ((predicted == -1) && (actual == 1)){
    PNAF += 1;
  }
  else if ((predicted == 1) && (actual == -1)){
    PFAN += 1;
  }
  else if ((predicted == -1) && (actual == -1)){
    PNAN += 1;
  }
}

console.log(PFAF);
console.log(PNAF);
console.log(PFAN);
console.log(PNAN);

confusion_matrix = function() {
}
