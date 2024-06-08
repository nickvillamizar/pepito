// ListaEnlazada.js
// Clase ListaEnlazada para manejar nodos
const Nodo = require('./Nodo');

class ListaEnlazada {
  constructor() {
    this.cabeza = null; // Cabeza de la lista
  }

  // Método para agregar un valor a la lista
  agregar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo; // Si la lista está vacía, el nuevo nodo es la cabeza
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente; // Recorrer la lista hasta el último nodo
      }
      actual.siguiente = nuevoNodo; // Agregar el nuevo nodo al final de la lista
    }
  }

  // Método para recorrer y mostrar la lista
  recorrer() {
    let actual = this.cabeza;
    while (actual) {
      console.log(actual.valor);
      actual = actual.siguiente; // Mover al siguiente nodo
    }
  }
}

module.exports = ListaEnlazada;
