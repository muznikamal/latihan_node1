// Langkah 1: Membuat Class
class Produk {
  constructor(nama, harga, stok) {
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  // Langkah 2: Method dengan percabangan
  cekStok() {
    if (this.stok > 10) {
      console.log(`${this.nama} stok masih banyak (${this.stok})`);
    } else if (this.stok > 0) {
      console.log(`${this.nama} stok menipis (${this.stok})`);
    } else {
      console.log(`${this.nama} stok habis!`);
    }
  }

  // Langkah 2: Method dengan perulangan
  diskonBertingkat() {
    console.log(`Simulasi diskon untuk ${this.nama}:`);
    for (let i = 1; i <= 3; i++) {
      let hargaDiskon = this.harga - this.harga * (0.1 * i);
      console.log(`Diskon ${i * 10}% = Rp${hargaDiskon}`);
    }
  }
}

// Langkah 3: Buat dan Uji Beberapa Objek
const p1 = new Produk("Laptop", 8000000, 15);
const p2 = new Produk("Mouse", 150000, 5);
const p3 = new Produk("Keyboard", 300000, 0);

// Jalankan method
p1.cekStok();
p1.diskonBertingkat();

p2.cekStok();
p2.diskonBertingkat();

p3.cekStok();
p3.diskonBertingkat();
