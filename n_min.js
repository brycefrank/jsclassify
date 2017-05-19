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

check = function(id) {
  closest_id = near_inds(dataset[id], 1); // Get the nearest neighbor id
  if (dataset["forested"][id] == dataset["forested"][closest_id]) {
    return 1;
  } else {
    return 0;
  }
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
