import { Vehiculo } from "./Vehiculos";
//Clase Auto
export class Auto extends Vehiculo {
  private numPuertas: number;

  constructor(
    marca: string,
    modelo: string,
    patente: string,
    numPuertas: number
  ) {
    super(marca, modelo, patente);
    this.numPuertas = numPuertas;
  }

  getNumPuertas(): number {
    return this.numPuertas;
  }

  setNumPuertas(numPuertas: number): void {
    this.numPuertas = numPuertas;
  }
}
