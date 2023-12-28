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

export enum APIRoute {
  Quests = '/v1/escape-room/quest',
  Login = '/v1/escape-room/login',
  Logout = '/v1/escape-room/logout',
  Reservation='/v1/escape-room/reservation'
}

export enum AuthorizationStatus {
  Auth = 'auth',
  NoAuth = 'no_auth',
  Unknown = 'unknown'
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
    type: 'medium',
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
    type: 'adventures',
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
    type: 'sci-fi',
    name: 'Sci-fi',
    img: '#icon-sci-fi',
    width: '28',
    height: '30'
  }
];

export const TIMEOUT_SHOW_ERROR = 2000;

export const emailPattern = /^[\w.]+@([\w-]+\.)+[\w-]{1,}$/;

export const passwordPattern = /^(?=.*[a-z])(?=.*\d).{3,}/;

export const userNamePattern = /^[А-Яа-яЁёA-Za-z'-]*$/;

export const userTelPattern = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

export enum RegisterName {
  USER_NAME = 'userName',
  USER_TEL = 'userTel',
  PERSONS = 'persons',
  EMAIL = 'email',
  PASSWORD = 'password'
}

export enum FormValidationErrorMessage {
  INVALID_NAME = 'Укажите имя',
  IMVALID_NAME_LENGTH = 'Имя должно быть от 1 до 15 символов',
  INVALID_NAME_SYMBOLS = 'Имя может содержать только буквы А-Я, а-я, A-Z, a-z и символ -',
  INVALID_PHONE_FORMAT = 'Телефон должен быть введен в формате +7(000)000-00-00',
  INVALID_PHONE = 'Введите номер телефона',
  INVALID_PERSONS = 'Укажите количество участников',
  INVALID_PERSONS_COUNT = 'Возможное количество участников: ',
  INVALID_EMAIL = 'Укажите email',
  INVALID_EMAIL_FORMAT = 'Email должен быть вида name@domen.ru',
  INVALID_PASSWORD = 'Придумайте пароль',
  INVALID_PASSWORD_FORMAT = 'Пароль должен состоять минимум из одной буквы и цифры',
  INVALID_PASSWORD_LENGTH = 'Пароль может содержать oт 3 до 15 символов'
}
