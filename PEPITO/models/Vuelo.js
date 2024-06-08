// Vuelo.js
// Clase Vuelo que almacena datos del vuelo y sus pasajeros
const ListaEnlazada = require('../listas/ListaEnlazada');

class Vuelo {
  constructor(numero, distancia) {
    this.numero = numero; // Número del vuelo
    this.distancia = distancia; // Distancia del vuelo
    this.pasajeros = new ListaEnlazada(); // Lista de pasajeros del vuelo
  }

  // Método para agregar pasajero
  agregarPasajero(pasajero) {
    this.pasajeros.agregar(pasajero);
  }
}

module.exports = Vuelo;
