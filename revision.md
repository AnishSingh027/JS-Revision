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
