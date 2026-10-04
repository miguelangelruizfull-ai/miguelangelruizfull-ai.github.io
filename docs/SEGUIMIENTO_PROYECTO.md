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
