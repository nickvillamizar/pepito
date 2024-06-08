// input.js
// Utilidad para manejar la entrada de datos desde el teclado
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para realizar preguntas y obtener respuestas
function preguntar(pregunta) {
  return new Promise((resolve) => rl.question(pregunta, (respuesta) => resolve(respuesta)));
}

// Función para cerrar la interfaz de readline
function cerrar() {
  rl.close();
}

module.exports = {
  preguntar,
  cerrar
};
