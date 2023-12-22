export enum AppRoute {
  Root = '/',
  Booking = '/quest/:id/booking',
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

