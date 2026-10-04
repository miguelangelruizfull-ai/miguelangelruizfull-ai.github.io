# Seguimiento del proyecto

Este archivo conserva un historial público y sanitizado de decisiones y respuestas operativas del proyecto.

## 2026-10-04 — Regla de persistencia de respuestas
- Fase: `CONTINUIDAD_OPERATIVA`
- Solicitud del usuario: guardar o actualizar el repositorio después de cada respuesta para conservar seguimiento.
- Decisión: registrar cada respuesta relacionada con el proyecto en el repo.
- Protección: no copiar datos privados o sensibles literalmente a un repositorio público; registrar una versión sanitizada.
- Estado: regla incorporada al ROOT.
- Siguiente acción: continuar con `REGISTRO_PRIVADO_DE_LEADS`.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`


## 2026-10-04 — Respuesta registrada
Quedó configurado.

Desde ahora, para este proyecto:
- después de cada respuesta registraré en el repo la decisión, cambios realizados, estado y siguiente paso;
- el historial quedará en `docs/SEGUIMIENTO_PROYECTO.md`;
- el ROOT seguirá siendo `ROOT_CONTINUIDAD_PEDIDOS.md`;
- si una respuesta contiene datos privados, PII, enlaces privados o credenciales, guardaré una versión sanitizada en vez de publicar el contenido sensible;
- si no hubo ningún cambio técnico, igualmente dejaré constancia de la decisión o recomendación relevante.

El protocolo ya está activo. Siguiente fase vigente: `REGISTRO_PRIVADO_DE_LEADS`.

Comando de continuidad: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Recomendación de lanzamiento controlado
- Fase: `VALIDACION_COMERCIAL_INICIAL`
- Solicitud del usuario: decidir si el producto ya debe compartirse y cómo hacerlo.
- Recomendación: sí compartirlo, pero como lanzamiento controlado/beta con un grupo pequeño de negocios reales antes de una difusión masiva.
- Canal inicial recomendado: enlace directo a `/probar.html` por WhatsApp, Facebook y contactos cercanos.
- Objetivo de la prueba: validar que el usuario entienda la oferta, complete el pedido, adjunte archivos en WhatsApp y que el flujo de entrega/seguimiento sea operable.
- Límite recomendado inicial: 5 a 10 primeros pedidos reales antes de escalar.
- Condición antes de campaña amplia: implementar `REGISTRO_PRIVADO_DE_LEADS` y validar al menos varios pedidos completos.
- Siguiente acción: iniciar difusión controlada y registrar observaciones de los primeros usuarios.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`


## 2026-10-04 — Forma recomendada de compartir con familiares o conocidos
- Fase: `VALIDACION_COMERCIAL_INICIAL`
- Solicitud del usuario: cómo presentar el producto a familiares o conocidos.
- Recomendación: compartirlo como invitación a probar y pedir retroalimentación, no como venta directa.
- Mensaje clave: primera prueba gratis, usar fotos/datos reales, enviar pedido por WhatsApp y comentar si el flujo se entiende.
- Objetivo: obtener primeros pedidos reales y detectar fricciones antes de difusión amplia.
- Siguiente acción: enviar el enlace a contactos de confianza y registrar qué dudas aparecen.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`


## 2026-10-04 — Recomendación de repositorio final del producto
- Fase: `VALIDACION_COMERCIAL_INICIAL`
- Solicitud del usuario: decidir si mantener el producto en el repositorio actual o crear uno dedicado, y definir nombre.
- Recomendación: mantener temporalmente `/probar.html` en el repositorio actual durante la validación; cuando el flujo esté probado, migrar a un repositorio público dedicado si será el producto público principal.
- Motivo: separar portafolio profesional de producto comercial, reducir riesgo de mezclar documentación interna y permitir evolucionar el producto de forma independiente.
- Nombre recomendado de repositorio: `primer-pedido-gratis` si se prioriza claridad; alternativa de marca: `creativo-ruiz`.
- Ruta temporal vigente: `https://miguelangelruizfull-ai.github.io/probar.html`.
- Siguiente criterio de migración: completar varios pedidos reales, definir marca final y tener registro privado de leads.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Separación definitiva entre laboratorio y producto público
- Fase: `ARQUITECTURA_DE_PUBLICACION`
- Decisión: el repositorio actual se conserva temporalmente como laboratorio.
- Página de ensayo: `/pruebas.html`.
- Regla: no compartir el repo actual como lanzamiento comercial final.
- Lanzamiento público previsto: repositorio dedicado `primer-pedido-gratis`.
- Objetivo: permitir que, después de validar el producto, los demás repositorios puedan hacerse privados sin afectar el enlace público comercial.
- Migración: solo contenido sanitizado y necesario para operar el producto.
- Estado: `PRUEBAS_EN_REPO_ACTUAL / LANZAMIENTO_EN_REPO_NUEVO`.
- Siguiente acción: validar el flujo en `pruebas.html`, luego crear/publicar `primer-pedido-gratis`.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Respuesta registrada
Sí. Esa arquitectura queda mejor y ya la dejé aplicada.

- El repo actual queda como **laboratorio temporal**.
- Creé `pruebas.html` para validar el flujo sin tratarlo como lanzamiento final.
- El producto que realmente compartirás debe vivir después en un repo nuevo y sanitizado: `primer-pedido-gratis`.
- Cuando ese repo esté validado y publicado, podrás poner los demás repos privados sin romper el producto público.
- La migración al nuevo repo deberá copiar solo lo necesario: página, estilos, scripts y documentación pública; nada de historial interno, PII, enlaces privados ni archivos operativos.

Página de pruebas actual:
`https://miguelangelruizfull-ai.github.io/pruebas.html`

No la trataría como enlace comercial definitivo.

El lanzamiento final será algo como:
`https://miguelangelruizfull-ai.github.io/primer-pedido-gratis/`

Siguiente paso: probar `pruebas.html` con unos pocos usuarios, estabilizar el flujo y después crear el repo público final.


## 2026-10-04 — Landing responsive y estrategia referral-first
- Fase: `VALIDACION_COMERCIAL_INICIAL`
- Cambio: `pruebas.html` rediseñada mobile-first y desktop.
- Interfaz: hero claro, CTA visible sin scroll, formulario en 3 pasos, botones táctiles, resumen lateral en PC, CTA flotante en móvil y FAQ.
- Conversión: navegación reducida y una sola acción principal.
- Referidos: soporte de `?ref=CODIGO` y `?src=CANAL`; el código se incorpora al pedido enviado por WhatsApp y no se persiste en el repositorio.
- SEO de laboratorio: `noindex,nofollow,noarchive`.
- Estrategia recomendada: empezar con referidos/contactos de confianza, validar el ciclo completo y después escalar a difusión orgánica. No pagar tráfico todavía.
- Fundamentación externa: buenas prácticas actuales recomiendan CTA visible, experiencia móvil intencional, formularios cortos y landing específica para quien llega referido.
- Siguiente prueba: compartir enlaces con códigos simples, por ejemplo `pruebas.html?ref=MIGUEL01&src=whatsapp`, y observar si completan los 3 pasos.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Respuesta: estrategia recomendada de lanzamiento
La interfaz de `pruebas.html` ya quedó responsive para móvil y PC, con CTA visible, formulario en 3 pasos, resumen del pedido, FAQ y soporte de códigos de referido mediante `?ref=` y `?src=`.

Estrategia recomendada:
1. `REFERRAL_FIRST`: compartir primero con familiares, conocidos y negocios cercanos.
2. Crear un código simple por persona/canal, por ejemplo `?ref=JUAN01&src=whatsapp`.
3. No pagar incentivos todavía; la primera prueba gratuita ya funciona como incentivo para probar.
4. Buscar entre 5 y 10 pedidos completos y observar: comprensión, abandono, dudas, calidad de archivos, tiempo operativo y respuesta a la entrega.
5. Después, con permiso, usar resultados reales como prueba social y pedir a quienes quedaron satisfechos que compartan su enlace.
6. Escalar a difusión orgánica más amplia solo después de estabilizar el flujo.
7. Considerar tráfico pagado únicamente cuando el registro privado de leads, capacidad de producción y conversión estén medidos.

Motivo de usar referidos primero: el servicio depende de confianza y todavía incluye producción/revisión manual, por lo que conviene recibir tráfico con intención más alta y volumen controlado.

Enlace de prueba:
`https://miguelangelruizfull-ai.github.io/pruebas.html`

Ejemplo de referido:
`https://miguelangelruizfull-ai.github.io/pruebas.html?ref=JUAN01&src=whatsapp`

Siguiente acción: realizar pruebas reales con códigos distintos y registrar qué fricciones aparecen.


## 2026-10-04 — Inicio de validación por referidos
- Fase: `REFERRAL_FIRST_VALIDATION`
- Acción: creado/actualizado `docs/PLAN_REFERIDOS_V1.md`.
- Meta: 5–10 pedidos reales completos.
- Regla: códigos de referido sin PII.
- Validación: observar comprensión, finalización del formulario, adjuntos, calidad del pedido y reacción a la entrega.
- Siguiente acción: compartir enlaces de prueba con códigos distintos y registrar fricciones.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Respuesta registrada
Se confirmó continuar con la estrategia de referidos. Se creó `docs/PLAN_REFERIDOS_V1.md` y se enlazó desde el ROOT.

Estado:
- fase activa: `REFERRAL_FIRST_VALIDATION`;
- meta: 5–10 pedidos reales completos;
- usar códigos `?ref=` sin PII;
- observar comprensión, abandono, adjuntos, calidad del pedido y reacción a la entrega;
- no escalar a publicidad pagada todavía;
- siguiente acción: compartir los primeros enlaces codificados y registrar fricciones.

Comando de continuidad: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Primer paso operativo de validación
- Fase: `REFERRAL_FIRST_VALIDATION`
- Instrucción al usuario: comenzar con una sola persona conocida que tenga un producto o servicio real.
- Acción recomendada: enviar un enlace con código simple `?ref=PRUEBA01&src=whatsapp`.
- Objetivo de la primera prueba: comprobar si la persona entiende la propuesta, completa los 3 pasos, abre WhatsApp y adjunta las fotos sin asistencia excesiva.
- Regla: no explicar de más antes de que pruebe; observar dónde pregunta o se detiene.
- Después de recibir el pedido: producir la primera propuesta y anotar fricciones antes de invitar al siguiente referido.
- Siguiente acción: ejecutar `PRUEBA01`.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Guía exacta para iniciar PRUEBA01
1. Elegir una sola persona conocida con un producto/servicio real y al menos una foto disponible.
2. Enviar enlace: `https://miguelangelruizfull-ai.github.io/pruebas.html?ref=PRUEBA01&src=whatsapp`.
3. Presentarlo como ayuda para probar, no como venta.
4. No explicar el formulario paso a paso salvo que la persona se bloquee; las dudas son evidencia de fricción.
5. Cuando llegue el WhatsApp, comprobar que incluya PEDIDO-ID, datos suficientes y que la persona adjunte las fotos.
6. Producir la propuesta y entregarla.
7. Después preguntar únicamente: "¿Qué parte te costó o no entendiste?" y "¿Lo volverías a usar o recomendarías?".
8. Registrar lo observado antes de pasar a PRUEBA02.
Estado: listo para ejecutar `PRUEBA01`.


## 2026-10-04 — Procedimiento al recibir un pedido por WhatsApp
- Fase: `REFERRAL_FIRST_VALIDATION`
- Se creó `docs/SOP_PEDIDO_RECIBIDO_WHATSAPP_V1.md`.
- Flujo: identificar pedido -> verificar fotos/logo -> validar datos -> llevar a IA -> producir -> revisar -> entregar -> pedir feedback -> seguimiento.
- Regla: no inventar datos y no guardar PII en repositorio público.
- Estados clave: `PEDIDO_RECIBIDO_PENDIENTE_DE_ARCHIVOS -> ARCHIVOS_COMPLETOS -> EN_PRODUCCION -> MUESTRA_ENVIADA -> SEGUIMIENTO`.
- Siguiente acción: ejecutar este SOP cuando llegue `PRUEBA01`.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Confirmación de actualización
- El procedimiento para pedidos recibidos por WhatsApp ya estaba guardado en `docs/SOP_PEDIDO_RECIBIDO_WHATSAPP_V1.md`.
- También estaba registrado en `docs/SEGUIMIENTO_PROYECTO.md`.
- Esta respuesta confirma que el repo adecuado ya contiene la continuidad necesaria.
- Regla vigente: cada respuesta del proyecto debe dejar registro sanitizado en el repo.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — PRUEBA01 revisada en video
- Pedido: `PRB-20261004-1416-3KY8`.
- Evidencia revisada: grabación vertical de aproximadamente 4:16 min.
- Flujo observado: landing -> paso 1 -> paso 2 -> Google Maps -> regreso a landing -> paso 3 -> selección de imagen -> consentimiento -> abrir WhatsApp -> mensaje precargado.
- Resultado positivo: el formulario conserva el flujo, el usuario completa los tres pasos y el pedido llega estructurado por WhatsApp.
- Hallazgo crítico confirmado: el archivo `84800.jpg` aparece seleccionado dentro de la página, pero **no se transfiere al abrir WhatsApp**; solo llega el texto del pedido.
- Implicación: la selección de archivo del navegador no equivale a adjuntarlo en WhatsApp mediante `wa.me`.
- Hallazgo UX: el mensaje es largo y WhatsApp lo colapsa con "Leer más", aunque PEDIDO-ID, referido, origen y datos principales permanecen visibles.
- Hallazgo positivo: salir a Google Maps y regresar no destruyó los datos ya capturados durante esta prueba.
- Recomendación prioritaria: reforzar el paso final con una instrucción explícita e imposible de pasar por alto: "Cuando se abra WhatsApp, adjunta aquí la foto seleccionada antes de enviar".
- Estado del pedido tras recibir posteriormente la imagen: `ARCHIVOS_COMPLETOS`.
- Siguiente acción recomendada: ajustar UX del paso 3 antes de PRUEBA02.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Interfaz mejorada autorizada después de PRUEBA01
- Fase: `PRUEBA02_UX_LISTA`.
- Cambio principal: el paso 3 ahora muestra miniaturas de las fotos seleccionadas y una advertencia explícita sobre la limitación de `wa.me`.
- Handoff final: modal antes de salir de la página con instrucciones de verificación.
- Mejora móvil: si el navegador soporta compartir archivos, aparece `Compartir fotos + pedido`; el usuario debe elegir WhatsApp y la conversación correcta.
- Fallback garantizado: `Abrir WhatsApp con el pedido` mantiene el texto precargado y obliga visualmente a recordar el adjunto manual.
- Respaldo: botón para copiar el pedido.
- Mensaje: reducido para mantener producto, negocio, pieza, datos clave, archivos y regla de no inventar.
- Privacidad: no se agregó almacenamiento de fotos ni PII en el repo público.
- Siguiente acción: ejecutar `PRUEBA02` desde un móvil y comprobar si el archivo llega por la ruta nativa; si no, validar que el aviso evita enviar el pedido sin foto.
- Reanudación: `REANUDAR_PEDIDOS_DESDE_ROOT`.


## 2026-10-04 — Respuesta registrada: interfaz recomendada para PRUEBA02
La interfaz mejorada ya está aplicada en `pruebas.html`.

Recomendación:
- mantener 3 pasos;
- hacer que el paso 3 sea visual y verificable;
- mostrar miniaturas de las fotos seleccionadas;
- advertir claramente que seleccionar una foto no significa que WhatsApp ya la tenga;
- mostrar una pantalla final antes de salir;
- ofrecer `Compartir fotos + pedido` solo cuando el móvil/navegador soporte archivos compartidos;
- mantener `Abrir WhatsApp con el pedido` como fallback;
- incluir `Copiar texto del pedido` como respaldo;
- acortar el mensaje para reducir "Leer más";
- validar siempre que el adjunto real aparezca en WhatsApp antes de enviar.

Siguiente prueba: `PRUEBA02` en móvil real.
Enlace: `https://miguelangelruizfull-ai.github.io/pruebas.html?ref=PRUEBA02&src=whatsapp`.
