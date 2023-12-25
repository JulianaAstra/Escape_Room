import { createReducer } from '@reduxjs/toolkit';
import { changeFilterTheme, changeFilterDifficulty, changeAuthorisationStatus, getQuests } from './action';
import { Quest } from '../types/types';
import { quests } from '../mocks/quests';

export type InitilStateType = {
  activeFilterTheme: string | undefined;
  activeFilterDifficulty: string | undefined;
  authorizationStatus: string | undefined;
  quests: Quest[];
}

const initialState: InitilStateType = {
  activeFilterTheme: 'all',
  activeFilterDifficulty: 'any',
  authorizationStatus: 'auth',
  quests: quests
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilterTheme, (state, action) => {
      state.activeFilterTheme = action.payload;
    })
    .addCase(changeFilterDifficulty, (state, action) => {
      state.activeFilterDifficulty = action.payload;
    })
    .addCase(getQuests, (state) => {
      state.quests = quests;
    })
    .addCase(changeAuthorisationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
