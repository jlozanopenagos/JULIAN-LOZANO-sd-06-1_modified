// ¡Escribe tu código debajo de esta línea!
function ShoppingList(items) {
    this.items = items;
}

const cantidadProductos = Number(process.argv[3]);
const productos = [];

//initial position of the argument
let posicion = 4;

// node index.js 6 3 leche 2 huevos 12 pan 1
for (let i = 0; i < cantidadProductos; i++) {
    const nombre = process.argv[posicion];
    const cantidad = Number(process.argv[posicion + 1]);

    productos.push({
        nombre: nombre,
        cantidad: cantidad
    });

    posicion += 2;
}

const lista = new ShoppingList(productos);

console.log(lista);


// ¡Escribe tu código encima de esta línea!

/*
*  6. ¿Pueden crear un constructor para un objeto que describa una lista de compras? ¡Usen esta tarea para experimentar con constructores!
    - ¿Qué tan larga debería ser la lista?
        - No todos los usuarios querrán la misma cantidad de artículos.
    - ¿Cómo manejarían múltiplos del mismo artículo, como 2 botellas de leche o una docena de huevos?
    - ¿Cómo recolectarían estos datos del usuario?
    - ¿Cómo almacenarían estos datos en un objeto?
    - ¿Cómo se vería la función constructora para este objeto? 
*/