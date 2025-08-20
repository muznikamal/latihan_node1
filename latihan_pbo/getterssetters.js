class car {
  constructor(brand, factory) {
    this._carname = brand;
    this._factory = factory;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
  get factory() {
    return this._factory;
  }
  set factory(x) {
    this._factory = x;
  }
}

newcar = new car("Pajero", "Mitsubishi");
newcar.carname = "Alphard"; //mengubah nilai carname
newcar.factory = "Toyota"; //mengubah nilai factory
console.log(newcar.carname); //Output: Alphard
console.log(newcar.factory); //Output: Toyota
