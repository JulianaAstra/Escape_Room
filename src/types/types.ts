export type City = {
  title: string;
  lat: number;
  lng: number;
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

export type Address = {
  title: string;
  lat: number;
  lng: number;
};

export type GenreFilter = {
  type: string;
  name: string;
  img: string;
  width: string;
  height: string;
}

export type DifficultyFilter = {
  type: string;
  name: string;
}

export type DetailedQuest = {
  id: string;
  title: string;
  description: string;
  previewImg: string;
  previewImgWebp: string;
  coverImg: string;
  coverImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
}

export type BookedQuest = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: BookedQuestDetailed;
};

export type BookedQuestDetailed = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: string;
  type: string;
  peopleMinMax: number[];
};

