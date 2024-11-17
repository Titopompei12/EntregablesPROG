"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camioneta_1 = require("./Camioneta");
var RegistorAutomotor_1 = require("./RegistorAutomotor");
var registro = new RegistorAutomotor_1.RegistroAutomotor();
var auto = new Auto_1.Auto("Toyota", "Corolla", "ABC123", 4);
var moto = new Moto_1.Moto("Yamaha", "YZF-R3", "XYZ789", "Deportiva");
var camioneta = new Camioneta_1.Camioneta("Ford", "Ranger", "LMN456", 1000);
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camioneta);
// Modificar un vehiculo
var nuevoAuto = new Auto_1.Auto("Toyota", "Camaro", "ABC123", 4);
registro.modificarVehiculo("ABC123", nuevoAuto);
// Lista vehiculos
console.log(registro.listarVehiculos());
// Dar de baja un vehiculo
registro.darDeBaja("XYZ789");
console.log(registro.listarVehiculos());
