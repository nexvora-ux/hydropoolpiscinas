# Corrección de instalación HydroPool

## Causa detectada
El manifiesto de la aplicación declara los iconos `assets/icon-192.png` y `assets/icon-512.png`, pero esos dos archivos no existen actualmente en el repositorio. El navegador no puede cargar los iconos declarados, lo que puede impedir que ofrezca la instalación correctamente.

## Archivos incluidos
- `manifest.webmanifest`: manifiesto corregido, con iconos PNG de 192×192 y 512×512.
- `sw.js`: caché versionada `hydropool-v6-20261028`, que incorpora los iconos y fuerza la renovación de la caché anterior.
- `assets/icon-192.png`: icono estándar con la H azul enviada.
- `assets/icon-512.png`: icono estándar con la H azul enviada.
- `assets/icon-maskable-512.png`: versión con margen seguro para lanzadores Android.

## Cómo aplicar el arreglo
1. Descomprime este ZIP.
2. En el repositorio `nexvora-ux/hydropoolpiscinas`, reemplaza `manifest.webmanifest` y `sw.js` por los incluidos aquí.
3. Sube los tres PNG a la carpeta `assets/` que ya usa el `index.html` publicado. Si no existe, créala.
4. En GitHub Pages espera a que termine la publicación.
5. En Android/Chrome abre la web, toca el menú ⋮ y selecciona **Instalar aplicación** o **Añadir a pantalla de inicio**.
6. Si sigue sin aparecer, borra los datos/caché del sitio o desinstala la versión anterior, cierra Chrome y vuelve a abrir la URL.

## Importante
El `index.html` actual ya enlaza el manifiesto y `assets/icon-192.png`. El arreglo debe subirse al mismo repositorio y a la carpeta correcta para que los enlaces funcionen. En iPhone, la instalación normalmente se hace desde Safari → Compartir → Añadir a pantalla de inicio; iOS no siempre muestra el mismo aviso automático que Android.
