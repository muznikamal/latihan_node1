// Sepeda.js
import Kendaraan from "./Kendaraan.js";

class Sepeda extends Kendaraan {
  constructor(nama) {
    super(nama);
  }

  start() {
    console.log("Sepeda digunakan");
  }

  stop() {
    console.log("Sepeda dihentikan");
  }

  info() {
    console.log(`Ini adalah sepeda ${this.nama}`);
  }
}

export default Sepeda;
