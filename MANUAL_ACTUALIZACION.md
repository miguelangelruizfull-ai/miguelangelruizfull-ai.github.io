# Manual de actualización del portafolio

## Propósito permanente

Este portafolio no debe convertirse en una colección de páginas aisladas. Debe conservar tres capas visibles y coherentes:

1. trayectoria profesional verificable;
2. proyectos/casos que demuestran capacidad actual;
3. dirección de crecimiento y continuidad personal.

La página principal debe poder responder, con evidencia pública sanitizada:

- de dónde viene Miguel profesionalmente;
- cuándo y cómo retomó el camino tecnológico;
- qué ha construido desde ese regreso;
- qué capacidad puede demostrar hoy;
- qué sigue en desarrollo;
- hacia dónde va el ecosistema profesional.

## Antes de agregar un proyecto

Confirmar:

1. que el proyecto existe y es atribuible a Miguel;
2. qué parte realizó Miguel y qué parte fue asistida por IA o terceros;
3. que la evidencia enlazada es pública;
4. que no contiene datos sensibles;
5. qué problema resolvió;
6. qué resultado puede demostrarse;
7. qué aprendió y qué limitaciones siguen vigentes.

## Estructura mínima de cada caso

- Problema
- Contexto
- Responsabilidad
- Proceso
- Decisiones
- Herramientas
- Resultado
- Evidencia
- Aprendizajes
- Siguiente evolución

## Trayectoria pública

La trayectoria vive principalmente en:

- `/index.html` → síntesis profesional;
- `/historia/index.html` → narrativa ampliada del regreso a tecnología, capacidad actual y dirección futura.

Actualizarla solo cuando exista evidencia nueva suficiente para mejorar la historia profesional. No inventar fechas, puestos, resultados o dominios técnicos.

La trayectoria debe distinguir siempre:

- `HECHO_VERIFICABLE`;
- `TRABAJO_EN_PROGRESO`;
- `FORMACION_EN_PROGRESO`;
- `OBJETIVO_FUTURO`.

## Página para su hijo

La ruta pública `/para-mi-hijo/` conserva un mensaje personal sanitizado y conecta con el origen de `Album_Digital`.

Reglas:

- no publicar nombre completo, edad, escuela, domicilio, documentos ni otra PII del menor;
- no subir fotografías o videos familiares a este repositorio;
- no enlazar repositorios familiares privados o material RAW;
- conservar el mensaje central: amor, memoria, trabajo y continuidad;
- si se desea mostrar el álbum familiar real en el futuro, hacerlo mediante una solución privada/autenticada separada del portafolio público.

## ROOT Console pública

La consola profesional vive en:

- `/root/index.html` → interfaz pública;
- `/root/ecosistema-publico.json` → catálogo público sanitizado y escalable.

Cuando aparezca un proyecto, rol, caso de uso, comando o repositorio público profesionalmente relevante, actualizar primero la fuente dueña real y después sincronizar únicamente su representación pública sanitizada en `root/ecosistema-publico.json`.

No duplicar en la consola estado operativo privado. La consola es una interfaz de entrada y presentación, no la fuente de verdad del ecosistema.

### Flujo de actualización

`FUENTE_DUEÑA → VERIFICAR_EVIDENCIA → SANITIZAR → ACTUALIZAR_PORTAFOLIO/ROOT_CONSOLE → VERIFICAR_SITIO`

La función pública `Actualizar` no escribe directamente en GitHub desde el navegador. Copia un prompt para ejecutar la actualización mediante ROOT y una conexión GitHub autenticada, evitando incrustar tokens o credenciales en el sitio.

## Criterio de actualización

Actualizar el portafolio cuando exista nueva evidencia profesional relevante, no por cada cambio menor de un repositorio.

Mantener una versión corta para reclutadores y enlazar detalles adicionales solo cuando aporten evidencia.

Cuando el ecosistema crezca, priorizar:

- nuevos casos demostrables;
- cambios reales de capacidad;
- resultados verificables;
- evolución de arquitectura o procesos que pueda explicarse sin revelar la capa privada;
- nueva formación aplicada en proyectos reales.

## Revisión periódica

Revisar que:

- los enlaces sigan funcionando;
- los proyectos destacados sigan siendo los más representativos;
- la sección de formación no presente aprendizaje como dominio;
- la dirección profesional coincida con la evidencia reciente;
- la ROOT Console refleje los accesos y proyectos públicos vigentes;
- `/historia/` siga representando correctamente la trayectoria;
- `/para-mi-hijo/` permanezca sanitizada y sin PII;
- no se haya filtrado información privada.
