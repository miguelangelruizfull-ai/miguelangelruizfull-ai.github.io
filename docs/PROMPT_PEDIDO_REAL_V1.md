# PROMPT_PEDIDO_REAL_V1

## Propósito

Ejecutar un pedido real de `MUESTRA_GRATIS` de principio a fin sin inventar información y dejando continuidad verificable.

## Entrada mínima

Usar el PEDIDO-ID y únicamente los datos confirmados por el cliente/usuario y los archivos realmente disponibles.

## Secuencia operativa

### 1. ANALIZAR_PEDIDO
- Extraer datos confirmados.
- Verificar que los archivos necesarios estén disponibles.
- Separar datos faltantes de datos confirmados.
- No completar huecos por inferencia.

### 2. RECOMENDAR_FORMATO
Elegir el formato según:
- objetivo comercial;
- cantidad y calidad del material real;
- canal previsto;
- legibilidad móvil.

Si el cliente eligió “Recomiéndame”, decidir el formato sin pedir una confirmación adicional salvo que falte un dato imprescindible.

### 3. PRODUCIR_V1
- Usar fotografías reales del pedido.
- Preservar identidad, forma, producto, colores y elementos reales.
- No inventar precio, promoción, contacto, ubicación, logo, características o disponibilidad.
- Mantener una jerarquía clara: producto -> propuesta -> CTA.

### 4. QA_Y_MEJORA
Revisar:
- fidelidad al material original;
- encuadre y escala;
- texto legible;
- ortografía;
- contraste;
- CTA;
- ausencia de elementos inventados;
- apariencia no genérica.

Si V1 puede mejorar, producir una versión revisada y seleccionar una sola FINAL.

### 5. ARCHIVAR
En almacenamiento privado:
- registro del pedido;
- material relevante;
- V1 útil para trazabilidad;
- FINAL.

En repositorio público:
- no publicar ficha privada del cliente;
- publicar únicamente la pieza FINAL expresamente autorizada y texto mínimo de portafolio.

### 6. CERRAR
Estado recomendado al terminar la pieza:
`MUESTRA_ENVIADA` una vez entregada al cliente.

### 7. SIGUIENTE_OPCION
Después de terminar, recomendar exactamente una siguiente acción, no una lista larga.

Orden recomendado:
1. entregar/confirmar recepción;
2. pedir una sola observación de feedback;
3. si la reacción es positiva, ofrecer una segunda pieza pagada o paquete sencillo;
4. si todavía no existe permiso de portafolio, pedirlo antes de publicar material que no haya sido expresamente autorizado.

## Regla de autorización operativa

Cuando el usuario entrega un pedido real y pide operarlo, actualizarlo o terminarlo, se pueden ejecutar sin confirmaciones intermedias los pasos ordinarios de este flujo dentro del proyecto: análisis, selección de formato, producción, QA, archivo privado, registro técnico sanitizado y publicación del resultado cuando el usuario la haya autorizado expresamente.

Esta autorización no cubre acciones ajenas al pedido, divulgación de información privada ni acciones para las que la herramienta requiera una confirmación específica.

## Regla maestra

**Usar solo información confirmada; no inventar datos.**
