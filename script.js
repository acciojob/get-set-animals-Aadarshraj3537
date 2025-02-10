// Define the Animal class
class Animal {
  constructor(species) {
    this.species = species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("woof");
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;



