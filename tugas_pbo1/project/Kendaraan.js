// Kendaraan.js
class Kendaraan {
  constructor(nama) {
    if (this.constructor === Kendaraan) {
      throw new Error(
        "Tidak bisa membuat instance dari class abstrak Kendaraan"
      );
    }
    this.nama = nama;
  }

  start() {
    throw new Error("Method start() harus diimplementasikan di subclass");
  }

  stop() {
    throw new Error("Method stop() harus diimplementasikan di subclass");
  }

  info() {
    throw new Error("Method info() harus diimplementasikan di subclass");
  }
}

export default Kendaraan;
