import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import {
  FiPlus,
  FiMinus,
  FiEdit,
  FiTrash2,
  FiLogOut,
  FiHome,
  FiMenu,
  FiShoppingCart,
} from "react-icons/fi";

const fetcher = async () => {
  const response = await axios.get("http://localhost:8000/barang");
  return response.data;
};

export default function DaftarBarangPage() {
  const { data, mutate } = useSWR("barang", fetcher);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [tipe, setTipe] = useState("");
  const [jumlah, setJumlah] = useState(1);
  const [toast, setToast] = useState({
    show: false,
    type: "success",
    message: "",
  });
  const [mobileMenu, setMobileMenu] = useState(false);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (toast.show) {
      const t = setTimeout(() => setToast({ ...toast, show: false }), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  const openModal = (id, tipeAksi) => {
    setSelectedId(id);
    setTipe(tipeAksi);
    setJumlah(1);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    if (!jumlah || Number(jumlah) <= 0) {
      setToast({
        show: true,
        type: "error",
        message: "Jumlah harus lebih dari 0",
      });
      return;
    }

    try {
      await axios.post(`http://localhost:8000/barang/${selectedId}/stok`, {
        jumlah: Number(jumlah),
        tipe,
      });
      setToast({
        show: true,
        type: "success",
        message: "Stok berhasil diupdate",
      });
      setShowModal(false);
      mutate();
    } catch (err) {
      setToast({
        show: true,
        type: "error",
        message: err.response?.data?.message || "Terjadi kesalahan",
      });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus data?")) {
      try {
        await axios.delete(`http://localhost:8000/barang/${id}`);
        setToast({
          show: true,
          type: "success",
          message: "Data berhasil dihapus",
        });
        mutate();
      } catch (err) {
        setToast({
          show: true,
          type: "error",
          message: "Gagal menghapus data",
        });
      }
    }
  };

  if (!data)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  // Client-side filtering so search works even if backend has no search API
  const filteredData = data.filter((b) =>
    b.nama_barang?.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* NAVBAR */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2 rounded hover:bg-gray-100"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                <FiMenu size={20} />
              </button>
              <Link to="/" className="flex items-center gap-2">
                <div className="p-2 bg-blue-600 rounded text-white shadow">
                  <FiShoppingCart />
                </div>
                <div>
                  <div className="font-bold text-lg">InventoryKit</div>
                  <div className="text-xs text-gray-500 -mt-1">
                    Manage your stock beautifully
                  </div>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100"
              >
                <FiHome /> Home
              </Link>
              <Link
                to="/tambah"
                className="flex items-center gap-2 bg-green-500 text-white px-3 py-1 rounded"
              >
                <FiPlus /> Tambah Barang
              </Link>
              <button className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100">
                <FiLogOut /> Logout
              </button>
            </nav>
          </div>
        </div>

        {/* mobile menu */}
        {mobileMenu && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 flex flex-col gap-2">
              <Link to="/" className="flex items-center gap-2">
                <FiHome /> Home
              </Link>
              <Link
                to="/tambah"
                className="flex items-center gap-2 text-green-600"
              >
                <FiPlus /> Tambah Barang
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-extrabold">Daftar Barang</h1>
              <p className="text-sm text-gray-500 mt-1">
                Kelola stokmu dengan cepat dan aman
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/tambah"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-95"
              >
                <FiPlus /> Tambah Barang
              </Link>
            </div>
          </div>

          {/* Search + summary */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 w-full sm:w-1/2">
              <input
                type="text"
                placeholder="Cari nama barang..."
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="text-sm text-gray-600">
              Total item:{" "}
              <span className="font-semibold">{filteredData.length}</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-gray-600 uppercase tracking-wider">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Nama</th>
                  <th className="py-3 px-4">Stok</th>
                  <th className="py-3 px-4">Harga</th>
                  <th className="py-3 px-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-gray-500">
                      Tidak ada barang yang cocok dengan pencarian.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((barang, index) => (
                    <tr
                      key={barang.id}
                      className="border-t hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-3 px-4 align-middle">{index + 1}</td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded bg-gradient-to-br from-indigo-200 to-indigo-400 flex items-center justify-center text-white font-bold">
                            {barang.nama_barang.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold">
                              {barang.nama_barang}
                            </div>
                            <div className="text-xs text-gray-400">
                              ID: {barang.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => openModal(barang.id, "tambah")}
                            className="p-2 rounded bg-green-50 hover:bg-green-100 text-green-600 flex items-center justify-center"
                            title="Tambah stok"
                          >
                            <FiPlus />
                          </button>
                          <div className="px-3 py-1 rounded-lg bg-gray-100">
                            {barang.stok}
                          </div>
                          <button
                            onClick={() => openModal(barang.id, "kurang")}
                            className="p-2 rounded bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center"
                            title="Kurangi stok"
                          >
                            <FiMinus />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        Rp {barang.harga?.toLocaleString?.() ?? barang.harga}
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center gap-2">
                          <Link
                            to={`/edit/${barang.id}`}
                            className="p-2 rounded bg-blue-50 hover:bg-blue-100 text-blue-600"
                            title="Edit"
                          >
                            <FiEdit />
                          </Link>
                          <button
                            onClick={() => handleDelete(barang.id)}
                            className="p-2 rounded bg-red-50 hover:bg-red-100 text-red-600"
                            title="Hapus"
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-12 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} InventoryKit - Muzni Kamal
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <a className="hover:underline">Privacy</a>
            <span>•</span>
            <a className="hover:underline">Terms</a>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative bg-white rounded-xl shadow-xl w-11/12 sm:w-96 p-6 z-10">
            <h3 className="text-lg font-semibold mb-2">
              {tipe === "tambah" ? "Tambah Stok" : "Kurangi Stok"}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Masukkan jumlah yang ingin{" "}
              {tipe === "tambah" ? "ditambahkan" : "dikurangkan"}.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <input
                type="number"
                min={1}
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <div className="text-sm text-gray-600">pcs</div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200"
              >
                Batal
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:opacity-95"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast.show && (
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 bottom-8 z-50 transition`}
        >
          <div
            className={`px-4 py-3 rounded-lg shadow-lg ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
}
