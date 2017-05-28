function Perceptron(n) {
  this.weights = [];
  this.c = 0.01; // The learning constant

  for (var i = 0; i < n; i ++) {
    var rand = Math.random(-1, 1)
    this.weights.push(rand);
  }

  this.activate = function(sum) {
    if (sum > 0) {return 1}
    else {return -1}
  }

  this.feedforward = function(inputs) {
    var sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  this.train = function(inputs, desired) {
    var guess = this.feedforward(inputs);
    var error = desired - guess;
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c * error * inputs[i];
    }
  }
 }
