import { createAction } from '@reduxjs/toolkit';
import { Quest, DetailedQuest, Point } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeFilterTheme = createAction('changeFilterTheme', (theme: string | undefined) => ({ payload: theme }));

export const changeFilterDifficulty = createAction('changeFilterDifficulty', (difficulty: string | undefined) => ({payload: difficulty}));

export const setAuthorization = createAction('requireAuthorization', (authorizationStatus: AuthorizationStatus) => ({ payload: authorizationStatus }));

export const getQuests = createAction<Quest[]>('getQuests');

export const getDetailedQuest = createAction<DetailedQuest>('getDetailedQuest');

export const getBookingInformation = createAction<Point[]>('getBookingInformation');

export const setQuestDataLoadingStatus = createAction<boolean>('data/setQuestionDataLoadingStatus');

export const setDetailedQuestDataLoadingStatus = createAction<boolean>('data/setDetailedQuestDataLoadingStatus');

export const setBookingInformationDataLoadingStatus = createAction<boolean>('data/setBookingInformationDataLoadingStatus');

export const setError = createAction<string | null>('setError');
