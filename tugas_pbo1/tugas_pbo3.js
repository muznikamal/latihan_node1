// Class Induk
class Produk {
  constructor(nama, harga) {
    this.nama = nama;
    this.harga = harga;
  }

  // Method umum
  deskripsi() {
    return `${this.nama}, Harga: ${this.harga}`;
  }
}

// Class Turunan Elektronik
class Elektronik extends Produk {
  constructor(nama, harga, garansi) {
    super(nama, harga); // panggil constructor parent
    this.garansi = garansi;
  }

  // Override method
  deskripsi() {
    return `Elektronik: ${this.nama}, Harga: ${this.harga}, Garansi: ${this.garansi}`;
  }
}

// Class Turunan Pakaian
class Pakaian extends Produk {
  constructor(nama, harga, ukuran) {
    super(nama, harga);
    this.ukuran = ukuran;
  }

  // Override method
  deskripsi() {
    return `Pakaian: ${this.nama}, Harga: ${this.harga}, Ukuran: ${this.ukuran}`;
  }
}

// Class Turunan Makanan
class Makanan extends Produk {
  constructor(nama, harga, expired) {
    super(nama, harga);
    this.expired = expired;
  }

  // Override method
  deskripsi() {
    return `Makanan: ${this.nama}, Harga: ${this.harga}, Expired: ${this.expired}`;
  }
}

// ======================
// Langkah 3: Uji Program
// ======================
const p1 = new Elektronik("Laptop", 8000000, "2 tahun");
const p2 = new Pakaian("Kaos", 100000, "L");
const p3 = new Makanan("Roti", 15000, "12-09-2025");

// Cetak output
console.log(p1.deskripsi());
console.log(p2.deskripsi());
console.log(p3.deskripsi());
