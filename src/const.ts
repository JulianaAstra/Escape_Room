import { City, Address } from './types/types';

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
