Coloca aquí los activos locales de la web (logo y fotos de secciones):

- Logo: `public/assets/logoNegro.png` y `public/assets/logoBlanco.png`
- Misión: `public/assets/images/mision.jpg`
- Visión: `public/assets/images/vision.jpg`
- Hero ¿Quiénes somos?: `public/assets/images/about-hero.jpg`

Las fotos del equipo de liderazgo se cargan desde Cloudinary (URLs en `src/app/pages/about-us/about-us.ts`).

Si las fotos locales no existen aún, la sección Misión/Visión muestra un fondo decorativo hasta que agregues las imágenes.
El hero de About Us usa un degradado de respaldo si falta `about-hero.jpg`.
