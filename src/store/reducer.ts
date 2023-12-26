import { createReducer } from '@reduxjs/toolkit';
import { changeFilterTheme, changeFilterDifficulty, getQuests, setAuthorization, setError, setQuestDataLoadingStatus } from './action';
import { Quest } from '../types/types';
import { AuthorizationStatus } from '../const';
// import { quests } from '../mocks/quests';

export type InitilStateType = {
  activeFilterTheme: string | undefined;
  activeFilterDifficulty: string | undefined;
  authorizationStatus: AuthorizationStatus;
  isQuestDataLoading: boolean;
  quests: Quest[] | null;
  error: string | null;
}

const initialState: InitilStateType = {
  activeFilterTheme: 'all',
  activeFilterDifficulty: 'any',
  quests: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isQuestDataLoading: false,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setQuestDataLoadingStatus, (state, action) => {
      state.isQuestDataLoading = action.payload;
    })
    .addCase(setAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
