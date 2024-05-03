// routes.js

const express = require('express');
const router = express.Router();

// Ruta para el inicio de sesión
router.post('/login', (req, res) => {
  // Aquí puedes implementar la lógica para autenticar al usuario
  console.log('Inicio de sesión:', req.body);
  res.send('Inicio de sesión exitoso');
});

// Ruta para el registro de cuenta
router.post('/registro', (req, res) => {
  // Aquí puedes implementar la lógica para registrar al usuario
  console.log('Registro de cuenta:', req.body);
  res.send('Registro exitoso');
});

module.exports = router;
