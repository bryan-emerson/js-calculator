console.log("sup");

const calculator = {
  add: function(a, b) {
    return a + b;
  },

  sub: function(a, b) {
    return a - b;
  },

  mult: function(a, b) {
    return a * b;
  },

  div: function(a, b) {
    return a / b;
  },

  exponent: function(a, b) {
    return a ** b;
  },

  fancyMath: function(a, b) {
    return (a * b) / b;
  }
}

console.log(calculator.exponent(2, 3));


