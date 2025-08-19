function hitungLuas(sisi) {
  return sisi * sisi;
}

function hitungKeliling(sisi) {
  return 4 * sisi;
}

function tampilkanPersegi(sisi) {
  console.log("=================Persegi=================");
  console.log("Sisi               : ", sisi);
  console.log("Luas Persegi       : ", hitungLuas(sisi));
  console.log("Keliling Persegi   : ", hitungKeliling(sisi));
  console.log("==========================================");
}

tampilkanPersegi(7);
tampilkanPersegi(23);
