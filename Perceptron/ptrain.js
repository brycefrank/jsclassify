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
train = function() {
  for (var i = 0; i < training_df.size; i++) {
    var inputs = training_df.get_row("bands", i);
    var desired = convert(training_df.frame["forested"][i]);
    perceptron1.train(inputs, desired);
  }
}

train();


array_to_string = function(arr) {
  // Outputs a new window with a string version of the processed array.
  // TODO: DIY with run_nn.js, make a new script with things used by both analyses.
  var j_string = JSON.stringify(arr);
  var url = 'data:text/json;charset=utf8,' + encodeURIComponent(j_string);
  window.open(url, '_blank');
  window.focus;
}


binary_convert = function(arr) {
  // Converts the perceptron (-1, 1) array into a binary (0, 1) array.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      arr[i] = 0;
    }
  }
  return arr;
}

run_neural_net = function(sample, training) {
   var binary_arr = [];
   for (var i = 0; i < sample.size; i++) {
    var inputs = sample.get_row("bands", i);
    var actual = convert(training.frame["forested"][i]);
    var predicted = perceptron1.feedforward(inputs);

    // Push the resulte to binary_arr
    binary_arr.push(predicted);
  }
  binary_arr = binary_convert(binary_arr);
  array_to_string(binary_arr);
}

confusion_matrix = function() {
  var PFAF = 0;
  var PNAF = 0;
  var PFAN = 0;
  var PNAN = 0;

  // Create an empty array to save the information.
  var binary_arr = [];

  for (var i = 0; i < training_df.size; i++) {
    var inputs = training_df.get_row("bands", i);
    var actual = convert(training_df.frame["forested"][i]);
    var predicted = perceptron1.feedforward(inputs);

    // Push the resulte to binary_arr
    binary_arr.push(predicted);

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

  binary_arr = binary_convert(binary_arr);

  console.log(PFAF);
  console.log(PNAF);
  console.log(PFAN);
  console.log(PNAN);
}

confusion_matrix();


// Initialize the sample data.
//var sample7 = new Dataframe(samp7);
//var sample5 = new Dataframe(samp5);

//Create the binaries
//run_neural_net(sample5, training_df);
//run_neural_net(sample7, training_df);
