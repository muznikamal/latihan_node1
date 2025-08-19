const app = require("./config/aplikasi");
const tampilkanData = require("./logic/tampilkanData");

console.log("=== Biodata Siswa ===");
tampilkanData();
console.log("=== Info Aplikasi ===");
console.log(`
Versi                   : ${app.APP_VERSION}
Penanggung Jawab        : ${app.AUTHOR}`);
