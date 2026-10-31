# EQANTH — ¿En qué aula nos toca hoy?

Sitio web estático desarrollado con **Astro** para el proyecto comunicacional EQANTH de la Facultad de Ciencias Económicas y Sociales (FACES) de la Universidad de Los Andes.

El contenido y la arquitectura proceden del `Documento Maestro Web EQANTH`. La paleta, el logotipo, las fotografías y la tipografía Montserrat proceden del `Manual de Identidad Visual EQANTH` suministrado por el equipo.

## Páginas incluidas

- Inicio.
- Somos EQANTH: historia, misión, visión, objetivos y manifiesto.
- Historias FACES.
- Podcast.
- Tu guía FACES.
- Participa y contacto.
- Privacidad.
- Página 404 personalizada.

También incluye buscador interno, menú móvil, módulo interactivo «Hoy nos toca…», formulario que prepara un correo sin almacenar datos, diseño responsive y configuración automática para GitHub Pages.

> Las fichas de historias, episodios y guías variables están identificadas como «en preparación». No se inventaron episodios, testimonios ni datos académicos oficiales.

## Requisitos

- Node.js 22 (recomendado) y npm.
- Git, únicamente si vas a publicar desde la terminal.
- Una cuenta de GitHub.

## Ejecutar el proyecto en tu computadora

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Astro mostrará una dirección local, normalmente `http://localhost:4321`.

Para comprobar la versión de producción:

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`. No es necesario subir manualmente esa carpeta: GitHub Actions la crea durante la publicación.

# Publicar en GitHub y GitHub Pages

## 1. Crea el repositorio

1. Entra en GitHub y pulsa **New repository**.
2. Escribe un nombre, por ejemplo `eqanth-web`.
3. Puedes dejarlo público.
4. Para evitar conflictos con el primer envío, no marques la creación automática de README, `.gitignore` ni licencia.
5. Pulsa **Create repository**.

## 2. Sube el código desde la terminal

Dentro de la carpeta del proyecto, ejecuta estos comandos una sola vez. Sustituye `TU_USUARIO` y `TU_REPOSITORIO` por los valores reales:

```bash
git init
git add .
git commit -m "Primera versión de la web EQANTH"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

Si GitHub solicita autenticación, utiliza el método que ofrezca tu instalación de Git o GitHub CLI. No escribas contraseñas ni tokens dentro del código.

## 3. Activa GitHub Pages

1. Abre el repositorio en GitHub.
2. Entra en **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Ve a la pestaña **Actions**. El flujo «Publicar EQANTH en GitHub Pages» se ejecutará automáticamente después de cada `push` a `main`.
5. Cuando termine, vuelve a **Settings → Pages** para ver la dirección publicada.

La dirección habitual será:

```text
https://TU_USUARIO.github.io/TU_REPOSITORIO/
```

Si el repositorio se llama exactamente `TU_USUARIO.github.io`, la dirección será `https://TU_USUARIO.github.io/`.

La configuración de `astro.config.mjs` detecta automáticamente el nombre del repositorio durante GitHub Actions y ajusta el valor `base`. No tienes que editar las rutas al cambiar el nombre del repositorio.

## 4. Publicar cambios posteriores

Después de editar archivos:

```bash
git add .
git commit -m "Describe aquí el cambio realizado"
git push
```

El flujo volverá a compilar y publicar el sitio.

## Alternativa: GitHub Desktop

1. Abre GitHub Desktop y elige **Add → Add existing repository**. Si la carpeta aún no es un repositorio, primero elige **Create a new repository** y selecciona esa carpeta.
2. Escribe un resumen en **Summary** y pulsa **Commit to main**.
3. Pulsa **Publish repository**.
4. En GitHub, activa **Settings → Pages → Source → GitHub Actions**.

# Editar el contenido

```text
src/
├── components/       Cabecera, buscador, pie de página e iconos
├── data/site.ts      Navegación, buscador y manifiesto
├── layouts/          Estructura HTML y metadatos compartidos
├── pages/            Contenido principal de cada página
├── styles/global.css Colores, tipografía y estilos compartidos
└── utils/paths.ts    Rutas compatibles con GitHub Pages
public/
├── images/           Logotipos y fotografías optimizadas
└── robots.txt
.github/workflows/
└── deploy.yml        Publicación automática en GitHub Pages
```

- Para cambiar textos de una sección, edita su archivo en `src/pages/`.
- Para añadir o corregir resultados del buscador, actualiza `searchEntries` en `src/data/site.ts`.
- Para sustituir fotografías, conserva el nombre del archivo en `public/images/` o actualiza su referencia en la página correspondiente.
- Para revisar enlaces de Instagram o YouTube, búscalos en `src/components/Footer.astro`, `src/components/Header.astro` y `src/pages/participa.astro`.

## Alcance técnico

Esta entrega es un MVP estático. No incluye CMS, base de datos, analítica ni envío directo de formularios a un servidor. El contenido se edita en los archivos del repositorio. El formulario utiliza `mailto:` para que la persona revise y confirme el correo desde su propia aplicación.

El dominio definitivo no se configura automáticamente. GitHub Pages usa la dirección del repositorio hasta que el equipo valide y conecte un dominio propio.

Documentación oficial: https://docs.astro.build/en/guides/deploy/github/
