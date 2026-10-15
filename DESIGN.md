---
name: "TrustUpReviews™"
description: "Atmósfera cinemática nocturna de alta conversión para reputación y prueba social"
colors:
  primary: "#00b67a"
  accent-lime: "#bcff48"
  accent-coral: "#ff5a42"
  accent-tripadvisor: "#00aa6c"
  accent-facebook: "#1877f2"
  surface-dark: "#0a0a0a"
  surface-card: "#141414"
  text-primary: "#ffffff"
  text-secondary: "#f7f7f2"
  border-subtle: "rgba(255, 255, 255, 0.1)"
typography:
  display:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Instrument Sans, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Outfit, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.05em"
  serif:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  card-base:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.xl}"
    padding: "24px"
---

# Design System: TrustUpReviews™

## Overview

**Creative North Star: "The Neon Citadel of Social Proof"**

TrustUpReviews™ proyecta solvencia inquebrantable a través de una estética nocturna inspirada en terminales financieras de alta gama y experiencias cinemáticas inmersivas. La interfaz no apela al minimalismo pasivo; utiliza contrastes dramáticos, vídeo volumétrico de fondo y micro-interacciones de alta fidelidad para generar una sensación tangible de valor y protección reputacional.

La densidad es amplia y espaciada, permitiendo que las métricas de prueba social (estrellas, números de ventas, valoraciones verificadas) actúen como focos de luz sobre lienzos de negro absoluto.

**Key Characteristics:**
- Fondo negro profundo con capas tonales sutiles y gradientes oscuros envolventes.
- Acentos cromáticos semánticos vinculados a cada plataforma evaluadora.
- Animaciones sincronizadas y elementos visuales interactivos (mockup de smartphone con Isla Dinámica).
- Tipografía moderna de peso contundente complementada con detalles editoriales refinados.

## Colors

La paleta se estructura sobre un lienzo negro absoluto con acentos semánticos saturados y de alto impacto que identifican de forma instantánea el ecosistema de cada plataforma.

### Primary
- **Trust Emerald** (`#00b67a`): Color principal de marca y confianza, derivado del estándar de excelencia de Trustpilot.

### Secondary
- **Vibrant Lime** (`#bcff48`): Acento de alta visibilidad para badges, llamadas de atención secundaria y contrastes en texto de impacto.
- **Google Coral** (`#ff5a42`): Color de advertencia constructiva, valoraciones de Google Maps y métricas de SEO local.
- **TripAdvisor Teal** (`#00aa6c`): Acento especializado para el sector gastronómico, hostelero y de viajes.
- **Meta Blue** (`#1877f2`): Identificador oficial para recomendaciones y campañas de interacción en Facebook.

### Neutral
- **Deep Void** (`#000000` / `#0a0a0a`): Fondo base principal que maximiza el contraste.
- **Card Charcoal** (`#141414` / `#18181b`): Superficies de elevación y contenedores de planes.
- **Ghost White** (`#ffffff` / `#f7f7f2`): Tipografía principal y secundaria con máxima legibilidad.
- **Glass Frost** (`rgba(255, 255, 255, 0.1)`): Bordes y divisores translúcidos.

### Named Rules
**The Platform Anchor Rule.** Cada tarjeta o sección dedicada a una plataforma debe adoptar su acento semántico en borde, resplandor y badges para crear reconocimiento instantáneo sin mezclar identidades de marca.

## Typography

**Display & Headline Font:** Instrument Sans (con fallback sans-serif)  
**Body Font:** Outfit (con fallback system-ui, sans-serif)  
**Editorial Serif Accent:** Playfair Display (para titulares selectos y cifras)  
**Navigation & Labels:** Manrope (sans-serif de gran legibilidad geométrica)

**Character:** Tensión equilibrada entre la precisión técnica contemporánea de sans-serifs geométricas y la elegancia clásica de los acentos editoriales con serifas.

### Hierarchy
- **Display** (700, clamp(2.5rem, 6vw, 5rem), 1.1): Titulares principales del Hero con sombra nítida para garantizar legibilidad sobre fondos de vídeo.
- **Headline** (700, clamp(1.75rem, 3.5vw, 2.5rem), 1.2): Encabezados de sección y títulos de catálogo.
- **Title** (600, 1.25rem - 1.5rem, 1.3): Nombres de paquetes, tarjetas de métricas y preguntas FAQ.
- **Body** (400, 1rem, 1.6): Descripciones de servicios y listas de características (máx. 65-75ch).
- **Label** (600, 0.75rem - 0.875rem, tracking 0.05em, uppercase opcional): Badges de estado, precios tachados y categorías.

## Layout

- **Sistema espacial:** Contenedores fluidos con márgenes responsivos clamp (`clamp(28px, 5vw, 72px)`).
- **Rejilla responsiva:** De una columna centrada en móviles (≤760px) a cuadrículas de 2, 3 o 4 columnas en escritorios grandes.
- **Espaciado rítmico:** Escala base modular de 8px (8, 16, 24, 32, 48, 64px) para mantener coherencia en márgenes y paddings internos.

## Elevation & Depth

El sistema combina capas tonales oscuras sobre fondo negro con resplandores translúcidos (*backdrops*) y bordes de cristal ahumado.

### Shadow Vocabulary
- **Card Ambient** (`0 20px 40px rgba(0, 0, 0, 0.6)`): Sombra base profunda para tarjetas flotantes y modales.
- **Accent Glow** (`0 0 20px rgba(0, 182, 122, 0.45)`): Resplandor perimetral utilizado en elementos activos como la Isla Dinámica y botones de conversión.
- **Text Relief** (`0 1px 2px rgba(0, 0, 0, 0.85), 0 2px 4px rgba(0, 0, 0, 0.4)`): Sombra tipográfica nítida para legibilidad sobre medios dinámicos.

### Named Rules
**The Kinetic Elevation Rule.** Las tarjetas y elementos interactivos en reposo reposan sobre bordes tenues; al recibir hover o foco activo, ascienden físicamente (`translateY(-9px)`) y refuerzan su borde con el acento correspondiente.

## Shapes

- **Contornos y radios:** Bordes redondeados generosos (`12px` a `16px`) en tarjetas y contenedores de catálogo; píldoras completas (`rounded-full`) para botones primarios y badges de certificación.
- **Bordes:** Filetes finos de 1px translúcidos (`border border-white/10` o `border-accent/30`) que delimitan superficies sin generar saturación visual.

## Components

### Buttons
- **Primary:** Píldora redondeada (`rounded-full`), relleno en color de acento (`#00b67a`), tipografía en peso 600, padding amplio (`14px 28px`), con elevación y resplandor al hover.
- **Secondary / Ghost:** Fondo translúcido oscuro (`bg-white/10` o `bg-black/40`), borde fino `border-white/20`, texto blanco neutro.

### Cards / Containers
- **Estructura:** Radio de curvatura `12px` - `16px`, fondo degradado sutil (`from-[#111910] via-[#162713] to-[#141414]`), borde tenue temático y padding interno de `24px` a `32px`.
- **Interacción:** Elevación con transición de 350ms (`portfolio-card-elevate`).

### Badges / Chips
- **Formato:** Píldora compacta (`rounded-full`), tamaño de texto `10px` a `12px`, fondo al 20% de opacidad y borde al 35% del color semántico.

### Navigation
- Barra superior flotante con desenfoque de fondo (*backdrop blur*), links en sans-serif con transición de color y botón CTA destacado en el extremo derecho.

## Do's and Don'ts

### Do:
- **Do** emplear el color de acento de la plataforma correspondiente (Google, Trustpilot, TripAdvisor, Facebook) en sus respectivas tarjetas y componentes.
- **Do** acompañar cifras de métricas con etiquetas semánticas claras y estrellas visuales bien contrastadas.
- **Do** preservar sombras tipográficas de protección cuando el texto se superponga a imágenes o vídeos.
- **Do** respetar la regla de movimiento reducido (`prefers-reduced-motion`) desactivando animaciones continuas.

### Don't:
- **Don't** mezclar acentos de marcas distintas en un mismo bloque de producto o tarjeta de precio.
- **Don't** utilizar blancos planos al 100% en fondos o cajas de contenido; rompería la estética nocturna premium.
- **Don't** colocar textos informativos largos sin un ancho máximo de lectura delimitado (65ch a 75ch).
- **Don't** omitir estados de interacción (hover, focus-visible) en botones, enlaces o tarjetas de precios.
