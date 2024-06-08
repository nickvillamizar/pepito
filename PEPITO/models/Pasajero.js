// Pasajero.js
// Clase Pasajero que almacena datos del pasajero y sus equipajes/mascotas
const ListaEnlazada = require('../listas/ListaEnlazada');

class Pasajero {
  constructor(nombre, vip, tarifa) {
    this.nombre = nombre; // Nombre del pasajero
    this.vip = vip; // Indica si el pasajero es VIP
    this.tarifa = tarifa; // Tarifa del tiquete
    this.equipajes = new ListaEnlazada(); // Lista de equipajes del pasajero
    this.mascotas = new ListaEnlazada(); // Lista de mascotas del pasajero
  }

  // Método para agregar equipaje
  agregarEquipaje(equipaje) {
    this.equipajes.agregar(equipaje); // Agregar equipaje a la lista
  }

  // Método para agregar mascota
  agregarMascota(mascota) {
    this.mascotas.agregar(mascota); // Agregar mascota a la lista
  }

  // Método para calcular el costo total del pasajero
  calcularCosto(descuentoVIP, pesoLimite, costoPerro, costoGato) {
    let costo = this.tarifa;

    // Aplicar descuento VIP
    if (this.vip) {
      costo -= (descuentoVIP / 100) * this.tarifa;
    }

    // Aplicar sobrepeso de equipaje
    let actual = this.equipajes.cabeza;
    while (actual) {
      if (actual.valor.peso > pesoLimite) {
        costo += 50000;
      }
      actual = actual.siguiente;
    }

    // Aplicar costo de mascotas
    actual = this.mascotas.cabeza;
    while (actual) {
      if (actual.valor.tipo === 'perro') {
        costo += costoPerro;
      } else if (actual.valor.tipo === 'gato') {
        costo += costoGato;
      }
      actual = actual.siguiente;
    }

    return costo;
  }
}

module.exports = Pasajero;
