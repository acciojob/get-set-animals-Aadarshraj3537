// Define the Animal class
class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  get species(): string {
    return this._species;
  }

  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Define the Cat class that extends Animal
class Cat extends Animal {
  constructor(species: string) {
    super(species);
  }

  purr(): void {
    console.log("purr");
  }
}

// Define the Dog class that extends Animal
class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  bark(): void {
    console.log("woof");
  }
}

// Testing the implementation
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof


