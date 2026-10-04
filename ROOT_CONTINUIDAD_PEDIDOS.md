# ROOT_CONTINUIDAD_PEDIDOS

> Este archivo es un **checkpoint operativo de continuidad**, no una credencial ni acceso de sistema.

## Comando raíz
`REANUDAR_PEDIDOS_DESDE_ROOT`

## Propósito
Permitir que cualquier sesión futura retome el flujo de captación y producción iniciado en `/probar.html` sin reconstruir decisiones ya tomadas.

## Principio de continuidad
**El repositorio es la autoridad de continuidad; el chat es una sesión de trabajo temporal.**

Si ocurre cualquiera de estos eventos:
- se corta internet;
- se cierra o elimina el chat;
- la sesión se pausa;
- una IA deja de responder;
- se alcanza un límite de contexto o herramientas;
- el proceso debe continuar en otra IA;

la siguiente sesión debe comenzar desde este archivo y no desde recuerdos parciales del chat.

## Autoridades
1. Implementación pública vigente: `probar.html`.
2. Contrato operativo: `docs/FLUJO_PEDIDOS_WHATSAPP_V1.md`.
3. Contexto público general: `README.md`.
4. Datos privados de leads: **nunca usar este repositorio público como almacenamiento**.

## Checkpoint vigente
- `/probar.html` ya fue convertido de demo local a embudo de pedido.
- El primer pedido se anuncia como gratuito.
- El visitante proporciona marca, producto, precio opcional, disponibilidad, contacto, ubicación/Maps, imágenes, logo y datos confirmados.
- Se genera un `PEDIDO-ID`.
- El pedido se prepara para WhatsApp.
- Imágenes y logo se adjuntan manualmente en WhatsApp.
- No se deben inventar datos.
- La producción se realiza posteriormente con IA + revisión humana.
- La salida puede ser una propuesta recomendada o hasta 3 opciones.
- El seguimiento del lead todavía no está automatizado.

## Política de checkpoint antes de cambios
Antes de una actualización importante o una operación de varios pasos:
1. comprobar este root y el estado real del repositorio;
2. identificar la fase y siguiente acción;
3. si el trabajo tiene riesgo de quedar incompleto, guardar primero un checkpoint verificable;
4. ejecutar la actualización;
5. actualizar este root cuando cambie el estado, arquitectura o prioridad.

No crear checkpoints triviales que solo agreguen ruido.

## Criterio para recomendar un nuevo chat
Recomendar una nueva sesión **solo cuando mejore la confiabilidad**, por ejemplo:
- el contexto actual ya es demasiado largo o confuso;
- hay señales de respuestas incompletas/repetitivas;
- una operación extensa quedó a medias;
- se cambia de una fase mayor a otra y conviene aislar el trabajo;
- otra IA debe tomar el relevo.

Si el chat actual conserva suficiente contexto y herramientas, continuar aquí.

## Mensaje de relevo recomendado
En una nueva sesión pegar solamente:

`REANUDAR_PEDIDOS_DESDE_ROOT`

y, si se quiere ir directo a la siguiente fase:

`INICIAR_REGISTRO_PRIVADO_DE_LEADS`

La nueva IA debe leer primero el repositorio y verificar el estado antes de modificar nada.

## Siguiente acción recomendada
**PRIORIDAD 1 — REGISTRO_PRIVADO_DE_LEADS**

Construir el registro privado mínimo antes de añadir más automatización visual.

Objetivos:
- identificar si un número ya utilizó su primera prueba gratis;
- relacionar `LEAD-ID` con `PEDIDO-ID`;
- conservar estado y siguiente acción;
- registrar fecha de seguimiento;
- medir conversión sin exponer PII en GitHub público.

Campos mínimos:
`lead_id, pedido_id, nombre, telefono_whatsapp, fecha_primer_contacto, origen, primer_pedido_gratis_usado, estado, siguiente_accion, fecha_siguiente_accion`.

## Orden de continuidad recomendado
1. `REGISTRO_PRIVADO_DE_LEADS`
2. `PROMPT_MAESTRO_DE_PRODUCCION`
3. `ENTREGA_Y_SEGUIMIENTO`
4. `METRICAS_DE_CONVERSION`

## Instrucción para una sesión futura
Cuando el usuario escriba:

`REANUDAR_PEDIDOS_DESDE_ROOT`

la sesión debe:
1. leer este archivo;
2. leer `docs/FLUJO_PEDIDOS_WHATSAPP_V1.md`;
3. comprobar el estado vigente de `probar.html`;
4. continuar desde la primera acción pendiente;
5. preservar la regla de no almacenar PII en el repositorio público;
6. revisar la situación actual antes de decidir si seguir aquí o abrir nueva sesión;
7. actualizar este checkpoint si cambia la arquitectura o la prioridad.

## Inicio alternativo más específico
Para saltar directamente a la siguiente fase:

`INICIAR_REGISTRO_PRIVADO_DE_LEADS`

## Criterio de avance
No marcar la fase de leads como completa hasta que exista un origen privado real y verificable para almacenar y consultar el estado de cada lead.

## Último estado documentado
Fecha local de referencia: 2026-10-04.
Fase: `CAPTACION_WHATSAPP_V1_IMPLEMENTADA`.
Siguiente fase: `REGISTRO_PRIVADO_DE_LEADS`.
Continuidad: `CHECKPOINT_REPO_CANONICO_ACTIVO`.


## Regla de seguimiento después de cada respuesta
Después de cada respuesta relacionada con este proyecto:
1. actualizar el repositorio con un registro de seguimiento;
2. dejar constancia de la decisión, acción realizada, estado y siguiente paso;
3. no depender del historial del chat para reconstruir el proyecto;
4. si la respuesta contiene PII, datos privados, enlaces privados, credenciales, conversaciones privadas o material no publicable, **no copiarla literalmente** al repositorio público;
5. en esos casos, guardar únicamente una versión sanitizada y operativa;
6. el registro canónico de seguimiento vive en `docs/SEGUIMIENTO_PROYECTO.md`.

Formato recomendado por entrada:
- fecha/hora;
- fase;
- solicitud del usuario;
- respuesta/decisión resumida;
- cambios ejecutados;
- siguiente acción recomendada;
- comando de reanudación aplicable.


## Separación laboratorio / lanzamiento
Arquitectura aprobada:
- repositorio actual `miguelangelruizfull-ai.github.io`: laboratorio temporal;
- página de pruebas: `/pruebas.html`;
- **no usar este repo como enlace final de lanzamiento**;
- repositorio público final: `primer-pedido-gratis`;
- cuando el producto esté validado, migrar únicamente los archivos sanitizados necesarios al nuevo repo;
- después de verificar el nuevo lanzamiento, los demás repositorios podrán pasar a privado según decisión del usuario.

## Regla de publicación
El enlace que se comparta en lanzamiento comercial debe pertenecer al repo `primer-pedido-gratis`.
`pruebas.html` queda para desarrollo, validación y control de calidad.

## Condición de migración
Migrar al repo final cuando:
1. el flujo haya sido probado con usuarios reales;
2. el formulario y mensaje de WhatsApp estén estables;
3. el registro privado de leads esté definido;
4. se haya revisado que el nuevo repo no contenga información privada, histórica o interna.


## Estrategia de adquisición vigente
Fase recomendada: `SAMPLE_FIRST`.

Idea:
**dar una muestra real del servicio antes de vender**, igual que una prueba gratuita física.

Oferta:
`1 MUESTRA GRATIS POR NEGOCIO`

No depende de referidos. La atribución se hace por canal/campaña:
`src=whatsapp|facebook|instagram|maps|presencial`
y
`camp=MUESTRA_GRATIS`.

Documento canónico:
`docs/PLAN_MUESTRA_GRATIS_V1.md`

Secuencia:
1. negocio descubre la muestra;
2. prueba con un producto real;
3. recibe una pieza terminada;
4. decide si quiere una segunda pieza o paquete;
5. seguimiento privado.

No usar nuevos enlaces `?ref=`.

## Plan de validación activo
Documento operativo:
`docs/PLAN_MUESTRA_GRATIS_V1.md`

Meta de esta fase:
**5–10 negocios con muestras reales completas antes del lanzamiento público final.**

## Mejora de interfaz posterior a PRUEBA01
Estado: `PRUEBA02_UX_LISTA`.

Cambios aplicados en `pruebas.html`:
- vista previa real de fotos seleccionadas;
- confirmación explícita de que seleccionar una foto no significa que ya esté adjunta en WhatsApp;
- pantalla final de handoff antes de salir;
- opción progresiva `Compartir fotos + pedido` cuando el navegador móvil soporta Web Share con archivos;
- fallback `Abrir WhatsApp con el pedido` con instrucción de adjuntar manualmente;
- opción de copiar el texto del pedido;
- mensaje de WhatsApp más corto para reducir el colapso por "Leer más";
- confirmación visible del logo seleccionado;
- FAQ actualizada sobre transferencia de fotos.

Regla:
Nunca asumir que la vía nativa de compartir está disponible o que WhatsApp recibirá automáticamente los archivos. Verificar siempre los adjuntos reales en el chat.

Siguiente prueba recomendada:
`PRUEBA02` en un teléfono real, probando primero la opción nativa si aparece y después el fallback de WhatsApp directo.
