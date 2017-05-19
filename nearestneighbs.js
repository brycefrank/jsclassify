// Importing into main script
// Heavily based off of Dan Shiffman's
// tutorial video: https://www.youtube.com/watch?v=N8Fabn1om2k

var dataset = training_var;


var size = Object.keys(dataset.x).length; //get length of dataframe
//var size = 20; // for development purposes, shrink down the sample size

// Construct an array of bands.
var band_array = []
for (var i = 0; i < Object.keys(dataset).length; i++) {
  if (Object.keys(dataset)[i].startsWith("b")) {
    band_array.push(Object.keys(dataset)[i]);
  }
}

get_row = function(n, set) {
  //Returns the nth row of a javascript object bands.
  if (set == "whole") {
    var col_names = Object.keys(dataset);
  }
  else if (set == "bands") {
    var col_names = band_array;
  }

  row_array = [];
  for (var i = 0; i < col_names.length; i++) {
    col = col_names[i];
    row_array.push(dataset[col][n]);
  }
  return row_array
}

euc_dist_10 = function(array1, array2) {
  // Returns the euclidean distance of two 10d arrays
  if (array1.length != 10 | array2.length != 10){
    console.log("Please supply two arrays of length 10.")

  } else {
    var diff_arr = [];
    for (var i = 0; i < array1.length; i++) {
      diff_arr.push(Math.pow(array1[i] - array2[i], 2));
    }
    sum = 0;
    for (var i in diff_arr){sum += diff_arr[i]}
    return Math.pow(sum, 1/10);
  }
}


build_distances = function() {
  // Creates new keys in the dataframe corresponding to distance from
  // the given record number
  for (var i = 0; i < size; i ++) {
    var band_col = [];
    array1 = get_row(i, "bands");
    for (var j = 0; j < size; j++) {
      array2 = get_row(j, "bands");
      var col = j+'';
      band_col.push(euc_dist_10(array1, array2));
    }
    col = i+'';
    dataset[col] = band_col;
  }
}

build_distances()

get_attributes = function(col, value) {
  // Counts the number of rows given some column and some value within that column.
  var count = 0;
  for (var i = 0; i < size; i++) {
    if (dataset[col][i] == value) {
      count+=1;
    }
  }
  return count;
}

nn_index = function(arr) {
  // Get some starting values.
  k_inds = []
  if (arr[0] != 0) {
    var min = arr[0];
  } else {
    var min = arr[1];
  }
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            maxIndex = i;
            min = arr[i];
        }
    }
    return maxIndex;
}
