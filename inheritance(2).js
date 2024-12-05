class Vehicle{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
}

class Bus extends Vehicle{
  constructor(name, price, tires, seat) {
      super(name,price)
      this.tires = tires;
      this.seat = seat;
  }
}

const bus1 = new Bus('Aladin', 20000, 6, 32);
console.log(bus1)

const bus2 = new Bus('Shyamoli', 20000, 6, 32);
console.log(bus2)

/* class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move(){
    console.log('car is Dancing');
  }
}

class Bus extends Vehicle(){
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle(){
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
} */