let ulang = true;

do {
  let i = 1;

  console.log("Menampilkan bilangan gelap dari 1 hingga 20:");
  while (i <= 20) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
  ulang = false;
} while (ulang);
