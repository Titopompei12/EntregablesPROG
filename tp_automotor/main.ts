import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camioneta } from "./Camioneta";
import { RegistroAutomotor } from "./RegistorAutomotor";


const registro = new RegistroAutomotor();

const auto = new Auto("Toyota", "Corolla", "ABC123", 4);
const moto = new Moto("Yamaha", "YZF-R3", "XYZ789", "Deportiva");
const camioneta = new Camioneta("Ford", "Ranger", "LMN456", 1000);

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camioneta);

// Modificar un vehiculo
const nuevoAuto = new Auto("Toyota", "Camaro", "ABC123", 4);
registro.modificarVehiculo("ABC123", nuevoAuto);

// Lista vehiculos
console.log(registro.listarVehiculos());

// Dar de baja un vehiculo
registro.darDeBaja("XYZ789");
console.log(registro.listarVehiculos());


