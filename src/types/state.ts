import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Quest, DetailedQuest, BookedQuest, Point } from './types';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type AppData = {
  quests: Quest[] | null;
  detailedQuest: DetailedQuest | null;
  filteredQuests: Quest[] | null;
  bookingInfo: Point[] | null;
  isQuestDataLoading: boolean;
  isDetailedQuestDataLoading: boolean;
  isBookingInformationDataLoading: boolean;
  activeFilterTheme: string;
  activeFilterDifficulty: string;
  isBookQuestLoading: boolean;
  isDeleteQuestLoading: boolean;
}

export type UserData = {
  bookedQuests: BookedQuest[] | null;
  reservationId: string | null;
  isBookedQuestsDataLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
