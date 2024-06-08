// Avion.js
// Clase Avion que almacena los vuelos realizados
const ListaEnlazada = require('../listas/ListaEnlazada');

class Avion {
  constructor(modelo) {
    this.modelo = modelo; // Modelo del avión
    this.vuelos = new ListaEnlazada(); // Lista de vuelos realizados por el avión
  }

  // Método para agregar vuelo
  agregarVuelo(vuelo) {
    this.vuelos.agregar(vuelo);
  }
}

module.exports = Avion;
