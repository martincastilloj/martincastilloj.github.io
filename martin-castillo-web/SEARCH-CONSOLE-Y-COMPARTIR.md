# Google Search Console y pruebas de compartir

Esta guia sirve para registrar el sitio en Google Search Console, enviar el
sitemap y revisar como se vera el link cuando lo compartas.

## 1. Registrar el sitio en Search Console

1. Entra a `https://search.google.com/search-console`.
2. Elige `Anadir propiedad`.
3. Usa la opcion `Prefijo de URL`.
4. Escribe exactamente:
   `https://martincastilloj.github.io/`
5. Usa un metodo de verificacion.

Metodo recomendado para este sitio:

- Descargar el archivo HTML que entrega Google, normalmente con un nombre como
  `googleXXXXXXXXXXXX.html`.
- Poner ese archivo en la raiz del proyecto, al lado de `index.html`.
- Subirlo a GitHub.
- Verificar que abra en una URL como:
  `https://martincastilloj.github.io/googleXXXXXXXXXXXX.html`
- Volver a Search Console y presionar `Verificar`.

Metodo alternativo:

- Elegir la verificacion por etiqueta HTML.
- Copiar el meta tag que entrega Google.
- Pegar ese meta tag dentro del `<head>` de `index.html`.
- Subir el cambio a GitHub y verificar.

Nota: no borres el archivo o meta tag despues de verificar. Google puede volver
a revisar la propiedad mas adelante.

## 2. Enviar el sitemap

Cuando la propiedad este verificada:

1. Entra al panel de tu sitio en Search Console.
2. Abre `Sitemaps`.
3. En el campo de nuevo sitemap, escribe:
   `sitemap.xml`
4. Envia el sitemap.

La URL completa del sitemap es:
`https://martincastilloj.github.io/sitemap.xml`

## 3. Pedir indexacion de URLs importantes

Despues de subir cambios relevantes:

1. Usa la herramienta de inspeccion de URLs de Search Console.
2. Prueba primero:
   `https://martincastilloj.github.io/`
3. Luego prueba:
   `https://martincastilloj.github.io/escritos/esta-muriendo-la-universidad.html`
4. Si Google dice que la URL no esta indexada, presiona `Solicitar indexacion`.

La indexacion no es inmediata. Puede tardar dias y Google no garantiza que todas
las paginas aparezcan al instante, pero este flujo deja el sitio presentado de
forma correcta.

## 4. Probar como se vera al compartir

URLs que conviene probar:

- `https://martincastilloj.github.io/`
- `https://martincastilloj.github.io/escritos/esta-muriendo-la-universidad.html`

Herramientas y pruebas:

- LinkedIn: usar `https://www.linkedin.com/post-inspector/`.
- WhatsApp: pegar el link en un chat propio o en WhatsApp Web y esperar que se
  genere la tarjeta de vista previa.
- Open Graph general: opcionalmente usar el depurador de Meta en
  `https://developers.facebook.com/tools/debug/`.

Vista esperada de la home:

- Titulo: `Martín Castillo — Economía, Políticas Públicas & Relaciones Internacionales`
- Descripcion: `Economía política, políticas públicas, relaciones internacionales, investigación aplicada, docencia universitaria y escritos de Martín Castillo.`
- Imagen: `assets/img/social-preview.png`

Vista esperada de la columna:

- Titulo: `¿Está muriendo la Universidad?`
- Descripcion: `Una reflexión sobre tecnología, sobreabundancia de información y desinterés en la sala de clases universitaria.`
- Imagen: `assets/img/social-preview-universidad.jpg`

## 5. Si la vista previa aparece antigua

LinkedIn y WhatsApp pueden guardar cache de los enlaces. Si una vista previa no
se actualiza:

1. Confirma que el cambio ya este publicado en GitHub Pages.
2. Vuelve a probar en LinkedIn Post Inspector.
3. Espera unos minutos y prueba otra vez.
4. Si la imagen sigue antigua, cambia el nombre del archivo de imagen social y
   actualiza `og:image` y `twitter:image`.

La metadata principal ya esta creada en `index.html` y en la pagina del articulo.
Este documento queda como rutina de verificacion cada vez que publiques algo
nuevo.

## Referencias utiles

- Google Search Console: `https://search.google.com/search-console`
- Verificar propiedad en Search Console:
  `https://support.google.com/webmasters/answer/9008080`
- Enviar sitemap a Google:
  `https://support.google.com/webmasters/answer/7451001`
- Inspeccion de URLs:
  `https://support.google.com/webmasters/answer/9012289`
- LinkedIn Post Inspector: `https://www.linkedin.com/post-inspector/`
- Depurador de Open Graph de Meta:
  `https://developers.facebook.com/tools/debug/`
