# Manual de actualización del portafolio

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

## ROOT Console pública

La consola profesional vive en:

- `/root/index.html` → interfaz pública;
- `/root/ecosistema-publico.json` → catálogo público sanitizado y escalable.

Cuando aparezca un proyecto, rol, caso de uso, comando o repositorio público profesionalmente relevante, actualizar primero la fuente dueña real y después sincronizar únicamente su representación pública sanitizada en `root/ecosistema-publico.json`.

No duplicar en la consola estado operativo privado. La consola es una interfaz de entrada y presentación, no la fuente de verdad del ecosistema.

### Flujo de actualización

`FUENTE_DUEÑA → VERIFICAR_EVIDENCIA → SANITIZAR → ACTUALIZAR_ecosistema-publico.json → VERIFICAR_SITIO`

La función pública `Actualizar` no escribe directamente en GitHub desde el navegador. Copia un prompt para ejecutar la actualización mediante ROOT y una conexión GitHub autenticada, evitando incrustar tokens o credenciales en el sitio.

## Criterio de actualización

Actualizar el portafolio cuando exista nueva evidencia profesional relevante, no por cada cambio menor de un repositorio.

Mantener una versión corta para reclutadores y enlazar detalles adicionales solo cuando aporten evidencia.

## Revisión periódica

Revisar que:

- los enlaces sigan funcionando;
- los proyectos destacados sigan siendo los más representativos;
- la sección de formación no presente aprendizaje como dominio;
- la dirección profesional coincida con la evidencia reciente;
- la ROOT Console refleje los accesos y proyectos públicos vigentes;
- no se haya filtrado información privada.
