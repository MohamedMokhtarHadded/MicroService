import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [

  {
    navCap: 'bloc',
  },
  {
    displayName: 'Afficher bloc',
    iconName: 'list',
    route: '/ui-components/bloc',
  },
  {
    displayName: 'Ajouter bloc',
    iconName: 'pencil-plus',
    route: '/ui-components/bloc-form',
  },
 
  {
    navCap: 'Reservation',
  },
  {
    displayName: 'Afficher Reservation',
    iconName: 'list',
    route: '/ui-components/reservation',
  },
  {
    displayName: 'Ajouter Reservation',
    iconName: 'pencil-plus',
    route: '/ui-components/reservation-add',
  },
  {
    navCap: 'Université',
  },
  {
    displayName: 'Ajouter Université',
    iconName: 'mood-smile',
    route: '/ui-components/adduniversite',
  },
  {
    displayName: 'Afficher Université',
    iconName: 'aperture',
    route: '/ui-components/universite',
  },

  {
    navCap: 'Foyer',
  },
  {
    displayName: 'Afficher Foyer',
    iconName: 'aperture',
    route: '/ui-components/foyer',
  },
  {
    displayName: 'ajouter un Foyer',
    iconName: 'tooltip',
    route: '/ui-components/foyer-form',
  },

  {
    navCap: 'chambre',
  },

  {
    displayName: 'Afficher Chambre',
    iconName: 'aperture',
    route: '/ui-components/chambre',
  },
  {
    displayName: 'Ajouter Chambre',
    iconName: 'aperture',
    route: '/ui-components/chambre-form',
  },
  {
    navCap: 'bloc',
  },

  {
    displayName: 'Afficher bloc',
    iconName: 'aperture',
    route: '/ui-components/bloc',
  },
  {
    displayName: 'Ajouter bloc',
    iconName: 'aperture',
    route: '/ui-components/bloc-form',
  },
];
