// Class based closure (new style)

// class counter {
//   #count;

//   getValues() {
//     return this.#count;
//   }

//   increment(count) {
//     if (count > 1) {
//       this.#count = count;
//       this.#count += 1;
//       console.log("Increment", this.#count);
//     } else {
//       console.log("Count is less than 1");
//     }
//   }

//   decrement() {
//     this.#count -= 1;
//     console.log("Decrement", this.#count);
//   }
// }

// let c = new counter();

// c.count = 2;
// c.increment();

// functional closure

function counter() {
  let count = 0;

  function increment(ch) {
    if (ch > 1) {
      count = ch;
      count += 1;
      return count;
    } else {
      console.log("Count is less than 1");
    }
  }

  return {
    increment,
  };
}

let c = counter();
let d = counter();
// let cVal = c.increment(2);
let dVal = d.increment(10);
console.log("Increment function c", c.increment(2));
console.log("Increment function d", dVal);
