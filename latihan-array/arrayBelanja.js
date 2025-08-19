let sepatu = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 },
];

console.log("===== Rincian Belanja sepatu =====");
let total = 0;
for (let i = 0; i < sepatu.length; i++) {
  let hargaSepatu = sepatu[i];
  console.log(i + 1 + ". " + hargaSepatu.nama + " - Rp. " + hargaSepatu.harga);

  total += sepatu[i].harga;
}

console.log("");
console.log("Total Belanja = Rp. " + total.toLocaleString("id-ID"));

let diskon;

if (total < 250000) {
  diskon = (0 / 100) * total;
  console.log("Diskon = 0%");
  console.log(
    "Total setelah diskon = Rp. " + (total - diskon).toLocaleString("id-ID")
  );
} else if (total >= 250000 && total <= 499999) {
  diskon = (5 / 100) * total;
  console.log("Diskon = 5%");
  console.log(
    "Total setelah diskon = Rp. " + (total - diskon).toLocaleString("id-ID")
  );
} else if (total >= 500000 && total <= 799999) {
  diskon = (10 / 100) * total;
  console.log("Diskon = 10%");
  console.log(
    "Total setelah diskon = Rp. " + (total - diskon).toLocaleString("id-ID")
  );
} else {
  diskon = (15 / 100) * total;
  console.log("Diskon = 15%");
  console.log(
    "Total setelah diskon = Rp. " + (total - diskon).toLocaleString("id-ID")
  );
}

let modal = 1200000;
console.log("Pembayaran = Rp. " + modal.toLocaleString("id-ID"));
console.log(
  "Kembalian = Rp. " + (modal - (total - diskon)).toLocaleString("id-ID")
);
