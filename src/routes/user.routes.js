import express from "express";
const router = express.Router();
import userModel from "./src/models/user.models.js";

// Ruta para obtener todos los usuarios
router.get("/user", async (req, res) => {
  try {
    const user = await userModel.findAll();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

export default router;
