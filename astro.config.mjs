import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const repositoryName = repository?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repositoryName?.endsWith('.github.io');

// En GitHub Actions, el sitio se adapta automáticamente al repositorio:
// usuario.github.io → base "/" · usuario.github.io/mi-repo → base "/mi-repo".
const base = process.env.BASE_PATH ?? (repositoryName && !isUserSite ? `/${repositoryName}` : '/');
const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'http://localhost:4321');

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      rollupOptions: {
        // Escritura pausada: evita errores ENOENT en sistemas de archivos montados.
        maxParallelFileOps: 4
      }
    }
  }
});
