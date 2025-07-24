import { obtenerCarrito } from './cart.js';

function calcularTotal(carrito) {
  return carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
}

function calcularDescuento(total) {
  return total >= 20 ? total * 0.1 : 0;
}

export function actualizarResumen(carrito) {
  const resumenDiv = document.getElementById('resumen-carrito');
  if (!resumenDiv) return;

  const total = calcularTotal(carrito);
  const descuento = calcularDescuento(total);
  const totalFinal = total - descuento;

  const totalHTML = `
    <hr class="my-2" />
    <p class="text-right text-sm">Total sin descuento: <strong>$${total.toFixed(2)}</strong></p>
    <p class="text-right text-sm text-green-600">Descuento: -$${descuento.toFixed(2)}</p>
    <p class="text-right font-bold text-lg">Total final: $${totalFinal.toFixed(2)}</p>
  `;

  resumenDiv.insertAdjacentHTML('beforeend', totalHTML);
}

export function finalizarCompra() {
  const carrito = obtenerCarrito();
  const total = calcularTotal(carrito);
  const descuento = calcularDescuento(total);
  const totalFinal = total - descuento;

  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  let resumen = "🧾 Resumen de la compra:\n\n";
  carrito.forEach(p => {
    resumen += `- ${p.nombre} x${p.cantidad}: $${(p.precio * p.cantidad).toFixed(2)}\n`;
  });

  resumen += `\nTotal sin descuento: $${total.toFixed(2)}`;
  resumen += `\nDescuento: -$${descuento.toFixed(2)}`;
  resumen += `\nTotal final: $${totalFinal.toFixed(2)}\n\n✅ ¡Gracias por tu compra!`;

  alert(resumen);
  location.reload();
}