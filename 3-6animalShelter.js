var AnimalShelter = function () {
  this.dogs = [];
  this.cats = [];
  this.nextAny = [];

  this.takeInDog = (name) => {
    this.dogs.push(name);
    this.nextAny.push('dog');
    return name;
  }

  this.takeInCat = (name) => {
    this.cats.push(name);
    this.nextAny.push('cat');
    return name;
  }

  this.adoptOutNextDog = () => {
    return this.dogs.shift();
  }

  this.adoptOutNextCat = () => {
    return this.cats.shift();
  }

  this.adoptOutNextAny = () => {
    var animal = this.nextAny.shift();
    return (animal === 'dog') ? this.dogs.shift() : this.cats.shift();
  }

};

var shelter = new AnimalShelter();


// shelter.takeInCat('fluffy');
// shelter.takeInDog('drifter');
// shelter.takeInCat('muffy');
// shelter.takeInCat('scruffy');
// shelter.takeInCat('puffy');
// shelter.takeInCat('tuffy');
// shelter.takeInCat('duffy');
// shelter.takeInCat('buffy');
// shelter.takeInCat('gruffy');
// shelter.takeInCat('huffy');
// shelter.takeInCat('steve');


// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());
// console.log(shelter.adoptOutNextAny());

