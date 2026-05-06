# Guía ATV — Centro Veterinario Salteras

Herramienta de incorporación interactiva para Auxiliares Técnicos Veterinarios (ATV).

## 🔗 Demo

[Ver proyecto en vivo](https://TU_USUARIO.github.io/guia-atv-salteras)

## 📋 Descripción

Aplicación web estática diseñada para facilitar la incorporación de nuevas ATV en una clínica veterinaria. Cubre los procedimientos más habituales y las situaciones difíciles con clientes, con un simulador interactivo para practicar antes de enfrentarse a llamadas reales.

## ✨ Funcionalidades

- **Procedimientos básicos** — gestión de citas, recordatorios WhatsApp, búsqueda en Qvet, ley del medicamento
- **Situaciones difíciles** — tarjetas desplegables con guiones para las llamadas más complicadas
- **Árbol de decisión** — protocolo visual paso a paso para el caso de diarrea
- **Simulador de llamadas** — 6 casos reales con feedback inmediato y puntuación final

## 🗂️ Estructura del proyecto

```
guia-atv-salteras/
├── index.html        # Estructura HTML
├── css/
│   └── styles.css    # Todos los estilos
├── js/
│   ├── data.js       # Datos de los casos del simulador
│   ├── tabs.js       # Navegación entre secciones
│   ├── tarjetas.js   # Tarjetas desplegables
│   └── simulador.js  # Lógica del simulador
└── README.md
```

## 🛠️ Tecnologías

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript vanilla (sin frameworks ni dependencias)

## 🚀 Despliegue local

No requiere instalación. Clona el repositorio y abre `index.html` en el navegador:

```bash
git clone https://github.com/TU_USUARIO/guia-atv-salteras.git
cd guia-atv-salteras
# Abre index.html en tu navegador
```

## 📝 Cómo añadir nuevos casos al simulador

Edita el array `CASOS` en `js/data.js` siguiendo la misma estructura de los casos existentes.

---

Desarrollado como proyecto de portfolio por **Pame**.
