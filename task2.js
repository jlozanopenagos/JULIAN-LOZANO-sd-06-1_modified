function Mail(asunto, mensaje) {
  this.asunto = asunto
  this.mensaje = mensaje
}

// ¡Escribe tu código debajo de esta línea!
/*2. Se les ha presentado un constructor para un objeto Mail.
    - Modifiquen el código para que el usuario proporcione su propio asunto y mensaje como parámetros de ejecución, en ese orden.
    - Los parámetros de ejecución son los valores que se pasan a un programa cuando se ejecuta.
    - Por ejemplo, si el usuario ejecuta el programa con el comando `node index.js 2 hola mundo`, entonces "node" es el programa, "index.js" es el primer parámetro, "2" es el segundo parámetro, y "hola" y "mundo" son el tercer y cuarto parámetro respectivamente.
    - Pueden acceder a los parámetros de ejecución en su programa usando el array `process.argv`.
    - En el ejemplo, el proceso y el primer parámetro (índices 0 y 1 del array `process.argv`) son "node" e "index.js", así que pueden ignorarlos.
    - El segundo parámetro (índice 2) es utilizado por este programa para determinar el número de tarea a ejecutar, así que también pueden ignorarlo.
    - Pueden acceder al asunto y al mensaje usando `process.argv[3]` y `process.argv[4]` respectivamente. 
*/

const nuevoCorreo = new Mail(process.argv[3], process.argv[4]);

// ¡Escribe tu código encima de esta línea!

console.log(nuevoCorreo.asunto + ": " + nuevoCorreo.mensaje)