import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

const fetcher = async () => {
  const response = await axios.get("http://localhost:8000/barang");
  return response.data;
};

const DaftarBarang = () => {
  const { data, mutate } = useSWR("barang", fetcher);
  if (!data) return <div>Loading...</div>;

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data?")) {
      await axios.delete(`http://localhost:8000/barang/${id}`);
      mutate(); // refresh data
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Daftar Barang</h1>
          <Link
            to="/tambah"
            className="bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 text-white rounded shadow"
          >
            Tambah Barang
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 border">No</th>
                <th className="py-2 px-4 border">Nama Barang</th>
                <th className="py-2 px-4 border">Stok</th>
                <th className="py-2 px-4 border">Harga</th>
                <th className="py-2 px-4 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((barang, index) => (
                <tr key={barang.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{barang.nama_barang}</td>
                  <td className="py-2 px-4 border">
                    <button
                      // onClick={() => updateStok(b.id, "tambah")}
                      className="bg-yellow-500 hover:bg-yellow-600 transition-colors px-3 py-1 text-black rounded mr-2 shadow ml-2 w-30"
                    >
                      +
                    </button>
                    {barang.stok}
                    <button
                      // onClick={() => updateStok(b.id, "tambah")}
                      className="bg-yellow-500 hover:bg-yellow-600 transition-colors px-3 py-1 text-black rounded mr-2 shadow ml-2 w-35"
                    >
                      -
                    </button>
                  </td>
                  <td className="py-2 px-4 border">{barang.harga}</td>
                  <td className="py-2 px-4 border">
                    <Link
                      to={`/edit/${barang.id}`}
                      className="bg-blue-500 hover:bg-blue-600 transition-colors px-3 py-1 text-white rounded mr-2 shadow"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 transition-colors px-3 py-1 text-white rounded shadow"
                      onClick={() => handleDelete(barang.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DaftarBarang;
