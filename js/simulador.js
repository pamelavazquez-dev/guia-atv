/**
 * simulador.js
 * Lógica del simulador de llamadas.
 * Depende de data.js (CASOS debe estar cargado antes).
 */

let idx       = 0;
let aciertos  = 0;
let respondido = false;

const elProgTxt  = document.getElementById('progreso-txt');
const elProgFill = document.getElementById('progreso-fill');
const elIntro    = document.getElementById('sim-intro');
const elCaso     = document.getElementById('sim-caso');
const elOpciones = document.getElementById('sim-opciones');
const elFeedback = document.getElementById('sim-feedback');
const elBtnSig   = document.getElementById('btn-sig');
const elContenedor = document.getElementById('sim-contenedor');
const elResultado  = document.getElementById('resultado');
const elNota       = document.getElementById('nota');
const elResTxt     = document.getElementById('res-txt');
const elBtnReiniciar = document.getElementById('btn-reiniciar');

function cargarCaso(i) {
  respondido = false;
  const c = CASOS[i];

  elProgTxt.textContent  = `Caso ${i + 1} de ${CASOS.length}`;
  elProgFill.style.width = `${Math.round((i / CASOS.length) * 100)}%`;
  elIntro.textContent    = c.intro;
  elCaso.textContent     = c.caso;

  elFeedback.className    = '';
  elFeedback.style.display = 'none';
  elFeedback.innerHTML    = '';
  elBtnSig.classList.remove('visible');

  elOpciones.innerHTML = '';
  c.opciones.forEach((op, j) => {
    const btn = document.createElement('button');
    btn.className   = 'opcion';
    btn.textContent = op.texto;
    btn.addEventListener('click', () => elegir(j));
    elOpciones.appendChild(btn);
  });
}

function elegir(j) {
  if (respondido) return;
  respondido = true;

  const c = CASOS[idx];
  const botones = elOpciones.querySelectorAll('.opcion');

  botones.forEach((btn, i) => {
    btn.removeEventListener('click', () => elegir(i));
    if (i === j) {
      btn.classList.add(c.opciones[i].correcto ? 'correcta' : 'incorrecta');
    } else {
      btn.classList.add('apagada');
    }
  });

  if (c.opciones[j].correcto) aciertos++;

  elFeedback.innerHTML = `<strong>${c.opciones[j].correcto ? '✅ Correcto — ' : '❌ No es la mejor opción — '}</strong>${c.opciones[j].feedback}`;
  elFeedback.className = c.opciones[j].correcto ? 'correcto' : 'incorrecto';

  elBtnSig.textContent = idx < CASOS.length - 1 ? 'Siguiente caso →' : 'Ver resultado';
  elBtnSig.classList.add('visible');
}

function siguienteCaso() {
  idx++;
  if (idx >= CASOS.length) {
    mostrarResultado();
    return;
  }
  cargarCaso(idx);
}

function mostrarResultado() {
  elContenedor.style.display = 'none';
  elResultado.classList.add('visible');

  const textos = [
    "Repasa las situaciones con calma, hay conceptos clave que afianzar.",
    "Buen intento. Repasa los casos que fallaste y vuelve a intentarlo.",
    "Bien. Ya tienes la base, solo necesitas practicar un poco más.",
    "Muy bien. Estás preparada para el día a día.",
    "Perfecto. Te lo sabes todo. ¡A por ello! 🐾"
  ];

  const nivel = Math.min(Math.floor((aciertos / CASOS.length) * 4), 4);
  elNota.textContent  = `${aciertos}/${CASOS.length}`;
  elResTxt.textContent = textos[nivel];
}

function reiniciar() {
  idx = 0;
  aciertos = 0;
  elContenedor.style.display = 'block';
  elResultado.classList.remove('visible');
  cargarCaso(0);
}

// ── Eventos ──
elBtnSig.addEventListener('click', siguienteCaso);
elBtnReiniciar.addEventListener('click', reiniciar);

// ── Inicio ──
cargarCaso(0);
