// A function to find the indices of the n minimum values in an array.

var test_arr = [4,5,8,9,12,0,7,1,2,13]

function get_min(arr) {
  // Gets the minimum index of an array (not ignoring 0's)
  var test_val = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < test_val && arr[i] != 0) {
      test_val = arr[i];
      min_ind = i;
      console.log(test_val)
    }
  }
  return min_ind;
}

function n_mins(arr, n) {
  var inds = [];
  for (var i = 0; i < n; i++) {
    ind = get_min(arr);
    arr[ind] = 0;
    inds.push(ind)
  }
  return inds;
}


console.log(n_mins(test_arr, 5))
