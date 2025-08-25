import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditSiswa = () => {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSiswa = async () => {
      const response = await axios.get(`http://localhost:8000/siswa/${id}`);
      setNama(response.data.nama);
      setUmur(response.data.umur);
    };
    fetchSiswa();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/siswa/${id}`, {
      nama,
      umur: Number(umur),
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Edit Siswa
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-gray-700">
              Nama
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan nama siswa"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Umur
            </label>
            <input
              type="number"
              value={umur}
              onChange={(e) => setUmur(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukkan umur siswa"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold px-4 py-2 rounded shadow"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSiswa;
