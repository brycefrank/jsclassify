// This script runs the nearest neighbor analysis and out puts a binary
// JSON file to a new tab for each sample.

// Initialize the dataframes
var sample5 = new Dataframe(samp5);
var sample7 = new Dataframe(samp7);

// Set the training data.
var training = new Dataframe(training_var);

run_nn = function(dataframe, cap) {
  var pixel_array = [];
  dataframe = build_distances(dataframe, training, cap);
  for (var i = 0; i < cap; i++){
    pixel_array.push(impute(i, dataframe, training))
  }
  var j_string = JSON.stringify(pixel_array);
  var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
  window.open(url, '_blank');
  window.focus();
}

// Perform analysis on both dataframes.
run_nn(sample5, sample5.size);
run_nn(sample7, sample7.size);
