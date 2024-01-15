import { City, Address, GenreFilter, DifficultyFilter } from './types/types';

export const TIMEOUT_SHOW_ERROR = 2000;

export const EMAIL_PATTERN = /^[\w.]+@([\w-]+\.)+[\w-]{1,}$/;

export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*\d).{3,}/;

export const USER_NAME_PATTERN = /^[А-Яа-яЁёA-Za-z'-]*$/;

export const USER_PHONE_PATTERN = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

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
  Auth = 'Auth',
  NoAuth = 'No_auth',
  Unknown = 'Unknown'
}

export enum SlotName {
  today = 'Сегодня',
  tomorrow = 'Завтра'
}

export enum SlotNameEng {
  tod = 'today',
  tom = 'tomorrow'
}

export const CityPoint: City = {
  title: 'Санкт-Петербург',
  lat: 59.9386300,
  lng: 30.3141300
};

export const AddressPoint: Address = {
  title: 'Санкт-Петербург, Набережная реки Карповка, д 5П',
  lat: 59.96832096011186,
  lng: 30.31738657435266
};

export enum UrlMarker {
  UrlMarkerDefault = '../public/img/svg/pin-default.svg',
  UrlMarkerCurrent = '../public/img/svg/pin-active.svg',
}

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
  Theme = 'Тематика',
  Difficulty = 'Сложность'
}

export const GenreFilters: GenreFilter[] = [
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

export enum RegisterName {
  UserName = 'userName',
  UserPhone = 'userTel',
  Persons = 'persons',
  Email = 'email',
  Password = 'password'
}

export enum FormValidationErrorMessage {
  InvalidName = 'Укажите имя',
  InvalidNameLength = 'Имя должно быть от 1 до 15 символов',
  InvalidNameSymbols = 'Имя может содержать только буквы А-Я, а-я, A-Z, a-z и символ -',
  InvalidPhoneFormat = 'Телефон должен быть введен в формате +7(000)000-00-00',
  InvalidPhone = 'Введите номер телефона',
  InvalidPersons = 'Укажите количество участников',
  InvalidPersonsCount = 'Возможное количество участников: ',
  InvalidEmail = 'Укажите email',
  InvalidEmailFormat = 'Email должен быть вида name@domen.ru',
  InvalidPassword = 'Придумайте пароль',
  InvalidPasswordFormat = 'Пароль должен состоять минимум из одной буквы и цифры',
  InvalidPasswordLength = 'Пароль может содержать oт 3 до 15 символов'
}

export const NameSpace = {
  AppData: 'APP_DATA',
  UserData: 'USER_DATA',
  UserProcess: 'USER_PROCESS',
} as const;

export enum Level {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}
