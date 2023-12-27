import { createAction } from '@reduxjs/toolkit';
import { Quest, DetailedQuest, Point, BookedQuest } from '../types/types';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeFilterTheme = createAction('changeFilterTheme', (theme: string | undefined) => ({ payload: theme }));

export const changeFilterDifficulty = createAction('changeFilterDifficulty', (difficulty: string | undefined) => ({payload: difficulty}));

export const setAuthorization = createAction('requireAuthorization', (authorizationStatus: AuthorizationStatus) => ({ payload: authorizationStatus }));

export const getQuests = createAction<Quest[]>('getQuests');

export const getDetailedQuest = createAction<DetailedQuest>('getDetailedQuest');

export const getBookingInformation = createAction<Point[]>('getBookingInformation');

export const getBookedQuests = createAction<BookedQuest[]>('getBookedQuests');

export const setQuestDataLoadingStatus = createAction<boolean>('data/setQuestionDataLoadingStatus');

export const setDetailedQuestDataLoadingStatus = createAction<boolean>('data/setDetailedQuestDataLoadingStatus');

export const setBookingInformationDataLoadingStatus = createAction<boolean>('data/setBookingInformationDataLoadingStatus');

export const setBookedQuestsDataLoadingStatus = createAction<boolean>('setBookedQuestsDataLoadingStatus');

export const setError = createAction<string | null>('setError');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setReservationId = createAction<string | null>('setReservationId');
