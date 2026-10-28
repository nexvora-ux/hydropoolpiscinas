# HydroPool – aplicación móvil PWA

Aplicación web instalable para Android y iOS, diseñada para pantallas móviles. No requiere npm ni compilación.

## Publicación en el repositorio
1. Descomprime el ZIP y sube **todo el contenido de esta carpeta** a la raíz de `nexvora-ux/hydropoolpiscinas` en la rama `main`, incluyendo `.github/workflows/pages.yml`.
2. En GitHub, abre **Settings > Pages > Build and deployment > Source** y selecciona **GitHub Actions**.
3. Al completar el despliegue, abre `https://nexvora-ux.github.io/hydropoolpiscinas/` desde el celular.
4. El botón de QR muestra un código que apunta a esta URL de GitHub Pages.

## Personalización
- Enlaces principales y botones: `index.html`.
- URL de compartir: `APP_URL` en `script.js`. Si publicas en otro dominio, cambia la URL allí y regenera `assets/qr-instalacion.png`.
- Foto y logo: `assets/piscina.jpg`, `assets/logo.png`.
- PWA: `manifest.webmanifest`, `sw.js`.

## Observaciones
- El teléfono y el correo se tomaron del sitio web público de HydroPool. Verificar antes de difundir.
- Los iconos Facebook/Instagram/TikTok apuntan a las páginas generales de cada red hasta contar con las URLs oficiales de HydroPool.
- El sitio externo de Productos sigue exactamente el enlace solicitado, aunque no sea la página específica de tienda.
- El prompt de instalación está sujeto a la compatibilidad del navegador; en iPhone, usar Safari > Compartir > Añadir a pantalla de inicio.
- El diseño se centra en móviles; en escritorio se muestra una maqueta de ancho de celular.

## Vista previa al compartir en WhatsApp
- `assets/vista-previa-whatsapp.jpg` (1200 × 630) muestra el logo sobre fondo blanco, como la referencia.
- `index.html` incluye metadatos **Open Graph** (`og:image`, `og:title`, `og:description`) con direcciones absolutas para que WhatsApp, Facebook y otras plataformas extraigan el logo al compartir.
- La imagen superior `assets/piscina.jpg` se muestra **completa** y mantiene las ondas del archivo original, sin filtros ni ondas adicionales.
- Después de publicar en GitHub Pages, prueba el enlace en WhatsApp. Si persiste la vista previa antigua, puede ser una caché de WhatsApp. Publicar primero es necesario para que las redes puedan leer la imagen.
