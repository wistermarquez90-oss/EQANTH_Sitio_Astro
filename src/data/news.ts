export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  body: string[];
  link?: {
    label: string;
    path: string;
  };
}

// La primera entrada es la más reciente. Añade nuevas noticias al principio.
export const newsItems: NewsItem[] = [
  {
    slug: 'faces-fest-agenda-eqanth',
    title: 'FACES FEST abre nuestra agenda de eventos',
    excerpt: 'El primer evento de nuestra agenda ya tiene un espacio para reunir sus novedades y toda la información que el equipo confirme.',
    category: 'Eventos',
    body: [
      'FACES FEST es la primera iniciativa que formará parte del apartado de eventos de EQANTH. Este espacio permitirá seguir su preparación y conocer cada actualización oficial.',
      'La fecha, el lugar, las actividades y la forma de participación se publicarán cuando el equipo los tenga confirmados. Después del evento, esta página también podrá conservar su memoria y sus resultados.'
    ],
    link: { label: 'Conocer FACES FEST', path: 'eventos/#faces-fest' }
  },
  {
    slug: 'equipo-directivo-eqanth',
    title: 'Un nuevo espacio para conocer al equipo directivo',
    excerpt: 'La presidencia y las comisiones de las cinco carreras contarán con fichas para identificar a quienes coordinan el proyecto.',
    category: 'Comunidad',
    body: [
      'El apartado Equipo actual nace para hacer visible a las personas que coordinan EQANTH: Mariana Parada, presidenta, y las comisiones de Economía, Contaduría, Estadística, Administración de Empresa y Gastronomía.',
      'Las fichas quedan preparadas para incorporar los nombres y las fotografías de los encargados de cada comisión cuando el equipo valide esa información.'
    ],
    link: { label: 'Conocer al equipo', path: 'equipo/' }
  },
  {
    slug: 'nuevo-sitio-eqanth',
    title: 'Estrenamos un nuevo punto de encuentro digital',
    excerpt: 'El nuevo sitio reúne noticias, eventos, historias, orientación y las voces de nuestra comunidad en una sola plataforma.',
    category: 'Proyecto',
    body: [
      'EQANTH estrena un sitio web diseñado para informar, conectar y preservar lo que sucede en FACES. La plataforma reúne contenidos útiles y acerca a las personas que hacen posible el proyecto.',
      'Esta primera versión incorpora los apartados de Noticias, Equipo actual y Eventos, además de Historias FACES, Podcast, Tu guía FACES y los espacios de participación.'
    ],
    link: { label: 'Conocer el proyecto', path: 'somos/' }
  }
];
