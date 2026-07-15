Coloca aquí los activos locales de la web (logo y fotos de secciones):

- Logo: `public/assets/logoNegro.png` y `public/assets/logoBlanco.png`
- Misión: `public/assets/images/mision.jpg`
- Visión: `public/assets/images/vision.jpg`
- Hero inicio (directivos): `public/assets/images/hero-inicio.jpg`
- Hero programas: `public/assets/images/equipo.jpg`

Las fotos del equipo de liderazgo se cargan desde Cloudinary (URLs en `src/app/pages/about-us/about-us.ts`).

Si las fotos locales no existen aún, la sección Misión/Visión muestra un fondo decorativo hasta que agregues las imágenes.
El hero de inicio usa un degradado de respaldo si falta `hero-inicio.jpg`.
