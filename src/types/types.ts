export type City = {
  title: string;
  lat: string;
  lng: string;
}

export type Location = {
  address: string;
  coords: number[];
}

export type Time = {
  time: string;
  isAvailable: boolean;
}

export type Slots = {
  today:Time[];
  tomorrow: Time[];
}

export type Point = {
  id: string;
  location: Location;
  slots: Slots;
}
