// A function to find the indices of the n minimum values in an array.



function get_min(arr) {
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

function near_inds(arr, n) {
  var temp_arr = arr;
  var inds = [];
  var holdover = [];
  for (var i = 0; i < n; i++) {
    ind = get_min(temp_arr);
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

function check(id) {
  closest_id = near_inds(dataset[id], 1); // Get the nearest neighbor id
  if (dataset["forested"][id] == dataset["forested"][closest_id]) {
    return 1;
  } else {
    return 0;
  }
}

var j = 0
for (var i = 0; i < size; i++) {
  j += check(i);
}

console.log(j / size);
