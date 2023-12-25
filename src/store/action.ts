import { createAction } from '@reduxjs/toolkit';

export const changeFilterTheme = createAction('changeFilterTheme', (theme: string | undefined) => ({ payload: theme }));

export const changeFilterDifficulty = createAction('changeFilterDifficulty', (difficulty: string | undefined) => ({payload: difficulty}));

export const changeAuthorisationStatus = createAction('changeAuthorisationStatus', (authorizationStatus: string | undefined) => ({payload: authorizationStatus}));

export const getQuests = createAction('getQuests');
