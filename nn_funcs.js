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

get_min = function(arr) {
  // Find a value that is not 0 to start
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      test_val = arr[i];
      break;
    }
  }
  // Gets the minimum index of an array (not ignoring 0's)
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= test_val && arr[i] != 0) {
      test_val = arr[i];
      min_ind = i;
    }
  }
  return min_ind;
}

build_distances = function(sample, training, cap) {
  // Creates new keys in the dataframe corresponding to distance from
  // the given record number
  for (var i = 0; i < cap; i ++) {
    var band_col = [];
    array1 = sample.get_row("bands", i);
    for (var j = 0; j < training.size; j++) {
      array2 = training.get_row("bands", j);
      var col = j+'';
      band_col.push(euc_dist_10(array1, array2));
    }
    col = i+'';
    sample[col] = band_col;
  }
  return sample;
}


near_inds = function(arr, n) {
  var inds = [];
  var holdover = [];
  for (var i = 0; i < n; i++) {
    ind = get_min(arr);
    holdover.push(arr[ind])
    inds.push(ind)
    arr[ind] = 0;
  }
  // Put the old values back in (bleh)
  for (var i = 0; i < holdover.length; i++) {
    arr[inds[i]] = holdover[i];
  }
  return inds;
}

check = function(id, sample, training) {
  closest_id = near_inds(sample.frame[id], 1); // Get the nearest neighbor id
  return training.frame["forested"][closest_id]
}

confusion_matrix = function() {
  // Constructs a confusion matrix from the dataset and NN analysis.
  // This is the main analysis function for the script...for now?
  var n = size;
  var act_forest = get_attributes("forested", 1);
  var act_non_forest = get_attributes("forested", 0);

  // Confusion variables
  // TODO: Think of ways to clean these?
  var PFAF = 0;
  var PNAF = 0;
  var PFAN = 0;
  var PNAN = 0;

  for (var i = 0; i < size; i++) {
      actual = dataset["forested"][i];
      near_ind = near_inds(dataset[i], 1)[0];
      predicted = dataset["forested"][near_ind];
      //console.log(actual);
      if ((predicted == 1) && (actual == 1)){
        PFAF+= 1;
      }
      else if ((predicted == 0) && (actual == 1)){
        PNAF += 1;
      }
      else if ((predicted == 1) && (actual == 0)){
        PFAN += 1;
      }
      else if ((predicted == 0) && (actual == 0)){
        PNAN += 1;
      }
  }
  console.log(PFAF);
  console.log(PNAF);
  console.log(PFAN);
  console.log(PNAN);
}
