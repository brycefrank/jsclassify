function setup() {
  createCanvas(400, 400);
  console.log(sample7_neural);
  console.log("Thing");

  var index = 0;
  for (var i = 0; i < 400; i++) {
    for (var j = 0; j < 400; j++) {
      if (sample7_neural[index] == 1) {
        rect(j, i, 1, 1);
      }
      index++;
    }
  }

}

function draw() {
}
