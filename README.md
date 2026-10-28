# HydroPool Piscinas — Redes sociales e instalación PWA

## Actualización
Facebook: https://www.facebook.com/profile.php?id=61572389510693&rdid=fD5mUqGEVRHap3tf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19wT19sP7Z%2F#
Instagram: https://www.instagram.com/hydropoolpiscinas1
TikTok: https://www.tiktok.com/@hydropool.piscinas.peru

## Publicación en GitHub Pages
**Importante:** subir todos los archivos del ZIP descomprimido manteniendo la estructura, a la raíz de la rama publicada (normalmente main). No subir el ZIP sin extraerlo.
- index.html
- manifest.webmanifest
- sw.js
- styles.css
- script.js
- carpeta assets (incluidos icon-192.png, icon-512.png, vista-previa-whatsapp.jpg)

GitHub > Settings > Pages > Build and deployment > Deploy from a branch, `main` / `(root)`.
URL pública: https://nexvora-ux.github.io/hydropoolpiscinas/

## Instalar en móvil
Android Chrome: abrir URL en Chrome (no en navegador interno de WhatsApp), menú ⋮ > «Instalar aplicación» o «Añadir a pantalla principal». Si hay botón «Instalar ahora» en el cuadro de instrucciones de la PWA, usarlo.
iPhone Safari: abrir URL en Safari > Compartir > «Añadir a pantalla de inicio» > Añadir. Algunos iOS muestran «Abrir como app web».

Si no instala: comprobar que /manifest.webmanifest, /sw.js y /assets/icon-192.png abren directamente desde la URL pública, recargar, borrar caché de sitio y revisar mensaje del botón Cómo instalar. Si ya estaba instalada, desinstalar la anterior e instalarla otra vez.

La validación remota de GitHub Pages no fue posible desde esta sesión, así que la causa exacta en el celular debe comprobarse tras publicar los archivos.

## Vista previa al compartir por WhatsApp
La imagen pública de la vista previa es `assets/hydropool-compartir-v2.jpg` y está declarada con Open Graph en `index.html`. Subir todos los archivos y carpetas en la raíz del repositorio. Es necesario esperar a que GitHub Pages publique y WhatsApp refresque su caché. El enlace a compartir es https://nexvora-ux.github.io/hydropoolpiscinas/ .
