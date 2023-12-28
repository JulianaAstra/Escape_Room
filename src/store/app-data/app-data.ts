import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { AppData } from '../../types/state';
import { fetchQuestAction, fetchDetailedQuestAction, fetchBookingInformationAction } from '../api-actions';

const initialState: AppData = {
  quests: [],
  bookingInfo: [],
  detailedQuest: null,
  isQuestDataLoading: false,
  isDetailedQuestDataLoading: false,
  isBookingInformationDataLoading: false,
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
      });
  }
});

