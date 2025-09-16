// 1. Method overloading (Static binding)

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }

//   add(a, b, c) {
//     return a + b + c;
//   }
// }

// As method overloading in JS doesn't work same as Java or C++ as JS is loosely typed language
// As this code will not work because both the functions inside of the class is having same name and in JS the last written funtion will
// override rest of them with same name.

// class Calculator {
//   add(...args) {
//     return args.reduce((arg1, arg2) => arg1 + arg2, 0);
//   }
// }

// let c = new Calculator();

// console.log(c.add(1.4, 2.332, 3.9, 4.7).toFixed(3));

// Using rest operator as arguments inside the function we can convert the numbers into an array and we can use reduce function
// to accumulate the result.

// 2. Method overriding (Dynamic binding)

// class Animal {
//   sound() {
//     console.log("Animal sound");
//   }
//   hello() {
//     console.log("Hello");
//   }
// }

// class Cat extends Animal {
//   sound() {
//     console.log("Meow");
//   }
// }

// class Dog extends Animal {
//   sound() {
//     super.hello();
//     console.log("Bark");
//   }
// }

// let a = [new Animal(), new Cat(), new Dog()];

// a.forEach((element) => {
//   element.sound();
// });

// Overriding means: a child class provides its own implementation of a method that is already defined in the parent class.
// You get a hierarchy: Animal → Cat in inheritance as Cat is saying “I am an Animal, but I make a different sound.”
// Child classes can reuse parent behavior (super) and extend it.

class Animal {
  sound(prompt) {
    console.log(prompt);
  }
}

class Cat extends Animal {}

class Dog extends Cat {}

let a, b, c;

a = new Dog();
// b = new Cat();
// c = new Animal();

a.sound("Bark...");
// b.sound("Meow");
// c.sound("Animal");

// If methods are not present in the child class then it will be searched in parent class and so on, this process is
// known as prototype chaining.
// We can reuse the same code defined in parent class into the child class if all child share the same functionality
