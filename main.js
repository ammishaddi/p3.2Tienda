//arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const productos = [
    { nombre: "Cuaderno", precio: 15, categoria: "Papeleria" },
    { nombre: "Lavadora", precio: 800, categoria: "Electrodomésticos" },
    { nombre: "Libro", precio: 12, categoria: "Papeleria" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];


// Usa filter() para obtener los productos que cuesten menos de $100. 
const menorCien = productos.filter(producto => producto.precio < 100);
console.log(menorCien);



//Usa sort() para ordenar esos productos alfabéticamente por su nombre.
productos.sort((a, b) => {
    if (a.nombre < b.nombre) return -1; 
    if (a.nombre > b.nombre) return 1;   
    return 0;                            
});

console.log(productos);




//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
let nuevaLista = productos.map(function(elemento){
    return elemento.nombre;
});
console.log(nuevaLista);
