import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahBarang = () => {
  const [nama_barang, setNamaBarang] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/barang", {
      nama_barang,
      stok: Number(stok),
      harga: Number(harga)
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Tambah Barang
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">
              Nama Barang
            </label>
            <input
              type="text"
              value={nama_barang}
              onChange={(e) => setNamaBarang(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan nama barang"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              stok
            </label>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan stok barang"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Harga
            </label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan harga barang"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-4 py-2 rounded shadow"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahBarang;
