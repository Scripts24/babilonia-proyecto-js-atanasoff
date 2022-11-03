const catalogo = [
    {
        id: 1, nombre: "Potus", precio: 810, cantidad: 1, img: "../img/potus.jpg",
    },
    {
        id: 2, nombre: "Ficus", precio: 1125, cantidad: 1, img: "../img/ficus.jpg",
    },
    {
        id: 3, nombre: "Palma areca", precio: 7650, cantidad: 1, img: "../img/areca.jpg",
    },
    {
        id: 4, nombre: "Monstera deliciosa", precio: 3420, cantidad: 1, img: "../img/monsteradeliciosa.jpg",
    },
    {
        id: 5, nombre: "Espada de San Jorge", precio: 1190, cantidad: 1, img: "../img/espadasanjorge.jpg",
    },
    {
        id: 6, nombre: "Alocasia amazónica", precio: 6300, cantidad: 1, img: "../img/alocasiaamazonica.jpg",
    },
    {
        id: 7, nombre: "Calathea ornata", precio: 2250, cantidad: 1, img: "../img/calatheaornata.jpg",
    },
    {
        id: 8, nombre: "Orquídea blanca", precio: 4680, cantidad: 1, img: "../img/orquideablanca.jpg",
    },
    {
        id: 9, nombre: "Maceta piramidal", precio: 3325, cantidad: 1, img: "../img/macetapiramidal.png",
    },
    {
        id: 10, nombre: "Maceta fibrocemento", precio: 1900, cantidad: 1, img: "../img/macetafibrocemento.jpg",
    },
    {
        id: 11, nombre: "Maceta Edén", precio: 1980, cantidad: 1, img: "../img/macetaeden.jpg",
    },
    {
        id: 12, nombre: "Maceta rotomoldeada", precio: 5525, cantidad: 1, img: "../img/macetarotomoldeada.jpg",
    },
];

let carrito = [];

const contenedor = document.querySelector("#contenedor");
const carrito_contenedor = document.querySelector("#carrito-contenedor");
const vaciar_carrito = document.querySelector("#vaciar-carrito");
const valor_total = document.querySelector("#valor-total");

document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrar_carrito()
})


//Recorro los productos
//Desestructuración
//Inyecto en HTML
catalogo.forEach((prod) => {
    const { id, nombre, precio, img, cantidad } = prod
    contenedor.innerHTML += `
    <div class="box">
    <img  src="${img}">
    <h3>${nombre}</h3>
    <div>
    <p class="precio">Precio: $ ${precio}</p>
    <p class="cantidad">Cantidad: ${cantidad}</p>
    <button class="btn-carrito" onclick="agregar_producto(${id})">Agregar al carrito</button>
    </div>
    </div> 
    `
});

vaciar_carrito.addEventListener('click', () => {
    carrito.length = [];
    mostrar_carrito();
});

// Función para agregar productos al carrito
function agregar_producto(id) {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const item = catalogo.find((prod) => prod.id === id)
        carrito.push(item)
    }
    mostrar_carrito()
}

//Muestro en el Modal los productos agregados con la opción de eliminar
const mostrar_carrito = () => {
    const modal_body = document.querySelector('.modal .modal-body')
    modal_body.innerHTML = ''
    carrito.forEach((prod) => {
        const { id, nombre, precio, img, cantidad } = prod
        modal_body.innerHTML += `
        <div class="modal-contenedor">
            <div>
                <img class="img-fluid img-modal" src="${img}"/>
            </div>
            <div>
                <p>Producto: ${nombre}</p>
                <p>Precio: $ ${precio}</p>
                <p>Cantidad :${cantidad}</p>
                <button class="btn-modal delete"  onclick="eliminar_producto(${id})">Eliminar</button>
            </div>
        </div>
        <hr>
    `
    })

    if (carrito.length === 0) {
        modal_body.innerHTML = `
            <p class="parrafo-modal">Tu carrito está vacío</p>
            `;
    }

    carrito_contenedor.textContent = carrito.length;

    if (valor_total) {
        valor_total.innerText = carrito.reduce(
            (acc, prod) => acc + prod.cantidad * prod.precio,
            0
        );
    }

    guardar_storage()
}

//Eliminar productos del carrito
function eliminar_producto(id) {
    const productoId = id;
    carrito = carrito.filter((producto) => producto.id !== productoId);
    mostrar_carrito();
}

//Guardar Storage
function guardar_storage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}














