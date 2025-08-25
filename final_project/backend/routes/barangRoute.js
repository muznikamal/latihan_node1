import express from "express";
import {
  getAllBarang,
  getBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
} from "../controllers/BarangController.js";

const router = express.Router();

router.get("/Barang", getAllBarang);
router.get("/Barang/:id", getBarangById);
router.post("/Barang", createBarang);
router.put("/Barang/:id", updateBarang);
router.delete("/Barang/:id", deleteBarang);

export default router;
