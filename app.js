import express from "express";
import userModel from "./src/models/user.models.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("¡bienvenido al servidor! Pruebas de estadias UVEG.");

  userModel.listarUsuarios();
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
