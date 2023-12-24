import { City, Address, GenreFilter, DifficultyFilter } from './types/types';

export enum AppRoute {
  Root = '/',
  Booking = '/booking',
  Login = '/login',
  Contacts = '/contacts',
  MyQuests = '/my-quests',
  Quest = '/quest',
  Error = '/404'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum SlotName {
  today = 'Сегодня',
  tomorrow = 'Завтра'
}

export enum SlotNameEng {
  tod = 'today',
  tom = 'tomorrow'
}

export const CITY: City = {
  title: 'Санкт-Петербург',
  lat: 59.9386300,
  lng: 30.3141300
};

export const ADDRESS: Address = {
  title: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
  lat: 59.96832096011186,
  lng: 30.31738657435266
};

export const URL_MARKER_DEFAULT = '/markup/img/svg/pin-default.svg';

export const URL_MARKER_CURRENT = '/markup/img/svg/pin-active.svg';

export const DifficultyFilters: DifficultyFilter[] = [
  {
    type: 'any',
    name: 'Любой',
  },
  {
    type: 'easy',
    name: 'Лёгкий',
  },
  {
    type: 'middle',
    name: 'Средний',
  },
  {
    type: 'hard',
    name: 'Сложный',
  },
];

export enum Filters {
  theme = 'Тематика',
  difficulty = 'Сложность'
}

export const GenrereFilters: GenreFilter[] = [
  {
    type: 'all',
    name: 'Все квесты',
    img: '#icon-all-quests',
    width: '26',
    height: '30'
  },
  {
    type: 'adventure',
    name: 'Приключения',
    img: '#icon-adventure',
    width: '36',
    height: '30'
  },
  {
    type: 'horror',
    name: 'Ужасы',
    img: '#icon-horror',
    width: '30',
    height: '30'
  },
  {
    type: 'mystic',
    name: 'Мистика',
    img: '#icon-mystic',
    width: '30',
    height: '30'
  },
  {
    type: 'detective',
    name: 'Детектив',
    img: '#icon-detective',
    width: '40',
    height: '30'
  },
  {
    type: 'sciFi',
    name: 'Sci-fi',
    img: '#icon-sci-fi',
    width: '28',
    height: '30'
  }
];

