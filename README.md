# Closure

- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- A closure gives a function access to its outer scope.
- closures are created every time a function is created, at function creation time.

### We cannot access variables declared inside the closure as they are private, so for reading and validating the variable inside the closure we create Accessors (getters) and Mutators (setters) functions. We cannot directly modify the variables inside the closure.

### Example:

```
// Setter function to check validation for count

function increment(ch) {
    if (ch > 1) {
      count = ch;
      count += 1;
      return count;
    } else {
      console.log("Count is less than 1");
    }
  }
```

# Currying

- **_Currying means breaking a function that takes many arguments into smaller functions that take one argument at a time._**

- **_Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)._**

```
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
```
