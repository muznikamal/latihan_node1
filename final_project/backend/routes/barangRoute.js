import express from "express";
import {
  getAllBarang,
  getBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
  updateStok,
} from "../controllers/BarangController.js";

const router = express.Router();

router.get("/Barang", getAllBarang);
router.get("/Barang/:id", getBarangById);
router.post("/Barang", createBarang);
router.put("/Barang/:id", updateBarang);
router.delete("/Barang/:id", deleteBarang);
router.post("/Barang/:id/stok", updateStok);

export default router;
