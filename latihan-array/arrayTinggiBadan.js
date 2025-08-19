let tinggi = [
  { nama: "Rose", tinggi: 178 },
  { nama: "Magnolia", tinggi: 153 },
  { nama: "Daisy", tinggi: 165 },
  { nama: "Jasmine", tinggi: 161 },
  { nama: "Violet", tinggi: 159 },
];
tinggi.sort(function (a, b) {
  return a.nama.localeCompare(b.nama); //localCompare = membandingkan string berdasarkan urutan abjad
});

for (let i = 0; i < tinggi.length; i++) {
  console.log(tinggi[i].nama + " : " + tinggi[i].tinggi + " cm");
}
