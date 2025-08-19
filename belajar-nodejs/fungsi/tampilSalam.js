/**
 * Fungsi untuk menampilkan salam ke terminal
 * Author: Instruktur TIK
 * version: 1.0
 * Date: 8 Juli 2025
 */

function tampilSalam() {
    // Menyimpan pesan salam
    const pesan = 'Halo selamat datang di dunia Node.js';

    //Menampilkan pesan ke terminal
    console.log(pesan);
}

//mengekspor fungsi agar bisa digunakan di fle lain
module.exports = tampilSalam;
