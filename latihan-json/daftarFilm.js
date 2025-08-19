// const { log } = require("console");
const fs = require("fs");

const teks = fs.readFileSync("film.json");
const data = JSON.parse(teks);

console.log("Daftar Film:");

for (let i = 0; i < data.length; i++) {
  console.log(
    i +
      1 +
      ". " +
      data[i].judul +
      " (" +
      data[i].tahunRilis +
      ") - Genre: " +
      data[i].genre
  );
}
