class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
  }
  
class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }
  
    add(vehicle) {
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";
      }
  
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
  
      this.vehicles.push(vehicle);
      return "Vehicle Added!";
    }
  }
  

  
  const myGarage = new Garage(3);
  const car1 = new Vehicle("Toyota", "Camry");
  const car2 = new Vehicle("Honda", "Civic");
  const bike = { type: "bicycle" }; 
  
  console.log(myGarage);
  console.log(myGarage.add(car1)); 
  console.log(myGarage.add(car2)); 
  console.log(myGarage.add(bike)); 
  console.log(myGarage.add(new Vehicle("Ford", "Focus"))); 
  

