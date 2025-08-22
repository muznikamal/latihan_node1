const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CREATE -Tambah User

exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await prisma.user.create({
      data: { name, email, age: Number(age) },
    });
    res.json({ message: "User created succesfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Semua User
exports.getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - User by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE -User by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email, age: Number(age) },
    });
    res.json({ message: "User update successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE -User by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
