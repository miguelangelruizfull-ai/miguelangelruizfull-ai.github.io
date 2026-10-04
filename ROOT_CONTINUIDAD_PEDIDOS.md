# ROOT_CONTINUIDAD_PEDIDOS

> Este archivo es un **checkpoint operativo de continuidad**, no una credencial ni acceso de sistema.

## Comando raíz
`REANUDAR_PEDIDOS_DESDE_ROOT`

## Propósito
Permitir que cualquier sesión futura retome el flujo de captación y producción iniciado en `/probar.html` sin reconstruir decisiones ya tomadas.

## Autoridades
1. Implementación pública vigente: `probar.html`.
2. Contrato operativo: `docs/FLUJO_PEDIDOS_WHATSAPP_V1.md`.
3. Contexto público general: `README.md`.
4. Datos privados de leads: **nunca usar este repositorio como fuente de almacenamiento**.

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
6. actualizar este checkpoint si cambia la arquitectura o la prioridad.

## Inicio alternativo más específico
Para saltar directamente a la siguiente fase:

`INICIAR_REGISTRO_PRIVADO_DE_LEADS`

## Criterio de avance
No marcar la fase de leads como completa hasta que exista un origen privado real y verificable para almacenar y consultar el estado de cada lead.

## Último estado documentado
Fecha local de referencia: 2026-10-04.
Fase: `CAPTACION_WHATSAPP_V1_IMPLEMENTADA`.
Siguiente fase: `REGISTRO_PRIVADO_DE_LEADS`.
