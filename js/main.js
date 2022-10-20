//CREO EL OBJETO CATÁLOGO 
class Catalogo {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//CREO Y CARGO LOS PRODUCTOS DEL CATÁLOGO

let productos = [];

productos.push(new Catalogo(1, "Potus", 810));
productos.push(new Catalogo(2, "Ficus", 1125));
productos.push(new Catalogo(3, "Palma areca", 7650));
productos.push(new Catalogo(4, "Monstera deliciosa", 3420));
productos.push(new Catalogo(5, "Espada de San Jorge", 1190));
productos.push(new Catalogo(6, "Alocasia amazónica", 6300));
productos.push(new Catalogo(7, "Calathea ornata", 2250));
productos.push(new Catalogo(8, "Orquídea blanca", 4680));
productos.push(new Catalogo(9, "Maceta piramidal", 3325));
productos.push(new Catalogo(10, "Maceta fibrocemento", 1900));
productos.push(new Catalogo(11, "Maceta edén n°45", 1980));
productos.push(new Catalogo(12, "Maceta rotomoldeada", 5525));

console.log(productos)

let elegir_cantidad;
let total = 0;

//MUESTRO LOS DATOS DE CADA PRODUCTO POR CONSOLA
for (let producto of productos) {
    console.log(" *DATOS DEL PRODUCTO* ")
    console.log("Id: ", producto.id);
    console.log("Nombre: ", producto.nombre);
    console.log("Precio: ", producto.precio);
    console.log(" ");
}

//FILTRAR
function mayor_precio(producto) {

    return producto.precio >= 5000
}

let resultado_filter = productos.filter(mayor_precio);
console.log("Los productos con precio mayor o igual a 5000 son: ");
console.log(resultado_filter);

//CALCULAR COMPRA
function cantidad(unidades, precio) {
    return unidades * precio
}

//PREGUNTO AL USUARIO SI DESEA COMPRAR
let desea_comprar = prompt("Desea comprar alguno de nuestros productos? \nIngrese si para confirmar. \nIngrese no para salir");

//BUCLE QUE PIDE UNA RESPUESTA SOBRE SI QUIERE COMPRAR O NO
while (desea_comprar != "si" && desea_comprar != "no") {
    alert("Por favor ingrese si o no");
    desea_comprar = prompt("Desea comprar algo: si o no");
}

// SEGÚN LA RESPUESTA DEL USUARIO SE MUESTRAN DISTINTAS MENSAJES
if (desea_comprar === "si") {
    alert("Ponemos a su disposición nuestro catálogo");
     //Recorro el array productos para que me devuelva lo que indico de cada uno de los productos
    let todos_los_productos = productos.map(
        (producto) => producto.id + " " + producto.nombre + " " + "$" + producto.precio + "\n");

    alert(todos_los_productos.join(""))//Separo los elementos del array con un espacio pasado como parámetro
    console.log(todos_los_productos.join(""))

} else if (desea_comprar === "no") {
    alert("gracias por venir")
}

//CON ESTE BUCLE EL USUARIO PODRÁ SELECCIONAR LO QUE QUIERE COMPRAR
while (desea_comprar != "no") {

    productos = parseInt(prompt("Ingrese el número del producto elegido"));

    switch (productos) {
        case 1:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Potus , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 810)
            break;
        case 2:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Ficus  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1125)
            break;
        case 3:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Palma areca , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 7650)
            break;
        case 4:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Monstera deliciosa  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 3420)
            break;
        case 5:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Espada de San Jorge , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1190)
            break;
        case 6:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Alocasia amazónica , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 6300)
            break;
        case 7:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Calathea ornata  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 2250)
            break;
        case 8:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta edén n°45  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 4680)
            break;

        case 9:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta piramidal  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 3325)
            break;

        case 10:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta fibrocemento  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1900)
            break;
        case 11:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta rotomoldeada  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 1980)
            break;
        case 12:
            elegir_cantidad = parseInt(prompt("El producto seleccionado es Maceta rotomoldeada  , por favor elija qué cantidad desea comprar"));
            total += cantidad(elegir_cantidad, 5525)
            break;

        default:
            break;
    }

    break;
}


//lE MUESTRO EL TOTAL DE SU COMPRA Y LE AGRADEZCO.
if (desea_comprar === "si") {
    alert("El total es de $" + total);
    console.log("El total es de $" + total);
}

if (total != 0) {
    alert("Gracias por su compra");
    console.log("Gracias por su compra");
}
