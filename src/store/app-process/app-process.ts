// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { NameSpace } from '../../const';
// import { AppProcess } from '../../types/state';
// import { fetchBookQuestAction, deleteQuestAction } from '../api-actions';

// const initialState: AppProcess = {
//   activeFilterTheme: 'all',
//   activeFilterDifficulty: 'any',
//   isBookQuestLoading: false,
//   isDeleteQuestLoading: false,
// };

// export const appProcess = createSlice({
//   name: NameSpace.AppProcess,
//   initialState,
//   reducers: {
//     changeFilterTheme: (state, action: PayloadAction<string>) => {
//       state.activeFilterTheme = action.payload;
//     },
//     changeFilterDifficulty: (state, action: PayloadAction<string>) => {
//       state.activeFilterDifficulty = action.payload;
//     },
//     sortQuests: (state, action: PayloadAction<string>) => {
//       state.
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchBookQuestAction.pending, (state) => {
//         state.isBookQuestLoading = true;
//       })
//       .addCase(fetchBookQuestAction.fulfilled, (state) => {
//         state.isBookQuestLoading = false;
//       })
//       .addCase(deleteQuestAction.pending, (state) => {
//         state.isDeleteQuestLoading = true;
//       })
//       .addCase(deleteQuestAction.fulfilled, (state) => {
//         state.isDeleteQuestLoading = false;
//       });
//   }
// });

// export const {changeFilterTheme, changeFilterDifficulty} = appProcess.actions;
