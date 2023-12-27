import { createReducer } from '@reduxjs/toolkit';
import { changeFilterTheme, changeFilterDifficulty, getQuests, setAuthorization, setError, setQuestDataLoadingStatus, getDetailedQuest, setDetailedQuestDataLoadingStatus, setBookingInformationDataLoadingStatus, getBookingInformation, setBookedQuestsDataLoadingStatus, getBookedQuests } from './action';
import { Quest, DetailedQuest, BookedQuest } from '../types/types';
import { AuthorizationStatus } from '../const';
import { Point } from '../types/types';

export type InitilStateType = {
  activeFilterTheme: string | undefined;
  activeFilterDifficulty: string | undefined;
  authorizationStatus: AuthorizationStatus;
  isQuestDataLoading: boolean;
  isDetailedQuestDataLoading: boolean;
  isBookingInformationDataLoading: boolean;
  isBookedQuestsDataLoading: boolean;
  quests: Quest[] | null;
  detailedQuest: DetailedQuest | null;
  bookingInfo: Point[] | null;
  bookedQuests: BookedQuest[] | null;
  error: string | null;
}

const initialState: InitilStateType = {
  activeFilterTheme: 'all',
  activeFilterDifficulty: 'any',
  quests: [],
  bookingInfo: [],
  detailedQuest: null,
  bookedQuests: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestDataLoading: false,
  isDetailedQuestDataLoading: false,
  isBookingInformationDataLoading: false,
  isBookedQuestsDataLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilterTheme, (state, action) => {
      state.activeFilterTheme = action.payload;
    })
    .addCase(changeFilterDifficulty, (state, action) => {
      state.activeFilterDifficulty = action.payload;
    })
    .addCase(getQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(getDetailedQuest, (state, action) => {
      state.detailedQuest = action.payload;
    })
    .addCase(getBookingInformation, (state, action) => {
      state.bookingInfo = action.payload;
    })
    .addCase(getBookedQuests, (state, action) => {
      state.bookedQuests = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setQuestDataLoadingStatus, (state, action) => {
      state.isQuestDataLoading = action.payload;
    })
    .addCase(setDetailedQuestDataLoadingStatus, (state, action) => {
      state.isDetailedQuestDataLoading = action.payload;
    })
    .addCase(setBookingInformationDataLoadingStatus, (state, action) => {
      state.isBookingInformationDataLoading = action.payload;
    })
    .addCase(setBookedQuestsDataLoadingStatus, (state, action) => {
      state.isBookedQuestsDataLoading = action.payload;
    })
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
