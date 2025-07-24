import { actualizarResumen } from './checkout.js';

let carrito = [];

export function agregarAlCarrito(producto) {
  const existente = carrito.find(p => p.id === producto.id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  renderizarResumen();
  actualizarResumen(carrito);
}

export function quitarDelCarrito(productoId) {
  carrito = carrito.filter(p => p.id !== productoId);
  renderizarResumen();
  actualizarResumen(carrito);
}

export function obtenerCarrito() {
  return carrito;
}

function renderizarResumen() {
  const resumenDiv = document.getElementById('resumen-carrito');
  if (!resumenDiv) return;

  if (carrito.length === 0) {
    resumenDiv.innerHTML = '<p class="text-gray-600">El carrito está vacío.</p>';
    return;
  }

  let html = '<ul class="space-y-2">';
  carrito.forEach(p => {
    const totalPorProducto = (p.precio * p.cantidad).toFixed(2);
    html += `
      <li class="flex justify-between items-center border-b pb-2">
        <div>
          <p class="font-semibold">${p.nombre}</p>
          <p class="text-sm text-gray-600">$${p.precio.toFixed(2)} x ${p.cantidad} = $${totalPorProducto}</p>
        </div>
        <button data-id="${p.id}" class="text-red-500 hover:underline text-sm">Quitar</button>
      </li>
    `;
  });
  html += '</ul>';

  resumenDiv.innerHTML = html;

  // Asignar eventos a botones "Quitar"
  resumenDiv.querySelectorAll('button[data-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      quitarDelCarrito(parseInt(btn.dataset.id));
    });
  });
}