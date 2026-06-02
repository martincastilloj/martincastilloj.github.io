# Martin Castillo Web

Sitio personal profesional de Martin Castillo Jimenez, orientado a presentar
perfil academico, experiencia, investigacion aplicada, escritos, iniciativas
universitarias y canales de contacto.

Sitio publicado:
https://martincastilloj.github.io/

## Estructura

- `index.html`: pagina principal.
- `escritos/`: paginas individuales de columnas, articulos y publicaciones.
- `assets/css/styles.css`: estilos principales del sitio.
- `assets/css/article.css`: estilos para paginas de escritos.
- `assets/js/main.js`: interacciones de navegacion y revelado en scroll.
- `assets/img/`: imagenes del sitio, favicon y vista previa social.
- `assets/docs/`: carpeta para CV u otros documentos descargables.
- `plantillas/`: plantilla y guia para futuras publicaciones.
- `robots.txt`: permisos de indexacion para buscadores.
- `sitemap.xml`: mapa de URLs publicas del sitio.
- `site.webmanifest`: metadata para navegador movil e instalacion basica.
- `404.html`: pagina personalizada para enlaces rotos o rutas inexistentes.
- `SEARCH-CONSOLE-Y-COMPARTIR.md`: guia para Google Search Console y pruebas de
  vista previa social.

## Contenido actual

- Perfil profesional y areas de trabajo.
- Experiencia en investigacion aplicada, docencia universitaria y CEAPS.
- Pagina propia para la columna "Esta muriendo la Universidad?".
- CV descargable en PDF y version editable en Word.
- Enlaces de contacto: correo, LinkedIn y CEAPS.
- Metadata social para compartir el sitio en LinkedIn, WhatsApp y otras
  plataformas.
- Datos estructurados `JSON-LD` para buscadores: perfil personal, sitio web y
  articulo publicado.
- Pagina 404 personalizada para GitHub Pages.
- Mejoras de accesibilidad: enlace para saltar al contenido principal, foco
  visible, navegacion principal etiquetada y menu movil con atributos ARIA.
- Refinamiento visual: bajadas introductorias por seccion, estados de hover
  mas consistentes y uso del mapa como recurso visual en escritos.
- Imagen editorial especifica para la columna "Esta muriendo la Universidad?",
  con fondo propio en la pagina del articulo y vista previa social dedicada.
- Optimizacion liviana de carga: versiones JPG comprimidas para imagenes de
  articulo, mapa principal y foto del hero optimizados, con precarga de imagenes
  principales.
- Optimizacion mobile: hero compacto con foto visible, textos ajustados para
  pantallas pequenas, tarjeta destacada con imagen y lectura de articulo
  mejorada en celular.
- Plantilla base para crear futuras publicaciones con metadata SEO, Open Graph,
  Twitter Card y datos estructurados.
- Manifest, color de tema y metadata social reforzada para navegadores moviles
  y plataformas de vista previa.

## Como actualizar

1. Editar los archivos locales dentro de esta carpeta.
2. Probar los cambios en el navegador.
3. Subir a GitHub solo los archivos modificados.
4. Si se agrega una nueva pagina, incorporarla tambien en `sitemap.xml`.
5. Para nuevas publicaciones, partir desde
   `plantillas/plantilla-publicacion.html`.
6. Para indexacion y prueba de links compartidos, seguir
   `SEARCH-CONSOLE-Y-COMPARTIR.md`.

## Como editar contenido manualmente

- La mayor parte del texto visible del sitio esta en `index.html`.
- Los textos largos de columnas o articulos estan dentro de la carpeta
  `escritos/`.
- Para cambiar un parrafo, buscar una frase exacta dentro del archivo,
  reemplazar el texto entre las etiquetas HTML y guardar.
- Para cambiar estilos visuales como tamano de letra, color, espaciado o
  posicion de imagenes, editar `assets/css/styles.css` o
  `assets/css/article.css`.
- Despues de guardar, abrir `index.html` en el navegador para revisar el cambio
  antes de subirlo a GitHub.

## Direccion editorial

La pagina esta pensada como un sitio personal profesional, no solo como un CV.
Debe reunir perfil, experiencia, escritos, iniciativas como CEAPS, intereses
academicos y canales de contacto. Ver `content-plan.md`.

Los datos reales recopilados para completar el contenido estan en
`content-data.md`.

## Proximos pasos

- Completar nuevas paginas para papers, ensayos o columnas futuras.
- Registrar el sitio en Google Search Console.
- Validar la vista previa social despues de subir los ultimos cambios.
- Revisar el CV al final, como documento descargable y como contenido resumido
  dentro de la pagina.
