// Noraml function

function add(a, b) {
  return a + b;
}

console.log(add(3, 4));

// Currying

function add1(a) {
  console.log("First");
  return function (b) {
    console.log("Second");
    return function (c) {
      console.log("Third");
      return a + b + c;
    };
  };
}

console.log(add1(3)(4)(3));
