"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Vehiculos_1 = require("./Vehiculos");
//Clase Moto
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, patente, tipo) {
        var _this = _super.call(this, marca, modelo, patente) || this;
        _this.tipo = tipo;
        return _this;
    }
    Moto.prototype.getTipo = function () {
        return this.tipo;
    };
    Moto.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    return Moto;
}(Vehiculos_1.Vehiculo));
exports.Moto = Moto;
