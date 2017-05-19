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

function n_mins(arr, n) {
  var temp_arr = arr;
  var inds = [];
  for (var i = 0; i < n; i++) {
    ind = get_min(temp_arr);
    arr[ind] = 0;
    inds.push(ind)
  }
  return inds;
}


console.log(dist_from_zero)
//console.log(n_mins(dist_from_zero, 5))
