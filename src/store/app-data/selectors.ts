import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Quest, DetailedQuest, Point } from '../../types/types';

export const getQuests = (state: State): Quest[] | null => state[NameSpace.AppData].quests;
export const getFilteredQuests = (state: State): Quest[] | null => state[NameSpace.AppData].filteredQuests;
export const getDetailedQuest = (state: State): DetailedQuest | null => state[NameSpace.AppData].detailedQuest;
export const getBookingInfo = (state: State): Point[] | null => state[NameSpace.AppData].bookingInfo;
export const getQuestDataLoadingStatus = (state: State): boolean => state[NameSpace.AppData].isQuestDataLoading;
export const getDetailedQuestDataLoadingStatus = (state: State): boolean => state[NameSpace.AppData].isDetailedQuestDataLoading;
export const getBookingInfoLoadingStatus = (state: State): boolean => state[NameSpace.AppData].isBookingInformationDataLoading;
export const setActiveFilterTheme = (state: State): string => state[NameSpace.AppData].activeFilterTheme;
export const setActiveFilterDifficulty = (state: State): string => state[NameSpace.AppData].activeFilterDifficulty;
export const getBookQuestLoadingStatus = (state: State): boolean => state[NameSpace.AppData].isBookQuestLoading;
export const getDeleteQuestLoadingStatus = (state: State): boolean => state[NameSpace.AppData].isDeleteQuestLoading;

