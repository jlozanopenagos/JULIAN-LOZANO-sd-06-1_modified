// ¡Escribe tu código debajo de esta línea!
/**
 4. Para esta tarea, necesitarán escribir su propio constructor.
    - Creen un constructor llamado `Journey` que tome dos parámetros: `inicio` y `fin`.
    - Creen un par de constantes llamadas `desde` y `hasta`, y asígnenles los valores de los argumentos de la línea de comandos.
 */

function Journey(inicio, fin) {
  this.inicio = inicio
  this.fin = fin
  this.imprimirCorreo = function(){
    return console.log(`${this.asunto}: ${this.mensaje}`);
  }

}

// ¡Escribe tu código encima de esta línea!
const desde = process.argv[3];
const hasta = process.argv[4]; 

const viaje = new Journey(desde, hasta)

console.log("Reservando un taxi desde " + viaje.inicio + " hasta " + viaje.fin + ".")