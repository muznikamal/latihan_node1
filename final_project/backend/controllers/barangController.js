import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBarang = async (req, res) => {
  try {
    const response = await prisma.databarang.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBarangById = async (req, res) => {
  try {
    const response = await prisma.databarang.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createBarang = async (req, res) => {
  const { nama_barang, stok, harga } = req.body;
  try {
    const response = await prisma.databarang.create({
      data: {
        nama_barang: nama_barang,
        stok: stok,
        harga: harga,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBarang = async (req, res) => {
  try {
    const response = await prisma.databarang.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        nama_barang: req.body.nama_barang,
        stok: req.body.stok,
        harga: req.body.harga,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBarang = async (req, res) => {
  try {
    const response = await prisma.databarang.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
