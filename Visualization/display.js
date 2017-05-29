// TODO: D-R-Y.....(weird behavior with instances in p5js)
var sketch1 = function( p ) {
  p.setup = function() {
    p.createCanvas(400, 400);
    var index = 0;
    for (var i = 0; i < 400; i++) {
      for (var j = 0; j < 400; j++) {
        if (sample5_neural[index] == 1) {
          this.rect(j, i, 1, 1);
        }
        index++;
      }
    }
  }

  p.draw = function() {
  }
}

var sketch2 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    var index = 0;
    for (var i = 0; i < 400; i++) {
      for (var j = 0; j < 400; j++) {
        if (sample5_nearest[index] == 1) {
          p.rect(j, i, 1, 1);
        }
        index++;
      }
    }
  }

  p.draw = function() {
  }
}

var sketch3 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    var index = 0;
    for (var i = 0; i < 400; i++) {
      for (var j = 0; j < 400; j++) {
        if (sample7_neural[index] == 1) {
          p.rect(j, i, 1, 1);
        }
        index++;
      }
    }
  }

  p.draw = function() {
  }
}

var sketch4 = function(p) {
  p.setup = function() {
    p.createCanvas(400, 400);
    var index = 0;
    for (var i = 0; i < 400; i++) {
      for (var j = 0; j < 400; j++) {
        if (sample7_nearest[index] == 1) {
          p.rect(j, i, 1, 1);
        }
        index++;
      }
    }
  }

  p.draw = function() {
  }
}

var image1 = function(p) {
  p.setup = function() {
    p.createCanvas(400,400);
    img = p.loadImage("samp5.jpg");
    p.image(img,0,0);
  }

  p.draw = function() {
  }
}

var image2 = function(p) {
  p.setup = function() {
    p.createCanvas(400,400);
    img = p.loadImage("samp7.jpg");
    p.image(img,0,0);
  }

  p.draw = function() {
  }
}


var s5ne = new p5(sketch1, 'c1');
var s5nn = new p5(sketch2, 'c2');
var s7ne = new p5(sketch3, 'c3');
var s7nn = new p5(sketch4, 'c4');
var img1 = new p5(image1, 'i1');
var img2 = new p5(image2, 'i2');
