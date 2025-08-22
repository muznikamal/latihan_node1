// Mobil.js
import Kendaraan from "./Kendaraan.js";

class Mobil extends Kendaraan {
  constructor(nama) {
    super(nama);
  }

  start() {
    console.log("Mobil dinyalakan");
  }

  stop() {
    console.log("Mobil dimatikan");
  }

  info() {
    console.log(`Ini adalah mobil ${this.nama}`);
  }
}

export default Mobil;
