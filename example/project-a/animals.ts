class Animal {
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`)
  }
}

const dog = new Animal();
dog.move(10);
