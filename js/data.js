/**
 * data.js
 * Casos del simulador de llamadas.
 * Para añadir o modificar un caso, edita este array.
 */

const CASOS = [
  {
    intro: "Llega una llamada. El cliente suena nervioso.",
    caso: "«Buenas, quería hablar con el veterinario de mi perra, la que tiene el problema de piel que estamos siguiendo.»",
    opciones: [
      {
        texto: "Decirle que los veterinarios no atienden el teléfono y ya está.",
        correcto: false,
        feedback: "Demasiado frío. El cliente se queda sin respuesta y sintiéndose ignorado."
      },
      {
        texto: "Pedir los apellidos, buscarla en Qvet y, si tiene revisión o resultados pendientes, decirle que se lo comentamos y le llamamos.",
        correcto: true,
        feedback: "Perfecto. Le das una respuesta concreta, muestras que has mirado su ficha y el cliente queda tranquilo."
      },
      {
        texto: "Pasarle directamente al veterinario.",
        correcto: false,
        feedback: "Los veterinarios normalmente están en consulta. No es el procedimiento habitual."
      }
    ]
  },
  {
    intro: "Cliente adulto, tono angustiado.",
    caso: "«Mi perro se ha hecho una herida en la pata y sangra un poco, ¿qué le pongo?»",
    opciones: [
      {
        texto: "Explicarle cómo limpiar la herida paso a paso por teléfono.",
        correcto: false,
        feedback: "Sin ver la herida no sabes su profundidad ni gravedad. Puedes dar un consejo equivocado."
      },
      {
        texto: "Decirle que mande una foto al WhatsApp de la clínica y que en cuanto la vean los veterinarios le decimos algo.",
        correcto: true,
        feedback: "Muy bien. Les das una acción concreta, te liberas de la llamada larga y el veterinario puede valorar con información real."
      },
      {
        texto: "Decirle que venga a urgencias ahora mismo.",
        correcto: false,
        feedback: "Puede ser una herida leve. No conviene alarmar sin ver nada primero."
      }
    ]
  },
  {
    intro: "Cliente que llama con seguridad, como si ya supiera la respuesta.",
    caso: "«Hola, mi perro tiene otitis otra vez. Apartadme las mismas gotas que le pusisteis la última vez, que me paso a por ellas.»",
    opciones: [
      {
        texto: "Buscar en el historial qué gotas le mandaron y vendérselas.",
        correcto: false,
        feedback: "No puedes dispensar un antibiótico sin que el veterinario lo haya valorado. Las otitis no siempre tienen el mismo origen."
      },
      {
        texto: "Explicarle que para saber si le sirve el mismo tratamiento hay que ver en citología qué causa la otitis, y que tendría que venir a consulta.",
        correcto: true,
        feedback: "Correcto. Le explicas el porqué sin sonar burocrática, y le das sentido a la visita."
      },
      {
        texto: "Decirle que consultas con el veterinario y le llamas.",
        correcto: false,
        feedback: "No es incorrecto, pero no le estás explicando nada. Puede volver con la misma petición."
      }
    ]
  },
  {
    intro: "Cliente que llama muy seguro de lo que quiere.",
    caso: "«Necesito que me recetéis amoxicilina para mi gato, que tiene una infección.»",
    opciones: [
      {
        texto: "Decirle que solo un veterinario puede valorarlo y que tiene que pasar por consulta.",
        correcto: false,
        feedback: "Correcto en el fondo, pero sin el motivo legal suena a capricho de la clínica."
      },
      {
        texto: "Decirle que por la nueva ley del medicamento no se puede recetar antibiótico sin justificación clínica, y que tendría que pasar por consulta.",
        correcto: true,
        feedback: "Perfecto. La razón legal es objetiva y no da lugar a discusión. Luego ofreces solución: la consulta."
      },
      {
        texto: "Decirle que sí, que le preparas la receta.",
        correcto: false,
        feedback: "Esto va contra la ley del medicamento. No es posible."
      }
    ]
  },
  {
    intro: "Suena el teléfono. Tono tranquilo.",
    caso: "«Oye, mi perro lleva dos días con diarrea pero come bien, está activo y no vomita. ¿Qué hago?»",
    opciones: [
      {
        texto: "Preguntarle si es cachorro y si hay sangre o moco en las heces antes de recomendar nada.",
        correcto: true,
        feedback: "Exacto. Esas son las dos preguntas clave que te faltan para poder recomendar dieta y probióticos con seguridad."
      },
      {
        texto: "Decirle directamente que venga a por dieta intestinal y probióticos.",
        correcto: false,
        feedback: "Antes necesitas saber si es cachorro y si hay sangre o moco. Con esa información puede cambiar todo."
      },
      {
        texto: "Decirle que lo traiga a consulta para no arriesgarte.",
        correcto: false,
        feedback: "Si cumple los criterios (adulto, activo, come, sin sangre ni moco) puedes evitarle una visita innecesaria."
      }
    ]
  },
  {
    intro: "El cliente suena muy insistente.",
    caso: "«Quiero comprar la Osurnia para ponérsela yo, que ya sé cómo hacerlo.»",
    opciones: [
      {
        texto: "Vendérsela si muestra que sabe aplicarla.",
        correcto: false,
        feedback: "La Osurnia solo puede aplicarla el veterinario. No se puede vender para uso doméstico."
      },
      {
        texto: "Decirle que la Osurnia no se dispensa para casa, que es un tratamiento médico reservado al veterinario, y que además habría que hacer citología para ver si ese tratamiento sigue siendo el adecuado.",
        correcto: true,
        feedback: "Perfecto. Dos motivos sólidos: tratamiento reservado al veterinario, y puede que necesite uno diferente."
      },
      {
        texto: "Decirle que se lo preguntas al veterinario y ya le dirás.",
        correcto: false,
        feedback: "No hace falta preguntar: la Osurnia no se vende para casa. Puedes responderle tú directamente."
      }
    ]
  }
];
