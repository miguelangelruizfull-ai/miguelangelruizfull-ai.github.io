# PLAN_MUESTRA_GRATIS_V1

## Estrategia
`SAMPLE_FIRST` — muestra primero, venta después.

## Idea central
Adaptar al servicio digital el comportamiento de una muestra física:
- el prospecto prueba algo real;
- no tiene que comprar primero;
- recibe valor antes de decidir;
- si el resultado le sirve, la conversación comercial ocurre después.

No depende de referidos.

## Oferta
**1 muestra gratis por negocio.**

La muestra usa:
- una foto real del producto/servicio;
- datos confirmados;
- objetivo comercial;
- formato recomendado por el sistema cuando el cliente no sabe cuál elegir.

## Mensaje de adquisición
`Prueba una pieza real para tu negocio antes de pagar.`

Alternativas:
- `Mándame un producto. La primera pieza va por mi cuenta.`
- `No te vendo primero: pruébalo con tu negocio.`
- `Primero mira lo que puedo hacer con tu producto. Después decides.`

## Canales iniciales
1. WhatsApp directo a negocios conocidos o contactos comerciales.
2. Facebook: grupos locales, páginas de negocio y vendedores activos.
3. Instagram/TikTok: negocios que ya publican producto pero tienen contenido visual débil o inconsistente.
4. Google Maps: detectar negocios locales con presencia activa y contactar solo por canales públicos apropiados, de forma personalizada y de bajo volumen.
5. En persona: enseñar el enlace/QR a un comercio y ofrecer una muestra con uno de sus productos.

## Regla de contacto
Evitar mensajes masivos genéricos. La invitación debe mencionar el producto o negocio real cuando sea posible y llevar a una acción única: probar la muestra.

## Atribución
No usar `ref=`.
Usar:
- `?src=whatsapp&camp=MUESTRA_GRATIS`
- `?src=facebook&camp=MUESTRA_GRATIS`
- `?src=instagram&camp=MUESTRA_GRATIS`
- `?src=maps&camp=MUESTRA_GRATIS`
- `?src=presencial&camp=MUESTRA_GRATIS`

Esto mide canal/campaña sin identificar personas.

## Flujo
`DESCUBRE -> PRUEBA GRATIS -> PEDIDO REAL -> RESULTADO -> SEGUNDA NECESIDAD -> CLIENTE`

## Conversión
No intentar cerrar antes de entregar la muestra.

Después de entregar:
1. preguntar si le sirvió;
2. preguntar qué pieza necesita después;
3. ofrecer una segunda pieza pagada o un paquete simple;
4. registrar estado en sistema privado.

## Criterio de validación
Probar con 5–10 negocios.
Medir:
- cuántos abren;
- cuántos empiezan;
- cuántos completan;
- cuántos envían foto correctamente;
- cuántos reciben la muestra;
- cuántos preguntan por otra pieza/precio;
- tiempo operativo por muestra.

## Escalamiento
Solo después de validar:
- landing pública final;
- registro privado de leads;
- QR para uso presencial;
- ejemplos reales autorizados;
- publicaciones de antes/después;
- pauta pagada si la conversión y capacidad lo justifican.

## Privacidad
No registrar PII en GitHub público.

## ARQUITECTURA_PEDIDOS_REALES

Modelo recomendado para escalar sin mezclar datos privados con la página pública:

- **Drive privado:** una carpeta por pedido real, nombrada con `PEDIDO-ID`. Conserva registro, material de trabajo, V1 y FINAL.
- **GitHub público:** landing, método, prompts sanitizados y únicamente piezas finales autorizadas para portafolio.
- **Versiones:** nunca borrar el original útil ni la primera versión que explique una mejora; marcarla como historial. Solo la FINAL se promociona.
- **Portafolio:** agregar resultados conforme se terminen. Mostrar pocos y buenos; cuando existan 4–6 resultados autorizados, separar un `resultados.html` o galería ligera.
- **Conversión:** después de la muestra gratis, la siguiente oferta no es otra muestra gratis indefinida. Primero confirmar recepción/feedback y luego proponer una segunda pieza pagada o paquete sencillo.
- **Métrica mínima:** pedido completo -> muestra terminada -> entrega confirmada -> respuesta/feedback -> segunda pieza solicitada.
