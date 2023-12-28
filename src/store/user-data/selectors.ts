import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { BookedQuest } from '../../types/types';

export const getBookedQuests = (state: State): BookedQuest[] | null => state[NameSpace.UserData].bookedQuests;
export const getBookedQuestsDataLoadingStatus = (state: State): boolean => state[NameSpace.UserData].isBookedQuestsDataLoading;
export const getReservationId = (state: State): string | null => state[NameSpace.UserData].reservationId;
