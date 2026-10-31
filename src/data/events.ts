export interface EventItem {
  slug: string;
  title: string;
  status: string;
  summary: string;
  date: string;
  location: string;
  participation: string;
}

// Añade aquí los próximos eventos y conserva después su información como archivo.
export const events: EventItem[] = [
  {
    slug: 'faces-fest',
    title: 'FACES FEST',
    status: 'En preparación',
    summary: 'La primera iniciativa de nuestra agenda de eventos. Aquí publicaremos sus novedades, actividades y la información confirmada para acompañarlo.',
    date: 'Fecha por confirmar',
    location: 'Lugar por confirmar',
    participation: 'Información próximamente'
  }
];
