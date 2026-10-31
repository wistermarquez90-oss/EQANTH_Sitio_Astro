export interface TeamMember {
  id: string;
  name: string | null;
  position: string;
  area: string;
  photo: string | null;
  initials: string;
}

// Sustituye name y photo cuando la información esté validada.
// Las fotografías deben guardarse en public/images/equipo/.
export const president: TeamMember = {
  id: 'mariana-parada',
  name: 'Mariana Parada',
  position: 'Presidenta',
  area: 'Dirección general de EQANTH',
  photo: null,
  initials: 'MP'
};

export const commissioners: TeamMember[] = [
  { id: 'economia', name: null, position: 'Encargado de comisión', area: 'Economía', photo: null, initials: 'EC' },
  { id: 'contaduria', name: null, position: 'Encargado de comisión', area: 'Contaduría', photo: null, initials: 'CO' },
  { id: 'estadistica', name: null, position: 'Encargado de comisión', area: 'Estadística', photo: null, initials: 'ES' },
  { id: 'administracion', name: null, position: 'Encargado de comisión', area: 'Administración de Empresa', photo: null, initials: 'AE' },
  { id: 'gastronomia', name: null, position: 'Encargado de comisión', area: 'Gestión Gastronómica', photo: null, initials: 'GG' }
];
