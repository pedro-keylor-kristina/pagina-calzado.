// Variables globales para el carrito de compras
const carritoItems = [];
let totalCarrito = 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
// Obtener información del producto (puedes reemplazar esto con datos reales)
const productos = {
    1: { nombre: 'Zapato 1', precio: 35000 },
    2: { nombre: 'Zapato 2', precio: 60000 },
    3: { nombre: 'Zapato 3', precio: 55000 },
    4: { nombre: 'Zapato 4', precio: 65000 },
    5: { nombre: 'Zapato 5', precio: 80000 }

    // Agregar más productos aquí
};

if (productos[id]) {
    // Agregar el producto al carrito
    carritoItems.push(productos[id]);
    totalCarrito += productos[id].precio;

    // Actualizar el contenido del carrito y el total
    actualizarCarrito();
}
}

// Función para actualizar el contenido del carrito en la página
function actualizarCarrito() {
const carritoContenido = document.getElementById('carrito-contenido');
const totalElement = document.getElementById('total');
carritoContenido.innerHTML = '';
totalElement.textContent = `$${totalCarrito}`;

carritoItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('carrito-item');
    itemDiv.innerHTML = `
    <span>${item.nombre} - $${item.precio}</span>
    <button onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button>
    `;
    carritoContenido.appendChild(itemDiv);
});
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
const index = carritoItems.findIndex(item => item.nombre === nombre);
if (index !== -1) {
    totalCarrito -= carritoItems[index].precio;
    carritoItems.splice(index, 1);
    actualizarCarrito();
}
}

// Función para enviar el carrito por WhatsApp
function enviarWhatsApp() {
// Crear el mensaje con los productos del carrito
let mensaje = '¡Hola! Quiero comprar los siguientes productos:%0A%0A';
carritoItems.forEach(item => {
    mensaje += `${item.nombre} - $${item.precio}%0A`;
});

// Reemplaza el número de WhatsApp con el número deseado
const numeroWhatsApp = '5491155929846';

// Genera el enlace de WhatsApp con el mensaje y el número
const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;

// Abre la página de WhatsApp en una nueva ventana o pestaña
window.open(enlaceWhatsApp);
}