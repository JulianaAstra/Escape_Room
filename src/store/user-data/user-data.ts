import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { UserData } from '../../types/state';
import { fetchBookedQuestsAction } from '../api-actions';

const initialState: UserData = {
  bookedQuests: [],
  isBookedQuestsDataLoading: false,
  reservationId: null,
};

export const userData = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {
    setBookedQuestsDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isBookedQuestsDataLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBookedQuestsAction.pending, (state) => {
        state.isBookedQuestsDataLoading = true;
      })
      .addCase(fetchBookedQuestsAction.fulfilled, (state, action) => {
        state.bookedQuests = action.payload;
        state.isBookedQuestsDataLoading = false;
      });
  }
});
