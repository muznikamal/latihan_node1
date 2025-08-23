import express from "express";
import {
  getAllSiswa,
  getSiswaById,
  createSiswa,
  updateSiswa,
  deleteSiswa,
} from "../controllers/siswaController.js";

const router = express.Router();

router.get("/siswa", getAllSiswa);
router.get("/siswa/:id", getSiswaById);
router.post("/siswa", createSiswa);
router.put("/siswa/:id", updateSiswa);
router.delete("/siswa/:id", deleteSiswa);

export default router;
