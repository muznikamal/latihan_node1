let daftar = [];
daftar.push("Beras", "Minyak", "Gula");
daftar.push("Telur", "Sayur", "Buah");

let index = daftar.indexOf("Minyak");
daftar.splice(index, 1);

daftar.sort();
for (let i = 0; i < daftar.length; i++) {
  console.log(i + 1 + ". " + daftar[i]);
}
