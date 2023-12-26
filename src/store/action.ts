import { createAction } from '@reduxjs/toolkit';
import { Quest, DetailedQuest } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeFilterTheme = createAction('changeFilterTheme', (theme: string | undefined) => ({ payload: theme }));

export const changeFilterDifficulty = createAction('changeFilterDifficulty', (difficulty: string | undefined) => ({payload: difficulty}));

export const setAuthorization = createAction('requireAuthorization', (authorizationStatus: AuthorizationStatus) => ({ payload: authorizationStatus }));

export const getQuests = createAction<Quest[]>('getQuests');

export const getDetailedQuest = createAction<DetailedQuest>('getDetailedQuest');

export const setQuestDataLoadingStatus = createAction<boolean>('data/setQuestionDataLoadingStatus');

export const setDetailedQuestDataLoadingStatus = createAction<boolean>('data/setDetailedQuestDataLoadingStatus');

export const setError = createAction<string | null>('setError');
