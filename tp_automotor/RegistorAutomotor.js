"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
// Clase RegistroAutomotor
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    RegistroAutomotor.prototype.modificarVehiculo = function (patente, nuevoVehiculo) {
        var indice = this.vehiculos.findIndex(function (v) { return v.getPatente() === patente; });
        if (indice !== -1) {
            this.vehiculos[indice] = nuevoVehiculo;
            return true;
        }
        return false; // Vehiculo no encontrado
    };
    RegistroAutomotor.prototype.darDeBaja = function (patente) {
        var indice = this.vehiculos.findIndex(function (v) { return v.getPatente() === patente; });
        if (indice !== -1) {
            this.vehiculos.push();
            return true;
        }
        return false;
    };
    RegistroAutomotor.prototype.listarVehiculos = function () {
        return this.vehiculos;
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
