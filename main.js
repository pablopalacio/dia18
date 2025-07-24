import { products } from './productos.js';
import { agregarAlCarrito } from './cart.js';
import { finalizarCompra } from './checkout.js';

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("contenedor-productos");
  const finalizarBtn = document.getElementById('finalizar-btn');


  products.forEach(producto => {
    const card = document.createElement('div');
    card.className = "bg-white p-4 rounded shadow flex flex-col justify-between";

    card.innerHTML = `
      <img src="${producto.img}" alt="${producto.nombre}" class="rounded h-36 w-full object-cover mb-2" />
      <h3 class="font-bold text-lg">${producto.nombre}</h3>
      <p class="text-sm text-gray-600">${producto.categoria}</p>
      <p class="text-pink-700 font-semibold text-lg">$${producto.precio.toFixed(2)}</p>
      <button class="mt-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        Agregar al carrito
      </button>
    `;

    card.querySelector('button').addEventListener('click', () => {
      agregarAlCarrito(producto);
    });

    contenedor.appendChild(card);
  });

  if (finalizarBtn) {
    finalizarBtn.addEventListener('click', finalizarCompra);
  }
});
finalizarBtn?.addEventListener('click', finalizarCompra);