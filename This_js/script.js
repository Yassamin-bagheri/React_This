// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//         person.name = this.name

// const person1 = {
//   name: "SpongeBob",
//   favFood: "hamburgers",
//   sayHello: function () {
//     console.log(`Hi! I am ${this.name}`);
//   }, // or person1.name both works
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favFood}`);
//   },
// };

// const person2 = {
//   name: "Patrick",
//   favFood: "pizza",
//   sayHello: function () {
//     console.log(`Hi! I am ${this.name}`);
//   }, // or person1.name both works
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favFood}`);
//   },
// };

// // person1.sayHello()
// person1.eat();
// person2.eat();

// console.log(this); //windoww

// Hint! this does not work with arrow functions

const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: () => {
    console.log(`Hi! I am ${this.name}`);
  }, // or person1.name both works
  eat: () => {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person2.eat()