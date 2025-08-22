// Motor.js
import Kendaraan from "./Kendaraan.js";

class Motor extends Kendaraan {
  constructor(nama) {
    super(nama);
  }

  start() {
    console.log("Motor dinyalakan");
  }

  stop() {
    console.log("Motor dimatikan");
  }

  info() {
    console.log(`Ini adalah motor ${this.nama}`);
  }
}

export default Motor;
