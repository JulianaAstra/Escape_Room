import { City } from './types/types';

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
  lat: '59.9386300',
  lng: '30.3141300'
};

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
