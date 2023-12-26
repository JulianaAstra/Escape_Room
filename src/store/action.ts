import { createAction } from '@reduxjs/toolkit';
import { Quest } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeFilterTheme = createAction('changeFilterTheme', (theme: string | undefined) => ({ payload: theme }));

export const changeFilterDifficulty = createAction('changeFilterDifficulty', (difficulty: string | undefined) => ({payload: difficulty}));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const getQuests = createAction<Quest[]>('getQuests');

export const setQuestDataLoadingStatus = createAction<boolean>('data/setQuestionDataLoadingStatus');

export const setError = createAction<string | null>('setError');
