/**
 * Aplikasi Node.js paling sederhana
 * Memanggil fungsi dan menampilkan nama aplikasi
 */

const namaApp = require("./config/namaApp"); //import nama aplikasi
const tampilkanSalam = require("./fungsi/tampilSalam"); //import fungsi

// Menampilkan nama aplikasi ke terminal
console.log("Nama Aplikasi:" + namaApp);

// Menampilkan salam ke pengguna
tampilkanSalam();
