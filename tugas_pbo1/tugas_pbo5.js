// Langkah 1: Buat Class Pelanggan
class Pelanggan {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  // Langkah 2: Buat Method prosesData()
  prosesData() {
    try {
      // Validasi nama
      if (typeof this.nama !== "string" || this.nama.trim() === "") {
        throw new Error("Nama harus berupa string dan tidak boleh kosong");
      }

      // Validasi umur
      if (typeof this.umur !== "number" || this.umur <= 0) {
        throw new Error("Umur harus berupa angka dan lebih dari 0");
      }

      // Jika validasi sukses
      console.log(`Pelanggan: ${this.nama}, umur ${this.umur} tahun`);
    } catch (error) {
      // Tangkap error agar tidak crash
      console.log(`Kesalahan: ${error.message}`);
    }
  }
}

// Langkah 3: Buat Beberapa Objek untuk Pengujian
const p1 = new Pelanggan("Alice", 30); // valid
const p2 = new Pelanggan("", 25); // nama kosong
const p3 = new Pelanggan("Budi", -5); // umur salah
const p4 = new Pelanggan(12345, 40); // nama bukan string

// Panggil prosesData() untuk setiap objek
p1.prosesData();
p2.prosesData();
p3.prosesData();
p4.prosesData();
