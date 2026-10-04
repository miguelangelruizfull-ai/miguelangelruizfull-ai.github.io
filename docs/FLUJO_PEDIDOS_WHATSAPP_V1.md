# Flujo de pedidos por WhatsApp — V1

## Objetivo
Convertir `probar.html` en un punto de captación real para el primer pedido gratuito.

## Flujo
1. El visitante captura únicamente datos confirmados.
2. Selecciona imágenes y logo localmente.
3. La página genera un `PEDIDO-ID` temporal.
4. Se prepara un mensaje estructurado.
5. El mensaje se abre en WhatsApp dirigido al número de producción.
6. El usuario adjunta manualmente fotos y logo en WhatsApp.
7. El pedido se procesa con el sistema de IA y revisión humana.
8. Se entrega una propuesta recomendada o hasta 3 opciones cuando aporte valor.

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

## Siguiente versión
Agregar almacenamiento privado y registro de leads para:
- validar automáticamente la primera muestra gratis;
- conservar historial;
- programar seguimiento;
- asociar entregables;
- medir conversión por origen.
