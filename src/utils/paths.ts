export const baseUrl = import.meta.env.BASE_URL;

export function href(path = ''): string {
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}

export function asset(path: string): string {
  return href(path);
}
