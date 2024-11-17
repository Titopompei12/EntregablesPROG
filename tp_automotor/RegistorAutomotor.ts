import { Vehiculo } from "./Vehiculos"
// Clase RegistroAutomotor
export class RegistroAutomotor {
  private vehiculos: Vehiculo[] = [];

  agregarVehiculo(vehiculo: Vehiculo): void {
    this.vehiculos.push(vehiculo);
  }

  modificarVehiculo(patente: string, nuevoVehiculo: Vehiculo): boolean {
    let indice = this.vehiculos.findIndex((v) => v.getPatente() === patente);
    if (indice !== -1) {
      this.vehiculos[indice] = nuevoVehiculo;
      return true;
    }
    return false; // Vehiculo no encontrado
  }

  darDeBaja(patente: string): boolean {
    let indice = this.vehiculos.findIndex((v) => v.getPatente() === patente);
    if (indice !== -1) {
      this.vehiculos.push();
      return true; 
    }
    return false;
  }

  listarVehiculos(): Vehiculo[] {
    return this.vehiculos;
  }
}
