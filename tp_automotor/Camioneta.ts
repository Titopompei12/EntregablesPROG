import { Vehiculo } from "./Vehiculos";
//Clase Camioneta
export class Camioneta extends Vehiculo {
  private capacidadCarga: number;

  constructor(
    marca: string,
    modelo: string,
    patente: string,
    capacidadCarga: number
  ) {
    super(marca, modelo, patente);
    this.capacidadCarga = capacidadCarga;
  }

  getCapacidadCarga(): number {
    return this.capacidadCarga;
  }

  setCapacidadCarga(capacidadCarga: number): void {
    this.capacidadCarga = capacidadCarga;
  }
}
