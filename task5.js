// ¡Escribe tu código debajo de esta línea!

function FriendsList(nombres) {
    this.nombres = nombres;
}

let cantidad = Number(process.argv[3]);
const nombres = process.argv.slice(4, 4 + cantidad);

let lista = new FriendsList(nombres);

console.log(lista.nombres);

// ¡Escribe tu código encima de esta línea!

/**
 * 5. Creen un constructor para un objeto `FriendsList` que almacene una lista de nombres en un array.
    - Su programa debe leer la cantidad de nombres y los nombres desde los argumentos de la línea de comandos.
    - Su programa debe luego imprimir el array directamente en la consola.
        - La salida debería verse así: `[ 'nombre1', 'nombre2' ]`
 */