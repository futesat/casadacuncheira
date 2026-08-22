# 🏡 Casa da Cuncheira

[![Deploy to GitHub Pages](https://github.com/futesat/casadacuncheira/actions/workflows/deploy.yml/badge.svg)](https://github.com/futesat/casadacuncheira/actions/workflows/deploy.yml)

**Casa da Cuncheira** es un sitio web de alquiler vacacional diseñado para evocar tranquilidad, conexión con la naturaleza y exclusividad. Ubicado en la espectacular Costa da Morte, Galicia, este proyecto ofrece una experiencia visual sofisticada y moderna.

🚀 **Ver en vivo:** [https://casadacuncheira.github.io/](https://casadacuncheira.github.io/)

---

## ✨ Características Principales

- 🌍 **Soporte Multilingüe:** Disponible en 7 idiomas (Español, Gallego, Inglés, Francés, Alemán, Italiano y Portugués) con traducciones completas en todas las secciones.
- 🎨 **Diseño Moderno ** UI elegante basada en componentes personalizados, con un enfoque en la fotografía de alta calidad y la tipografía moderna.
- 🎭 **Animaciones Fluidas:** Experiencia de usuario dinámica utilizando `Framer Motion` para transiciones y micro-interacciones suaves.
- 🗺️ **Mapa Satelital Interactivo:** Ubicación precisa integrada con Google Maps en modo satélite para apreciar el entorno natural.
- 📱 **Totalmente Responsivo:** Adaptado para una navegación perfecta en dispositivos móviles, tablets y escritorio.
- ⚡ **Compilación Ultra-rápida:** Desarrollado con Vite y optimizado para un rendimiento máximo.

---

## 🛠️ Stack Tecnológico

- **Framework:** [React](https://reactjs.org/) (Vite)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Componentes UI:** Componentes personalizados y optimizados.
- **Despliegue:** [GitHub Actions](https://github.com/features/actions) & [GitHub Pages](https://pages.github.com/)

---

## 🚀 Instalación y Desarrollo Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/futesat/casadacuncheira.github.io.git
   cd casadacuncheira.github.io
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:5173`.

4. **Compilar para producción y prerender:**
   ```bash
   npm run build
   ```

5. **Barrera de Calidad Automatizada (Testing):**
   ```bash
   # Typecheck TypeScript (cero errores)
   npm run typecheck

   # Verificación de paridad en 7 diccionarios de idiomas
   npm run test:i18n

   # Ejecutar suite completa Playwright E2E contra el build real
   npm run test:e2e

   # Ejecutar suite rápida en Chromium
   npm run test:e2e:chromium

   # Modo interactivo UI
   npm run test:e2e:ui
   ```

---

## 🛡️ Pipeline CI/CD y Quality Gate

El flujo de despliegue en GitHub Actions implementa el principio de **artefacto inmutable**:

```text
[INSTALL] ➔ [TYPECHECK & i18n PARITY] ➔ [BUILD & PRERENDER] ➔ [UPLOAD ARTIFACT]
                                                                     │
                                                                     ▼
                                                          [DOWNLOAD ARTIFACT]
                                                                     │
                                                                     ▼
                                                          [PLAYWRIGHT MULTI-BROWSER]
                                                          (Chromium, Firefox, WebKit, Mobile Safari)
                                                                     │
                                                                     ▼
                                                          [PRODUCTION QUALITY GATE]
                                                                     │
                                                                     ▼
                                                          [DEPLOY TO GITHUB PAGES]
```

Cualquier fallo en typecheck, paridad de traducciones, accesibilidad WCAG 2.1 AA, navegación, SEO, cookies o responsive bloquea el despliegue a producción de forma estricta.

---

## 📂 Estructura del Proyecto

```text
src/
├── app/
│   ├── components/    # Componentes de la página (Hero, House, Plans, etc.)
│   ├── contexts/      # Contexto de lenguaje y traducciones
│   └── ui/            # Componentes base reutilizables
├── assets/            # Estilos globales y fuentes
└── public/
    └── images/        # Galería de imágenes local
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles.

---

*Hecho con ❤️ para Casa da Cuncheira.*