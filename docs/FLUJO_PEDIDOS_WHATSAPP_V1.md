# Flujo de pedidos por WhatsApp — V1

## Objetivo
Convertir `probar.html` en un punto de captación real para el primer pedido gratuito.

## Estado actual
**ACTIVO — V1 implementada en `main`.**

La página ya:
1. captura datos confirmados;
2. permite seleccionar imágenes y logo localmente;
3. genera un `PEDIDO-ID`;
4. prepara un mensaje estructurado;
5. abre WhatsApp con el pedido;
6. indica adjuntar manualmente imágenes y logo;
7. deja la producción y revisión fuera del navegador.

## Flujo
1. El visitante captura únicamente datos confirmados.
2. Selecciona imágenes y logo localmente.
3. La página genera un `PEDIDO-ID` temporal.
4. Se prepara un mensaje estructurado.
5. El mensaje se abre en WhatsApp dirigido al número de producción.
6. El usuario adjunta manualmente fotos y logo en WhatsApp.
7. El pedido se procesa con el sistema de IA y revisión humana.
8. Se entrega una propuesta recomendada o hasta 3 opciones cuando aporte valor.
9. Se realiza seguimiento comercial.

## Datos solicitados
- nombre del solicitante, opcional;
- marca o negocio;
- producto o servicio;
- tipo de pieza;
- precio, si está confirmado;
- disponibilidad;
- contacto que debe aparecer en la pieza;
- ubicación;
- enlace de Google Maps;
- imágenes reales del producto;
- logo, si existe;
- información confirmada;
- objetivo o indicaciones.

## Estados sugeridos para seguimiento privado
`NUEVO -> PEDIDO_RECIBIDO -> ARCHIVOS_COMPLETOS -> EN_PRODUCCION -> MUESTRA_ENVIADA -> SEGUIMIENTO -> CLIENTE | NO_CONVERTIDO`

## Regla de privacidad
Este repositorio es público. **No guardar aquí nombres, teléfonos, conversaciones, fotos privadas ni expedientes de leads.**

El registro real de leads deberá vivir en un origen privado. Como mínimo:
- `lead_id`
- `pedido_id`
- `nombre`
- `telefono_whatsapp`
- `fecha_primer_contacto`
- `origen`
- `primer_pedido_gratis_usado`
- `estado`
- `siguiente_accion`
- `fecha_siguiente_accion`

## Regla comercial
La primera solicitud se anuncia como gratuita. La verificación de si el número ya usó la muestra gratis se realiza al recibir el WhatsApp, hasta que exista un backend privado que automatice esa validación.

## Limitación técnica actual
Un enlace `wa.me` puede precargar texto y destinatario, pero no adjuntar automáticamente los archivos seleccionados en el formulario. Por eso la interfaz instruye al usuario a adjuntar fotos y logo antes de enviar.

## Acción recomendada siguiente — prioridad 1
**Crear un registro privado de leads antes de automatizar más la producción.**

Motivo:
- evita repetir la primera prueba gratuita a un mismo número;
- permite saber quién necesita seguimiento;
- conserva relación `LEAD-ID <-> PEDIDO-ID`;
- permite medir conversión;
- evita guardar PII en GitHub público.

La siguiente implementación debería aceptar como mínimo:
`LEAD-ID, PEDIDO-ID, nombre, WhatsApp, fecha, origen, prueba_gratis_usada, estado, siguiente_accion`.

## Acción posterior — prioridad 2
Crear el prompt/contrato de producción que reciba un pedido normalizado y produzca:
- propuesta principal recomendada;
- hasta 3 variantes cuando aporte valor;
- validación de fidelidad;
- prohibición de inventar datos;
- salida lista para devolver al lead.

## Acción posterior — prioridad 3
Integrar:
`CAPTURA -> REGISTRO PRIVADO -> PRODUCCION -> ENTREGA -> SEGUIMIENTO -> CONVERSION`.

## Continuidad
La autoridad de reanudación de este flujo es:
`ROOT_CONTINUIDAD_PEDIDOS.md`

Comando recomendado para iniciar cualquier sesión futura:
`REANUDAR_PEDIDOS_DESDE_ROOT`


## Protocolo de resiliencia de sesión
La continuidad operativa no depende de conservar este chat.

Fuente canónica de reanudación:
`ROOT_CONTINUIDAD_PEDIDOS.md`

Ante corte de internet, pérdida del chat, pausa, límite de contexto o cambio de IA:
1. iniciar una nueva sesión;
2. indicar `REANUDAR_PEDIDOS_DESDE_ROOT`;
3. leer el root y este documento;
4. verificar el estado real del repositorio;
5. continuar desde la primera acción pendiente.

Solo se recomienda abrir un nuevo chat cuando hacerlo aumente la confiabilidad o reduzca riesgo de pérdida de contexto. No interrumpir una sesión sana únicamente por protocolo.
