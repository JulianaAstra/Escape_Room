import { AxiosInstance } from 'axios';
import { Store, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Quest } from '../types/types';
import { getQuests, setAuthorization, setError, setQuestDataLoadingStatus } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from '.';

export const clearErrorAction = createAsyncThunk('clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR,);
},);

export const fetchQuestAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchQuests', async (_arg, {dispatch, extra: api}) => {
    dispatch(setQuestDataLoadingStatus(true));
    const {data} = await
    api.get<Quest[]>(APIRoute.Quests);
    dispatch(setQuestDataLoadingStatus(false));
    dispatch(getQuests(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('user/login', async ({login: email, password},
  {dispatch, extra: api}) => {
  const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
  saveToken(token);

  dispatch(setAuthorization(AuthorizationStatus.Auth));
},
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  store: Store;
  extra: AxiosInstance;
}>('user/logout', async (_arg, {dispatch, extra: api}) => {
  await api.delete(APIRoute.Logout);
  dropToken();

  dispatch(setAuthorization(AuthorizationStatus.NoAuth));
},);


