# SOP_PEDIDO_RECIBIDO_WHATSAPP_V1

## Objetivo
Procesar de forma consistente cada pedido que llegue por WhatsApp desde `pruebas.html` o desde el futuro producto público `primer-pedido-gratis`.

## Al recibir un pedido

### 1. Identificar el pedido
Comprobar que el mensaje incluya:
- `PEDIDO-ID`;
- solicitante, si lo indicó;
- marca o negocio;
- producto o servicio;
- pieza solicitada;
- datos confirmados;
- origen / referido, si existe.

No publicar estos datos en repositorios públicos.

### 2. Verificar archivos
Comprobar que el cliente realmente adjuntó:
- al menos una foto del producto;
- logo, solo si indicó que existe.

Si faltan archivos, responder pidiendo únicamente lo faltante.

Estado:
`PEDIDO_RECIBIDO_PENDIENTE_DE_ARCHIVOS`

Cuando estén completos:
`ARCHIVOS_COMPLETOS`

### 3. Validar datos
Antes de producir:
- no inventar precio;
- no inventar características;
- no inventar ubicación;
- no inventar contacto;
- si algo no está confirmado, omitirlo o preguntar.

### 4. Llevar el pedido a IA
Copiar el bloque estructurado del pedido y adjuntar las imágenes reales.

Instrucción base:
`PRODUCIR_PEDIDO_DESDE_WHATSAPP`

La IA debe:
- usar únicamente información confirmada;
- revisar las imágenes antes de proponer diseño;
- recomendar una propuesta principal;
- entregar hasta 3 opciones solo cuando aporten valor;
- evitar modificar el producto de forma que deje de ser fiel a las fotos.

### 5. Producir
Estado:
`EN_PRODUCCION`

Revisar antes de entregar:
- ortografía;
- datos;
- precio;
- contacto;
- marca/logo;
- formato solicitado;
- fidelidad visual;
- que no existan elementos inventados.

### 6. Entregar por WhatsApp
Enviar primero la propuesta recomendada.

Si existen variantes útiles, enviar después las alternativas claramente identificadas.

Estado:
`MUESTRA_ENVIADA`

### 7. Pedir feedback
Preguntar:
- ¿Qué parte te gustó o cambiarías?
- ¿Lo volverías a usar o recomendarías?

No saturar al usuario con cuestionarios.

### 8. Seguimiento
Registrar en origen privado:
- `LEAD-ID`;
- `PEDIDO-ID`;
- fecha;
- estado;
- primera prueba utilizada;
- siguiente acción.

Estado siguiente:
`SEGUIMIENTO`

Luego:
`CLIENTE` o `NO_CONVERTIDO`.

## Regla especial de primera prueba
Hasta que exista automatización privada, verificar manualmente si ese número ya utilizó su primer pedido gratis.

## Comando de continuidad
`REANUDAR_PEDIDOS_DESDE_ROOT`


## Hallazgo validado en PRUEBA01
En la prueba `PRB-20261004-1416-3KY8` se confirmó que seleccionar una imagen en el formulario web **no adjunta ese archivo automáticamente al abrir WhatsApp mediante `wa.me`**.

Por tanto, al recibir cada pedido:
1. no asumir que `IMÁGENES SELECCIONADAS: 1` significa que la imagen llegó;
2. comprobar visualmente que exista un adjunto real en el chat;
3. si no existe, pedir la imagen antes de producir;
4. mantener el estado `PEDIDO_RECIBIDO_PENDIENTE_DE_ARCHIVOS` hasta recibirla.

## CIERRE_REPRODUCIBLE_DEL_PEDIDO

Después de producir cada pedido real:

1. Validar que todos los datos usados estén confirmados y que no se haya inventado precio, contacto, ubicación, características, logo ni promoción.
2. Elegir una sola versión final. Las versiones anteriores se conservan únicamente como historial privado de producción; no se muestran como resultados públicos.
3. Crear o reutilizar una carpeta privada por `PEDIDO-ID`.
4. Guardar en esa carpeta: registro del pedido, material recibido que corresponda, versión inicial relevante y versión final.
5. En repositorios públicos no guardar la ficha privada del cliente. Publicar únicamente el resultado final autorizado y texto comercial mínimo.
6. Cambiar el estado a `MUESTRA_ENVIADA` cuando la entrega esté hecha.
7. Al terminar, recomendar exactamente una siguiente acción concreta según el estado: confirmar recepción -> pedir feedback -> ofrecer segunda pieza/paquete -> pedir autorización para portafolio si todavía no existe.
8. No generar trabajo adicional no solicitado solo por cerrar el pedido.

### Autorización operativa del flujo
Cuando el usuario entrega un pedido y pide operarlo/actualizarlo, se considera autorizada la ejecución de los pasos ordinarios de este SOP dentro del proyecto: analizar, producir, revisar, archivar, actualizar el registro técnico y preparar/publicar el resultado expresamente autorizado. No se extiende a acciones externas ajenas al pedido ni sustituye permisos exigidos por las herramientas.
