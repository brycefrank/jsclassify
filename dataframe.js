function Dataframe(json) {
  // Creates a dataframe object out of my wacky tables.
  this.size = Object.keys(json.x).length;
  this.frame = json;

  // Construct an array of bands
  this.band_array = []
  for (var i = 0; i < Object.keys(json).length; i++) {
    if (Object.keys(json)[i].startsWith("b")) {
      this.band_array.push(Object.keys(this.frame)[i]);
    }
  }

  this.get_row = function(set, n) {
    //Returns the nth row of a javascript object bands.
    if (set == "whole") {
      var col_names = Object.keys(this.frame);
    }
    else if (set == "bands") {
      var col_names = this.band_array;
    }

    row_array = [];
    for (var i = 0; i < col_names.length; i++) {
      col = col_names[i];
      row_array.push(this.frame[col][n]);
    }
    return row_array
  }

  this.get_attributes = function(col, value) {
    // Counts the number of rows given some column and some value within that column.
    var count = 0;
    for (var i = 0; i < this.size; i++) {
      if (this.frame[col][i] == value) {
        count+=1;
      }
    }
    return count;
  }

  this.get_average_cluster = function(forest) {
    var band_avgs = [];
    for (var i = 0; i < this.band_array.length; i++) {
      var total = 0;
      for (var j = 0; j < this.size; j++){
        if (this.frame["forested"][j] == forest) {
          total += this.frame[this.band_array[i]][j];
        }

      }
      band_avgs.push(total / this.size);
    }
    return band_avgs;
  }
}
