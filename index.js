// Your code here
// Cat class
class Cat {
    constructor(name, sex) {
      this.name = name; // instance property for the name
      this.sex = sex;   // instance property for the sex
    }
  
    // speak method for Cat
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  // Dog class
  class Dog {
    constructor(name, sex) {
      this.name = name; // instance property for the name
      this.sex = sex;   // instance property for the sex
    }
  
    // speak method for Dog
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  // Bird class
  class Bird {
    constructor(name, sex) {
      this.name = name; // instance property for the name
      this.sex = sex;   // instance property for the sex
    }
  
    // speak method for Bird
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Example Usage:
  const cat = new Cat("Whiskers", "female");
  console.log(cat.speak()); // Output: Whiskers says meow!
  
  const dog = new Dog("Buddy", "male");
  console.log(dog.speak()); // Output: Buddy says woof!
  
  const birdMale = new Bird("Polly", "male");
  console.log(birdMale.speak()); // Output: It's me! Polly, the parrot!
  
  const birdFemale = new Bird("Sky", "female");
  console.log(birdFemale.speak()); // Output: Sky says squawk!
  