/**
 * tarjetas.js
 * Gestiona el desplegado de las tarjetas de situaciones.
 */

document.querySelectorAll('.tarjeta-hdr').forEach(hdr => {
  hdr.addEventListener('click', () => {
    hdr.classList.toggle('open');
    hdr.nextElementSibling.classList.toggle('open');
  });
});
