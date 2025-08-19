// let nama = ["Rose", "Magnolia", "Daisy", "Jasmine", "Violet"];
// let tinggi = [178, 153, 165, 161, 159];

// nama.forEach(function (n, t) {
//   console.log(n + " memiliki Tinggi " + tinggi[t] + " cm");
// });

const tinggi = [
  { nama: "Rose", tinggi: 178 },
  { nama: "Magnolia", tinggi: 153 },
  { nama: "Daisy", tinggi: 165 },
  { nama: "Jasmine", tinggi: 161 },
  { nama: "Violet", tinggi: 159 },
];

for (i in tinggi) {
  let tinggiBadan = tinggi[i];
  console.log(
    tinggiBadan.nama + " memiliki Tinggi " + tinggiBadan.tinggi + " cm"
  );
}
