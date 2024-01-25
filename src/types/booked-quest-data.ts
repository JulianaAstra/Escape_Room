import { Location, Quest } from './types';

export type BookedQuestData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean | undefined;
  peopleCount: number;
  placeId: string | null | undefined;
  id: string | null;
};

export type ReservedQuestData = {
  date: string;
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  id: string;
  location: Location;
  quest: Quest;
};
