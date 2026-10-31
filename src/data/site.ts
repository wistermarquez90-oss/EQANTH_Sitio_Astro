import { newsItems } from './news';

export const navigation = [
  { label: 'Inicio', path: '' },
  { label: 'Noticias', path: 'noticias/' },
  { label: 'Somos EQANTH', path: 'somos/' },
  { label: 'Equipo actual', path: 'equipo/' },
  { label: 'Historias', path: 'historias/' },
  { label: 'Podcast', path: 'podcast/' },
  { label: 'Eventos', path: 'eventos/' },
  { label: 'Tu guía FACES', path: 'guia/' },
  { label: 'Participa', path: 'participa/' }
];

export const searchEntries = [
  { title: 'Inicio', category: 'Página', description: 'Historias, información y voces para vivir nuestra Facultad.', path: '', keywords: 'inicio eqanth faces comunidad' },
  { title: 'Noticias EQANTH', category: 'Noticias', description: 'Anuncios, novedades y actualidad de nuestra comunidad.', path: 'noticias/', keywords: 'noticias novedades anuncios actualidad importante' },
  { title: 'Equipo actual', category: 'Equipo', description: 'Presidencia y comisiones directivas de las cinco carreras.', path: 'equipo/', keywords: 'mariana parada presidenta directivos economía contaduría estadística administración gastronomía encargados' },
  { title: 'FACES FEST', category: 'Evento', description: 'El primer evento de la agenda EQANTH, actualmente en preparación.', path: 'eventos/#faces-fest', keywords: 'faces fest evento agenda actividades participación' },
  { title: 'Eventos EQANTH', category: 'Eventos', description: 'Próximos eventos, participaciones y memoria de nuestros encuentros.', path: 'eventos/', keywords: 'eventos agenda actividades encuentros fest' },
  { title: 'Somos EQANTH', category: 'Proyecto', description: 'Historia, propósito, misión, visión, objetivos y manifiesto.', path: 'somos/', keywords: 'historia aval consejo facultad 2024 2025 2026 valores' },
  { title: 'Manifiesto EQANTH', category: 'Comunidad', description: 'Diez principios para construir comunidad con respeto y profesionalismo.', path: 'somos/#manifiesto', keywords: 'respeto empatía humildad trabajo equipo valores' },
  { title: 'Historias FACES', category: 'Historias', description: 'Las voces de estudiantes, profesores, personal, autoridades y egresados.', path: 'historias/', keywords: 'perfiles entrevistas memoria talento trayectorias' },
  { title: 'Propón una historia', category: 'Participación', description: 'Comparte una experiencia que merezca ser preservada.', path: 'participa/?tipo=historia#formulario', keywords: 'testimonio relato propuesta contar' },
  { title: 'Podcast EQANTH', category: 'Podcast', description: 'Conversaciones, entrevistas, cápsulas y coberturas especiales.', path: 'podcast/', keywords: 'youtube episodios invitados escuchar entrevistas' },
  { title: 'Sugiere un invitado', category: 'Participación', description: 'Propón una voz para las próximas conversaciones del podcast.', path: 'participa/?tipo=invitado#formulario', keywords: 'entrevista podcast invitado' },
  { title: 'Tu guía FACES', category: 'Guías', description: 'Información académica y administrativa organizada, localizable y fechada.', path: 'guia/', keywords: 'orientación ayuda servicios trámites estudiantes' },
  { title: 'Inscripciones', category: 'Guía en preparación', description: 'Instructivos, horarios, pasos y enlaces oficiales.', path: 'guia/#temas', keywords: 'inscripción materias horario proceso' },
  { title: 'Grupos clasificatorios', category: 'Guía en preparación', description: 'Explicación, consulta y contexto para nuevos ingresos.', path: 'guia/#temas', keywords: 'grupos clasificatorios nuevo ingreso' },
  { title: 'Calendario académico', category: 'Guía en preparación', description: 'Fechas relevantes con fuente y actualización.', path: 'guia/#temas', keywords: 'calendario fechas lapso semestre' },
  { title: 'Trámites y servicios FACES', category: 'Guía en preparación', description: 'Explicaciones simples y acceso a las fuentes oficiales.', path: 'guia/#temas', keywords: 'trámites servicios dependencias documentos' },
  { title: 'Participa en EQANTH', category: 'Comunidad', description: 'Únete al equipo, propone contenidos, colabora o construye una alianza.', path: 'participa/', keywords: 'voluntariado equipo colaborar alianza contacto' },
  { title: 'Contacto', category: 'Contacto', description: 'Escribe al equipo de EQANTH o visita sus canales digitales.', path: 'participa/#contacto', keywords: 'correo instagram youtube teléfono dirección' },
  { title: 'Privacidad', category: 'Información', description: 'Cómo funciona el formulario y qué datos trata este sitio estático.', path: 'privacidad/', keywords: 'datos personales privacidad formulario cookies' },
  ...newsItems.map((item) => ({
    title: item.title,
    category: `Noticia · ${item.category}`,
    description: item.excerpt,
    path: `noticias/#${item.slug}`,
    keywords: `noticia actualidad ${item.category}`
  }))
];

export const manifesto = [
  ['Respetamos las ideas', 'Podemos pensar distinto sin convertir la diferencia en descalificación.'],
  ['Respetamos el trabajo de los demás', 'Reconocemos el tiempo, el esfuerzo y la autoría detrás de cada aporte.'],
  ['Respetamos el tiempo de los demás', 'EQANTH es un proyecto voluntario: organizamos solicitudes y comunicaciones considerando estudio, trabajo, familia y descanso.'],
  ['Trabajamos en equipo sin invadir', 'Colaborar no significa desplazar responsabilidades ni anular la autonomía de otras áreas.'],
  ['Practicamos la empatía', 'Antes de asumir, preguntamos; antes de juzgar, intentamos comprender.'],
  ['Construimos comunidad', 'El proyecto crece cuando las personas encuentran un espacio donde aportar y pertenecer.'],
  ['Sentimos orgullo de pertenecer', 'Comunicamos FACES desde el afecto, sin dejar de reconocer sus retos.'],
  ['Actuamos con profesionalismo', 'Cuidamos la información, la preparación, la forma y la responsabilidad de lo que publicamos.'],
  ['Actuamos con humildad', 'Podemos equivocarnos; reconocemos errores, aceptamos retroalimentación, pedimos ayuda y reconocemos el trabajo ajeno.'],
  ['Recordamos nuestro propósito', 'Cada formato, tendencia o publicación debe servir a la misión de informar, conectar y fortalecer la pertenencia.']
];
