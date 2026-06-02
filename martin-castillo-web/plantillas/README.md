# Plantillas de publicaciones

Esta carpeta guarda una plantilla base para crear nuevas columnas, papers,
ensayos o notas de investigacion con el mismo diseno del sitio.

## Flujo recomendado

1. Duplicar `plantilla-publicacion.html`.
2. Mover la copia a `../escritos/`.
3. Cambiar el nombre del archivo por un slug claro, por ejemplo:
   `mi-nuevo-articulo.html`.
4. Reemplazar todos los campos entre corchetes.
5. Cambiar `<meta name="robots" content="noindex, nofollow">` por
   `<meta name="robots" content="index, follow">` solo cuando el texto este
   listo para publicarse.
6. Agregar una tarjeta del nuevo texto en la seccion de escritos de
   `../index.html`.
7. Agregar la URL nueva en `../sitemap.xml`.
8. Abrir el HTML en el navegador y revisar titulo, imagen, parrafos, enlaces y
   vista mobile antes de subirlo a GitHub.

## Campos que siempre conviene revisar

- `title`
- `description`
- `canonical`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `datePublished`
- `dateModified`
- `keywords`
- titulo visible, bajada, fecha, categoria y cuerpo del texto

## Imagenes

Para que LinkedIn, WhatsApp y otras plataformas muestren una buena vista previa,
usa una imagen social de 1200 x 630 px. Guardala en `../assets/img/` y apunta
los metadatos `og:image` y `twitter:image` a la URL absoluta publicada.

Si la publicacion necesita un banner distinto dentro de la pagina, guarda otra
imagen en `../assets/img/` y actualiza dos lugares en la plantilla:

- El `preload` del archivo nuevo.
- El bloque `<style>` que redefine `.article-map`.

## Checklist antes de publicar

- El texto esta terminado y corregido.
- No quedan placeholders entre corchetes.
- El archivo esta dentro de `escritos/`.
- La metadata social usa URLs absolutas con `https://martincastilloj.github.io/`.
- La pagina aparece enlazada desde `index.html`.
- La URL fue agregada a `sitemap.xml`.
- La pagina abre bien en computador y celular.
