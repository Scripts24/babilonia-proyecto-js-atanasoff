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

//Compra
const continuar_compra = document.querySelector("#continuar-compra");
const activar_procesar_compra = document.querySelector("#activar-procesar-compra");
const total_compra = document.querySelector("#total-compra");
const formulario = document.querySelector('#procesar-pago')

if (activar_procesar_compra) {
    activar_procesar_compra.addEventListener("click", procesar_compra);
}

//Cuando el documento se cargue se muestra lo que esté guardado en el storage si se agregó algo
document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrar_carrito();

    if (activar_procesar_compra) {
        document.querySelector("#activar-procesar-compra").click(procesar_compra);
    }
});

if (formulario) {
    formulario.addEventListener('submit', enviarCompra)
}


if (vaciar_carrito) {
    vaciar_carrito.addEventListener('click', () => {
        carrito.length = [];
        mostrar_carrito();
    });
}

if (continuar_compra) {
    continuar_compra.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire({
                title: "¡El carrito está vacío!",
                text: "Agrega algún producto para continuar con la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } else {
            location.href = "../compra.html"
        }
    });
}

//Recorro los productos
//Inyecto en HTML
catalogo.forEach((prod) => {
    const { id, nombre, precio, img } = prod
    if (contenedor) {
        contenedor.innerHTML += `
    <div class="box">
    <img  src="${img}">
    <h3>${nombre}</h3>
    <div>
    <p class="precio">Precio: $ ${precio}</p>
    <button class="btn-carrito" onclick="agregar_producto(${id})">Agregar al carrito</button>
    <br> <br>
    <a class="btn-carrito" href="#top">Ir al carrito</a>
    </div>
    </div> 
    `
    }
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
    if (modal_body) {
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
                <button class="btn-modal delete" onclick="eliminar_producto(${id})">Eliminar</button>
            </div>
        </div>
        <hr>
    `
        })
    }

    if (carrito.length === 0) {
        modal_body.innerHTML = `
            <p class="parrafo-modal">Tu carrito está vacío</p>
            `;
    }

    carrito_contenedor.textContent = carrito.length; //Muestro el número de productos agregados junto al ícono del carrito

    //Método reduce para calcular el valor total de los productos agregados
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


//COMPRA 
function procesar_compra() {
    carrito.forEach((prod) => {
        const lista_compra = document.querySelector("#lista-compra tbody");
        const { nombre, precio, img, cantidad } = prod;
        if (lista_compra) {
            const row = document.createElement("tr");
            row.innerHTML += `
                <td>
                <img class="img-fluid img-modal" src="${img}"/>
                </td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${precio * cantidad}</td>
                `;
            lista_compra.appendChild(row);
        }
    });
    total_compra.innerText = carrito.reduce(
        (acc, prod) => acc + prod.cantidad * prod.precio,
        0
    );
}



function enviarCompra(e) {
    e.preventDefault()
    const cliente = document.querySelector('#cliente').value
    const email = document.querySelector('#correo').value

    if (email === '' || cliente == '') {
        Swal.fire({
            title: "¡Por favor ingresa tus datos para continuar!",
            text: "Debes completar el formulario",
            icon: "error",
            confirmButtonText: "Aceptar",
        })
    } else {

        const btn = document.getElementById('button');

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_qxwi0jn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Finalizar compra';
                alert('Correo enviado!');
            }, (err) => {
                btn.value = 'Finalizar compra';
                alert(JSON.stringify(err));
            });

        const spinner = document.querySelector('#spinner')
        spinner.classList.add('d-flex')
        spinner.classList.remove('d-none')

        setTimeout(() => {
            spinner.classList.remove('d-flex')
            spinner.classList.add('d-none')
            formulario.reset()

            const alertExito = document.createElement('p')
            alertExito.classList.add('alert', 'alerta', 'd-block', 'text-center', 'col-12', 'mt-2', 'alert-success')
            alertExito.textContent = 'Compra realizada correctamente'
            formulario.appendChild(alertExito)

            setTimeout(() => {
                alertExito.remove()
            }, 6000)


        }, 6000)
    }
    localStorage.clear()

}







