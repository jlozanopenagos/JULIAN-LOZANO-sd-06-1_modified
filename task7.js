// ¡Escribe tu código debajo de esta línea!
function Car(marca, modelo, año, color, puertas, kilometraje, tipoMotor) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.puertas = puertas;
    this.kilometraje = kilometraje;
    this.tipoMotor = tipoMotor;
}

const marca = process.argv[3];
const modelo = process.argv[4];
const año = Number(process.argv[5]);
const color = process.argv[6];
const puertas = Number(process.argv[7]);
const kilometraje = Number(process.argv[8]);
const tipoMotor = process.argv[9];

const auto = new Car(
    marca,
    modelo,
    año,
    color,
    puertas,
    kilometraje,
    tipoMotor
);

console.log(auto);

// ¡Escribe tu código encima de esta línea!

/*
*  7. ¿Pueden crear un constructor para un objeto que pueda describir un auto? ¡Usen esta tarea para experimentar con constructores!
    - Piensen qué datos debería tener el objeto, cómo recolectarían esos datos del usuario y cómo los almacenarían.
        - ¿La marca, modelo y año?
        - ¿El color?
        - ¿El número de puertas?
        - ¿El kilometraje?
        - ¿Si es de motor de combustión o eléctrico?
        - ¿Algo más?
*/
