import { createAsyncThunk } from '@reduxjs/toolkit';
import { Quest, DetailedQuest, Point } from '../types/types';
import { getQuests, getDetailedQuest, setAuthorization, setError, setQuestDataLoadingStatus, setDetailedQuestDataLoadingStatus, setBookingInformationDataLoadingStatus, getBookingInformation } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from '.';
import { ThunkObjType } from '../types/thunk-object';

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR,);
},);

export const fetchQuestAction = createAsyncThunk<void, undefined, ThunkObjType>(
  'data/fetchQuests', async (_arg, {dispatch, extra: api}) => {
    dispatch(setQuestDataLoadingStatus(true));
    const {data} = await
    api.get<Quest[]>(APIRoute.Quests);
    dispatch(getQuests(data));
    dispatch(setQuestDataLoadingStatus(false));
  },
);

export const fetchDetailedQuestAction = createAsyncThunk<void, {id: string}, ThunkObjType>(
  'data/fetchDetailedQuest', async ({id}, {dispatch, extra: api}) => {
    dispatch(setDetailedQuestDataLoadingStatus(true));
    const url = id !== undefined ? `${APIRoute.Quests}/${id}` : '';
    const {data} = await
    api.get<DetailedQuest>(url);
    dispatch(getDetailedQuest(data));
    dispatch(setDetailedQuestDataLoadingStatus(false));
  },
);

export const fetchBookingInformationAction = createAsyncThunk<void, {id: string}, ThunkObjType>(
  'data/fetchBookingInformation', async ({id}, {dispatch, extra: api}) => {
    dispatch(setBookingInformationDataLoadingStatus(true));
    const url = id !== undefined ? `${APIRoute.Quests}/${id}/booking` : '';
    const {data} = await
    api.get<Point[]>(url);
    dispatch(getBookingInformation(data));
    dispatch(setBookingInformationDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkObjType>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkObjType>('user/login', async ({email, password},
  {dispatch, extra: api}) => {
  const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
  saveToken(token);

  dispatch(setAuthorization(AuthorizationStatus.Auth));
},
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkObjType>('user/logout', async (_arg, {dispatch, extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();

  dispatch(setAuthorization(AuthorizationStatus.NoAuth));
},);


