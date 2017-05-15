// Create a way to produce training data

// Load image into memory


// Randomly select an x, y coordinate

  // Display the area of the x, y coordinate (200 x 200 pixels?)
  // This will be on main canvas

  // Record if the pixel is forested or not forested
    // Include the x, y, and band values for the pixel:
      // FORESTED, X, Y, B1, B2...etc
      // As a csv?
  // Depending on memory / image constraints, do this ~ 500 times


function setup() {
  frameRate(20);

  window_width = 201;
  window_height = 201;
  createCanvas(window_width,window_height);

  img = loadImage("assets/natcolor.jpg")
}

function center_abs(x, y) {
  // Returns the absolute x y coordinate for the center of the window.
  return [x + Math.floor(window_width / 2), y + Math.floor(window_width / 2)]
}

function random_area() {
  // Moves the image in a random fashion
  var x = Math.floor(random(0, img.width));
  var y = Math.floor(random(0, img.width));
  return [x, y]
}

function csv_writer(data) {
  // Adds information: pixelx, pixely, forested
  var csv = 'Name,Title\n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });

    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();
}

var info = [];
var coord = [0,0];
var frame = 0;

function keyPressed() {
  if (keyCode === UP_ARROW){
    info.push([abs_coord[0], abs_coord[1], 1])
  }
  if (keyCode === DOWN_ARROW) {
    info.push([abs_coord[0], abs_coord[1], 0])
  }
  else if (keyCode === LEFT_ARROW) {
    csv_writer(info)
  }
  coord = random_area();
  abs_coord = center_abs(coord[0], coord[1]);
  console.log(info)
}

function draw() {


  wx = coord[0];
  wy = coord[1];

  image(img, -wx, -wy);
  noFill();
  rect(window_width / 2, window_width /2, 1, 1);
}
