/**
 * tabs.js
 * Gestiona la navegación entre secciones.
 */

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));

    btn.classList.add('active');
    document.getElementById('sec-' + btn.dataset.sec).classList.add('activa');
  });
});
