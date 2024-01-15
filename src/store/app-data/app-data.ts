import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { fetchQuestAction, fetchDetailedQuestAction, fetchBookingInformationAction, fetchBookQuestAction, deleteQuestAction } from '../api-actions';

const initialState: AppData = {
  quests: [],
  filteredQuests: [],
  bookingInfo: [],
  detailedQuest: null,
  isQuestDataLoading: false,
  isDetailedQuestDataLoading: false,
  isBookingInformationDataLoading: false,
  activeFilterTheme: 'all',
  activeFilterDifficulty: 'any',
  isBookQuestLoading: false,
  isDeleteQuestLoading: false,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    setQuestDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isQuestDataLoading = action.payload;
    },
    setDetailedQuestDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isDetailedQuestDataLoading = action.payload;
    },
    setBookingInformationDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isBookingInformationDataLoading = action.payload;
    },
    changeFilterTheme: (state, action: PayloadAction<string>) => {
      state.activeFilterTheme = action.payload;
    },
    changeFilterDifficulty: (state, action: PayloadAction<string>) => {
      state.activeFilterDifficulty = action.payload;
    },
    filterQuests: (state, action: PayloadAction<string>) => {
      if (action.payload === 'all') {
        state.filteredQuests = state.quests;
        return;
      }
      if (state.quests !== null) {
        state.filteredQuests = state.quests.filter((item) => item.type === action.payload);
      }
    },
    sortQuests: (state, action: PayloadAction<string>) => {
      if (action.payload === 'any') {
        return;
      }
      if (state.filteredQuests !== null) {
        state.filteredQuests = state.filteredQuests.filter((item) => item.level === action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestDataLoading = true;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.isQuestDataLoading = false;
      })
      .addCase(fetchDetailedQuestAction.pending, (state) => {
        state.isDetailedQuestDataLoading = true;
      })
      .addCase(fetchDetailedQuestAction.fulfilled, (state, action) => {
        state.detailedQuest = action.payload;
        state.isDetailedQuestDataLoading = false;
      })
      .addCase(fetchBookingInformationAction.pending, (state) => {
        state.isBookingInformationDataLoading = true;
      })
      .addCase(fetchBookingInformationAction.fulfilled, (state, action) => {
        state.bookingInfo = action.payload;
        state.isBookingInformationDataLoading = false;
      })
      .addCase(fetchBookQuestAction.pending, (state) => {
        state.isBookQuestLoading = true;
      })
      .addCase(fetchBookQuestAction.fulfilled, (state) => {
        state.isBookQuestLoading = false;
      })
      .addCase(deleteQuestAction.pending, (state) => {
        state.isDeleteQuestLoading = true;
      })
      .addCase(deleteQuestAction.fulfilled, (state) => {
        state.isDeleteQuestLoading = false;
      });
  }
});

export const {changeFilterTheme, changeFilterDifficulty, filterQuests, sortQuests} = appData.actions;
