function kelulusan(tahun_lulus) {
  if (tahun_lulus < 2019) {
    kondisiLulus = "Lulus Sebelum Covid";
  } else if (tahun_lulus >= 2019 && tahun_lulus <= 2021) {
    kondisiLulus = "Lulus Saat Lulus";
  } else {
    kondisiLulus = "Lulus Setelah Covid";
  }
  console.log(`Kategori Kondisi    : ${kondisiLulus}`);
}
module.exports = kelulusan;
