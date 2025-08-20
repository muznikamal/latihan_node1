class Person {
  #age;
  constructor(name, age) {
    this.name = name; //Public
    this.age = age; //Private
  }

  // Getter
  getAge() {
    return this.#age;
  }

  // Setter dengan validasi
  setAge(newAge) {
    if (newAge < 0 || newAge > 150) {
      console.log("Umur tidak valid");
    } else {
      this.#age = newAge;
    }
  }
}

var orang = new person1("Jhon", 25);
console.log(orang.name); //John
console.log(orang.getAge()); //25
