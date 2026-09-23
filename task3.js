// ¡Escribe tu código debajo de esta línea!

function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
  this.imprimirCorreo = function(){
    return console.log(`${this.asunto}: ${this.mensaje}`);
  }

}

const nuevoCorreo = new Mail(process.argv[3], process.argv[4])

// ¡Escribe tu código encima de esta línea!
/*3. Se les ha presentado un constructor para un objeto Mail.
    - Modifiquen el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución, en ese orden.
    - Luego, extiendan el constructor para incluir un método `imprimirCorreo()` que imprima lo siguiente en la Consola:
        - `<asunto>: <mensaje>`
        - Por ejemplo, si las dos entradas son `pizza` y `piña`, entonces la salida debería ser `pizza: piña`.
 */
nuevoCorreo.imprimirCorreo()