import { Vehiculo } from "./Vehiculos";
//Clase Moto
export class Moto extends Vehiculo {
  private tipo: string;

  constructor(marca: string, modelo: string, patente: string, tipo: string) {
    super(marca, modelo, patente);
    this.tipo = tipo;
  }

  getTipo(): string {
    return this.tipo;
  }

  setTipo(tipo: string): void {
    this.tipo = tipo;
  }
}
