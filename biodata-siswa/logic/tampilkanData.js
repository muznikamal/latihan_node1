const siswa = require("../data/siswa");
const kelulusan = require("../logic/logikaKategori");

function tampilkanData() {
  for (i in siswa) {
    console.log(`
Nama                : ${siswa[i].nama}
Umur                : ${siswa[i].umur}
Asal                : ${siswa[i].asal}
Sekolah             : ${siswa[i].sekolah}
Tahun Lulus         : ${siswa[i].tahun_lulus}`);
    kelulusan(siswa[i].tahun_lulus);
    console.log("===================================");
  }
  // "Kondisi Kelulusan: " + kelulusan[i];
}
module.exports = tampilkanData;
